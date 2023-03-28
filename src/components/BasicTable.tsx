"use client";

import React from "react";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";

import Badge from "react-bootstrap/Badge";
import BootstrapTable from "react-bootstrap/Table";

import { ArrowUp, ArrowDown, PencilSquare } from "react-bootstrap-icons";

import DebouncedInput from "@/components/DebouncedInput";

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const columnFilterValue = column.getFilterValue();

  return (
    <DebouncedInput
      size="sm"
      value={(columnFilterValue ?? "") as string}
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Suchen...(${column.getFacetedUniqueValues().size})`}
    />
  );
}

export interface BasicTableProps<Entity> {
  data: Array<Entity>;
  columns: Array<ColumnDef<Entity, any>>;
  onStartEdit?: (row: Entity) => void;
}

export default function BasicTable<Entity>({
  data,
  columns,
  onStartEdit,
}: BasicTableProps<Entity>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <BootstrapTable bordered hover striped>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                          role: header.column.getCanSort()
                            ? "button"
                            : undefined,
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {header.column.getIsSorted() && (
                          <Badge bg="secondary">
                            {header.column.getIsSorted() === "asc" ? (
                              <ArrowUp />
                            ) : (
                              <ArrowDown />
                            )}
                          </Badge>
                        )}

                        {header.column.getCanFilter() && (
                          <Filter column={header.column} table={table} />
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
              {onStartEdit && <th></th>}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
              {onStartEdit && (
                <td>
                  <PencilSquare onClick={() => onStartEdit(data[row.index])} />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
}
