import FilterSidebar from "@/components/home/FilterSidebar";
import ProductCardsContainer from "@/components/home/ProductCardsContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <main className="flex flex-col sm:flex-row min-h-screen gap-8 items-start p-8 bg-background">
        <FilterSidebar />

        <section aria-labelledby="product-listing" className="w-full">
          <h1 id="product-listing" className="text-2xl font-bold">
            Product Listing
          </h1>
          <ProductCardsContainer />
        </section>
      </main>
    </Suspense>
  );
}
