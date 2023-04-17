import React from "react";
import { prisma } from "@/server/utils/prisma";
import { DonorEntity } from "./model/model";
import Content from "./content";

async function getData() {
  const records = await prisma.donor.findMany();
  const donors: Array<DonorEntity> = records.map((record) => ({
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    values: {
      firstName: record.firstName || "",
      lastName: record.lastName,
      street: record.street,
      postalCode: record.postalCode,
      city: record.city,
    },
  }));

  return donors;
}

export default async function Page() {
  const data = await getData();

  return <Content data={data} />;
}
