import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { DonationValues } from "../model/model";
import DonationForm from "./DonationForm";
import { DonorValues } from "@/app/donor/model/model";

const DEFAULT_DONATION_VALUES: DonationValues = {
  amount: 0.0,
  date: new Date().toISOString(),
};

const DEFAULT_DONOR_VALUES: DonorValues = {
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
};

export default function DonationAdd() {
  const [show, setShow] = useState(false);
  const [donationValues, setDonationValues] = useState(DEFAULT_DONATION_VALUES);
  const [donorValues, setDonorValues] = useState(DEFAULT_DONOR_VALUES);

  function handleShow() {
    setDonationValues(DEFAULT_DONATION_VALUES);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Hinzufügen
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spende hinzufügen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonationForm value={donationValues} onChange={setDonationValues} />
          <Card>
            <Card.Title>Spender</Card.Title>
            <Card.Body>
              TODO
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abbrechen
          </Button>
          {/* <Button variant="primary" onClick={handleSave} disabled={isPending}>
            Speichern
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
