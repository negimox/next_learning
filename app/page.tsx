import Link from "next/link";
import React from "react";
import ProductCart from "@/app/components/ProductCart";

const Home = () => {
  return (
    <main className="font-bold p-4">
      <h1>HELL</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
};

export default Home;
