import data from "@/data/products.json";
import { NextResponse } from "next/server";

const products = data.products;
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = products.find((product) => String(product.id) === String(id));

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, {
    status: 200,
  });
}
