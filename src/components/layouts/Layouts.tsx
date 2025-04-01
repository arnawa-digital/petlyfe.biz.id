"use client";

import { ReactNode } from "react";

const Layouts = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="relative flex flex-col items-center px-5 py-10 md:px-64">{children}</main>
    </>
  );
};

export default Layouts;
