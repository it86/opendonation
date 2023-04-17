"use client";

import { DonationEntity } from "./model/model";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import DonationTable from "./components/DonationTable";
import DonationAdd from "./components/DonationAdd";

export default function Content({ data }: { data: Array<DonationEntity> }) {
  return (
    <>
      <DonationTable data={data} />
      <ButtonToolbar>
        <ButtonGroup>
          <DonationAdd />
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
