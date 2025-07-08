import data from "@/data/products.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data.products, {
    status: 200,
  });
}
