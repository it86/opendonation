"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { DonorEntity, DonorValues } from "../model/model";
import DonorForm from "./DonorForm";
import BasicTable from "@/components/BasicTable";

const columnHelper = createColumnHelper<DonorEntity>();

const columns = [
  columnHelper.accessor("values.firstName", {
    header: () => "Vorname",
  }),
  columnHelper.accessor("values.lastName", {
    header: () => "Nachname",
  }),
  columnHelper.accessor("values.street", {
    header: () => "Straße",
  }),
  columnHelper.accessor("values.postalCode", {
    header: () => "Postleitzahl",
  }),
  columnHelper.accessor("values.city", {
    header: () => "Ort",
  }),
];

export interface DonorTableProps {
  data: Array<DonorEntity>;
}

const DEFAULT: DonorValues = {
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
};

export default function DonorTable({ data }: DonorTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [show, setShow] = useState(false);

  const [donorEntity, setDonorEntity] = useState<DonorEntity>();
  const [donorValues, setDonorValues] = useState<DonorValues>(DEFAULT);

  function handleStartEdit(row: DonorEntity) {
    setDonorEntity(row);
    setDonorValues(row.values);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  async function handleSave() {
    console.log("Start Saving...");

    const donor = donorEntity!;
    donor.values = donorValues;

    await fetch("./donor/api", {
      method: "PUT",
      body: JSON.stringify(donor),
    });

    console.log("End Saving...");

    startTransition(() => {
      router.refresh();
      handleClose();
    });
  }

  return (
    <>
      <BasicTable data={data} columns={columns} onStartEdit={handleStartEdit} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spender bearbeiten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonorForm value={donorValues} onChange={setDonorValues} />
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
    </>
  );
}

// "use client";

// import React from "react";
// import {
//   Column,
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getSortedRowModel,
//   Table,
//   useReactTable,
// } from "@tanstack/react-table";

// import Badge from "react-bootstrap/Badge";
// import BootstrapTable from "react-bootstrap/Table";

// import { ArrowUp, ArrowDown, PencilSquare } from "react-bootstrap-icons";

// import { Donor } from "@prisma/client";
// import DebouncedInput from "@/components/DebouncedInput";

// const columnHelper = createColumnHelper<Donor>();

// const columns = [
//   columnHelper.accessor("firstName", {
//     header: () => "Vorname",
//   }),
//   columnHelper.accessor("lastName", {
//     header: () => "Nachname",
//   }),
//   columnHelper.accessor("street", {
//     header: () => "Straße",
//   }),
//   columnHelper.accessor("postalCode", {
//     header: () => "Postleitzahl",
//   }),
//   columnHelper.accessor("city", {
//     header: () => "Ort",
//   }),
// ];

// interface FilterProps {
//   column: Column<any, unknown>;
//   table: Table<any>;
// }

// const Filter: React.FC<FilterProps> = ({ column, table }) => {
//   const columnFilterValue = column.getFilterValue();

//   return (
//     <DebouncedInput
//       size="sm"
//       value={(columnFilterValue ?? "") as string}
//       onChange={(value) => column.setFilterValue(value)}
//       placeholder={`Suchen...(${column.getFacetedUniqueValues().size})`}
//     />
//   );
// };

// export interface DonorTableProps {
//   data: Array<Donor>;
// }

// const DonorTable: React.FC<DonorTableProps> = ({ data }) => {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   return (
//     <BootstrapTable bordered hover striped>
//       <thead>
//         {table.getHeaderGroups().map((headerGroup) => {
//           return (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <th key={header.id} colSpan={header.colSpan}>
//                     {header.isPlaceholder ? null : (
//                       <div
//                         {...{
//                           onClick: header.column.getToggleSortingHandler(),
//                           role: header.column.getCanSort()
//                             ? "button"
//                             : undefined,
//                         }}
//                       >
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}

//                         {header.column.getIsSorted() && (
//                           <Badge bg="secondary">
//                             {header.column.getIsSorted() === "asc" ? (
//                               <ArrowUp />
//                             ) : (
//                               <ArrowDown />
//                             )}
//                           </Badge>
//                         )}

//                         {header.column.getCanFilter() && (
//                           <Filter column={header.column} table={table} />
//                         )}
//                       </div>
//                     )}
//                   </th>
//                 );
//               })}
//               <th></th>
//             </tr>
//           );
//         })}
//       </thead>
//       <tbody>
//         {table.getRowModel().rows.map((row) => {
//           return (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => {
//                 return (
//                   <td key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 );
//               })}
//               <td>
//                 <PencilSquare />
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </BootstrapTable>
//   );
// };

// export default DonorTable;
