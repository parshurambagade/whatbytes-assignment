import ProductCardsContainer from "@/components/ProductCardsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-background">
      <section aria-labelledby="product-listing">
        <h1 id="product-listing" className="text-2xl font-bold">
          Product Listing
        </h1>
        <ProductCardsContainer />
      </section>
    </main>
  );
}
