"use client";

import React from "react";
import { DonorEntity } from "./model/model";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import DonorTable from "./components/DonorTable";
import DonorAdd from "./components/DonorAdd";

export default function Content({ data }: { data: Array<DonorEntity> }) {
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
