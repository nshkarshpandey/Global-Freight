"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { Container } from "@/components/container";
import Service from "@/components/service";
import useScreenSize from '@/hooks/useScreenSize';
import Freight from "@/components/freight";
// import Image from "next/image";

export default function Home() {
   const { width, height } = useScreenSize();
  return (
    
    <Container>
      <p className="relative text-lg text-black">Current Screen Size: {width}px X {height}px</p>
      <Header />
      <Hero />
      <Service />
      <Freight />
   </Container>
   
  );
}
