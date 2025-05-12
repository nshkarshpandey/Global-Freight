"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { Container } from "@/components/container";
import Service from "@/components/service";
import Freight from "@/components/freight";
import Req from "@/components/req";
import Freight_Forwarding from "@/components/freight_forwarding";
import Custom from "@/components/custom";
import CargoHandling from "@/components/cargohandling";
import InTransit from "@/components/intransit";
import ShipContainer from "@/components/ship_container";
import Process from "@/components/process";
import ScrollCard from "@/components/scroll_card";
import Conclusion from "@/components/conclusion";

export default function Home() {
  return (
    <Container className="scrollbar-hide">
      <section className="header">
        <Header />
      </section>

      <section className="hero">
        <Hero />
      </section>

      <section className="service">
        <Service />
      </section>

      <section className="freight">
        <Freight />
      </section>

      <section className="req">
        <Req />
      </section>

      <section className="freight_forwarding">
        <Freight_Forwarding />
      </section>

      <section className="custom">
        <Custom />
      </section>

      <section className="cargohandling">
        <CargoHandling />
      </section>

      <section className="intransit">
        <InTransit />
      </section>

      <section className="shipcontainer">
        <ShipContainer />
      </section>

      <section className="process">
        <Process />
      </section>

      <section className="scrollcard">
        <ScrollCard />
      </section>

      <section className="conclusion">
        <Conclusion />
      </section>
    </Container>
  );
}
