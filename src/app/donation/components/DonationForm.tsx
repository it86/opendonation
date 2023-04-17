import React from "react";
import Form from "react-bootstrap/Form";

import { DonationValues } from "../model/model";

export default function DonationForm({
  value,
  onChange,
}: {
  value: DonationValues;
  onChange: React.Dispatch<React.SetStateAction<DonationValues>>;
}) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Betrag</Form.Label>
        <Form.Control
          value={value.amount}
          onChange={(event) =>
            onChange((prev) => ({
              ...prev,
              amount: Number(event.target.value),
            }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Betrag</Form.Label>
        <Form.Control
          value={value.date}
          //   onChange={(event) =>
          //     onChange((prev) => ({
          //       ...prev,
          //       amount: Number(event.target.value),
          //     }))
          //   }
        />
      </Form.Group>
    </Form>
  );
}
