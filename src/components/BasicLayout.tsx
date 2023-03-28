import React from "react";

export default function BasicLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
