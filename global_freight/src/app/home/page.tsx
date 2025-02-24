"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { Container } from "@/components/container";
import Service from "@/components/service";
// import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Service />
   </Container>
   
  );
}
