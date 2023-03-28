import React from "react";
import Navbar from "./navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
