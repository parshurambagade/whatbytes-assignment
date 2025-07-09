import data from "@/data/products.json";
import { NextResponse } from "next/server";

// Handle CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const products = data.products;
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = products.find((product) => String(product.id) === String(id));

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404, headers: corsHeaders }
    );
  }

  return NextResponse.json(product, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}
