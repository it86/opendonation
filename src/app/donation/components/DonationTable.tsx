"use client";

import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Donation } from "@prisma/client";
import BasicTable from "@/components/BasicTable";

const columnHelper = createColumnHelper<Donation>();

const columns = [
  columnHelper.group({
    id: "donor",
    header: () => "Spender",
    columns: [
      columnHelper.accessor("donorId", {
        header: () => "Vorname",
      }),
      //   columnHelper.accessor("donor.lastName", {
      //     header: () => "Nachname",
      //   }),
      //   columnHelper.accessor("donor.street", {
      //     header: () => "Straße",
      //   }),
      //   columnHelper.accessor("donor.postalCode", {
      //     header: () => "Postleitzahl",
      //   }),
      //   columnHelper.accessor("donor.city", {
      //     header: () => "Ort",
      //   }),
    ],
  }),
  columnHelper.accessor("amount", {
    header: () => "Betrag",
  }),
  columnHelper.accessor("date", {
    header: () => "Datum",
  }),
];

export interface DonationTableProps {
  data: Array<Donation>;
}

export default function DonationTable({ data }: DonationTableProps) {
  return <BasicTable data={data} columns={columns} />;
}
