import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { DonorValues } from "../model/model";

export default function DonorForm({
  value,
  onChange,
}: {
  value: DonorValues;
  onChange: React.Dispatch<React.SetStateAction<DonorValues>>;
}) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Vorname</Form.Label>
        <Form.Control
          value={value.firstName}
          onChange={(event) =>
            onChange((prev) => ({ ...prev, firstName: event.target.value }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nachname</Form.Label>
        <Form.Control
          value={value.lastName}
          onChange={(event) =>
            onChange((prev) => ({ ...prev, lastName: event.target.value }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Straße</Form.Label>
        <Form.Control
          value={value.street}
          onChange={(event) =>
            onChange((prev) => ({ ...prev, street: event.target.value }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>PLZ Ort</Form.Label>
        <InputGroup>
          <Form.Control
            value={value.postalCode}
            onChange={(event) =>
              onChange((prev) => ({ ...prev, postalCode: event.target.value }))
            }
            pattern="[0-9]{5}"
          />
          <Form.Control
            value={value.city}
            onChange={(event) =>
              onChange((prev) => ({ ...prev, city: event.target.value }))
            }
          />
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
