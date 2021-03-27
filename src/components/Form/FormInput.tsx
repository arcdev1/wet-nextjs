import { InputHTMLAttributes } from "react";

export function FormInput(props: InputHTMLAttributes<unknown>): JSX.Element {
  return <input {...props} className="form-control" />;
}
