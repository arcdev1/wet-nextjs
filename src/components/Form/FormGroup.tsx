import React from "react";

export function FormGroup({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <div className="form-group">{children}</div>;
}
