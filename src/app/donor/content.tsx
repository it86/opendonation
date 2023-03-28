"use client";

import React from "react";
import { Donor } from "@prisma/client";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import DonorTable from "./components/DonorTable";
import DonorAdd from "./components/DonorAdd";

export default function Content({ data }: { data: Array<Donor> }) {
  return (
    <>
      <DonorTable data={data} />
      <ButtonToolbar>
        <ButtonGroup>
          <DonorAdd />
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
