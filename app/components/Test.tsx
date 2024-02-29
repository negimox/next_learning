"use client";
import { useState, useEffect } from "react";

const Test = () => {
  const [dataState, setDataState] = useState("Empty");

  useEffect(() => {
    setDataState("used Effect.");
  }, []);
  console.log(dataState);
  return <div>Test</div>;
};

export default Test;
