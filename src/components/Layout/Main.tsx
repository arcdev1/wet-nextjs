import React from "react";

export function Main({children}: React.PropsWithChildren<React.ReactNode>) {
  return <main property="mainContentOfPage" className="container">{children}</main>
 }