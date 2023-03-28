import { trpc } from "@/utils/trpc";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

const DonorAdd: React.FC = (props) => {
  const [show, setShow] = useState(false);

  const [donorFirstName, setDonorFirstName] = useState("");
  const [donorLastName, setDonorLastName] = useState("");
  const [donorStreet, setDonorStreet] = useState("");
  const [donorPostalCode, setDonorPostalCode] = useState("");
  const [donorCity, setDonorCity] = useState("");

  const addDonor = trpc.donor.add.useMutation();

  const handleClose = () => setShow(false);

  const handleSave = () => {
    addDonor.mutate({
      firstName: donorFirstName,
      lastName: donorLastName,
      street: donorStreet,
      postalCode: donorPostalCode,
      city: donorCity,
    });
  };

  const handleShow = () => setShow(true);

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
          <Form>
            <Form.Group>
              <Form.Label>Vorname</Form.Label>
              <Form.Control
                value={donorFirstName}
                onChange={(event) => setDonorFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nachname</Form.Label>
              <Form.Control
                value={donorLastName}
                onChange={(event) => setDonorLastName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Straße</Form.Label>
              <Form.Control
                value={donorStreet}
                onChange={(event) => setDonorStreet(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>PLZ Ort</Form.Label>
              <InputGroup>
                <Form.Control
                  value={donorPostalCode}
                  onChange={(event) => setDonorPostalCode(event.target.value)}
                />
                <Form.Control
                  value={donorCity}
                  onChange={(event) => setDonorCity(event.target.value)}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default DonorAdd;
