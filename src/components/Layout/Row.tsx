import { BaseHTMLAttributes, PropsWithChildren } from "react";

export function Row({
  children,
}: PropsWithChildren<BaseHTMLAttributes<unknown>>) {
  return <div className="row">{children}</div>;
}
