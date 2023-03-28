import React from "react";
import BasicLayout from "@/components/BasicLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BasicLayout title="Spender">{children}</BasicLayout>;
}
