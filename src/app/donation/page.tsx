import React from "react";
import { prisma } from "@/server/utils/prisma";
import DonationTable from "./components/DonationTable";

async function getData() {
  const donations = await prisma.donation.findMany();

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return donations;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <DonationTable data={data} />
    </>
  );
}
