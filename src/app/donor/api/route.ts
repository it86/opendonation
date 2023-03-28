import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/utils/prisma";
import { DonorValues } from "../model/model";

export async function POST(request: NextRequest) {
  const res = await request.json();

  console.log(res);

  const donor = await prisma.donor.create({
    data: {
      firstName: res.firstName,
      lastName: res.lastName,
      street: res.street,
      postalCode: res.postalCode,
      city: res.city,
    },
  });

  return NextResponse.json(donor);
}

export async function PUT(request: NextRequest) {
  const res = await request.json();

  console.log(res);

  const donor = await prisma.donor.update({
    where: {
      id: res.id,
    },
    data: {
      firstName: res.values.firstName,
      lastName: res.values.lastName,
      street: res.values.street,
      postalCode: res.values.postalCode,
      city: res.values.city,
    },
  });

  return NextResponse.json(donor);
}
