"use client";

import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DonationEntity } from "../model/model";
import BasicTable from "@/components/BasicTable";

const columnHelper = createColumnHelper<DonationEntity>();

const columns = [
  columnHelper.group({
    id: "donor",
    header: () => "Spender",
    columns: [
      columnHelper.accessor("donor.firstName", {
        header: () => "Vorname",
      }),
      columnHelper.accessor("donor.lastName", {
        header: () => "Nachname",
      }),
      columnHelper.accessor("donor.street", {
        header: () => "Straße",
      }),
      columnHelper.accessor("donor.postalCode", {
        header: () => "Postleitzahl",
      }),
      columnHelper.accessor("donor.city", {
        header: () => "Ort",
      }),
    ],
  }),
  columnHelper.accessor("values.amount", {
    header: () => "Betrag",
  }),
  columnHelper.accessor("values.date", {
    header: () => "Datum",
  }),
];

export interface DonationTableProps {
  data: Array<DonationEntity>;
}

export default function DonationTable({ data }: DonationTableProps) {
  return <BasicTable data={data} columns={columns} />;
}
