//sections:
import React from "react";
import Hero from "@/sections/Hero";
import Service from "@/sections/Service";
import Uniqueness from "@/sections/Uniqueness/index";

import Customors from "@/sections/Customors";
import Head from "next/head";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <Service />
      <Uniqueness />
      <Customors />
    </div>
  );
}
