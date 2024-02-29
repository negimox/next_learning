import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const Page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const json: User[] = await data.json();
  return (
    <div className="p-4 font-bold">
      <p>{new Date().toLocaleDateString()}</p>
      {json.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default Page;
