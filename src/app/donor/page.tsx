import React from "react";
import { prisma } from "@/server/utils/prisma";
import Content from "./content";

async function getData() {
  const donors = await prisma.donor.findMany();

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return donors;
}

export default async function Page() {
  const data = await getData();

  return <Content data={data} />;
}
