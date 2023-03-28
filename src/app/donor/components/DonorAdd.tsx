"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { DonorValues } from "../model/model";
import DonorForm from "./DonorForm";

const DEFAULT: DonorValues = {
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
};

const DonorAdd: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [show, setShow] = useState(false);
  const [donor, setDonor] = useState(DEFAULT);

  function handleShow() {
    setDonor(DEFAULT);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  async function handleSave() {
    console.log("Start Saving...");

    await fetch("./donor/api", {
      method: "POST",
      body: JSON.stringify(donor),
    });

    console.log("End Saving...");

    startTransition(() => {
      router.refresh();
      handleClose();
    });
  }

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Hinzufügen
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spender hinzufügen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonorForm value={donor} onChange={setDonor} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isPending}>
            Speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default DonorAdd;
