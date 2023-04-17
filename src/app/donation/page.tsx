import React from "react";
import { prisma } from "@/server/utils/prisma";
import { DonationEntity } from "./model/model";
import Content from "./content";

async function getData() {
  const donations = await prisma.donation.findMany();
  const donors = await prisma.donor.findMany();

  const donorMap = new Map(donors.map((donor) => [donor.id, donor]));

  const entities: Array<DonationEntity> = donations.map((donation) => {
    const donor = donorMap.get(donation.donorId)!;

    return {
      values: {
        amount: donation.amount.toNumber(),
        date: donation.date,
      },
      donor: {
        firstName: donor.firstName || "",
        lastName: donor.lastName,
        street: donor.street,
        postalCode: donor.postalCode,
        city: donor.city,
      },
    };
  });

  return entities;
}

export default async function Page() {
  const data = await getData();

  return <Content data={data} />;
}
