import FilterSidebar from "@/components/home/FilterSidebar";
import ProductCardsContainer from "@/components/home/ProductCardsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-8 items-start justify-between p-8 bg-background">
      <FilterSidebar />
      <section aria-labelledby="product-listing">
        <h1 id="product-listing" className="text-2xl font-bold">
          Product Listing
        </h1>
        <ProductCardsContainer />
      </section>
    </main>
  );
}
