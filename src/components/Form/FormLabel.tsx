import { LabelHTMLAttributes, PropsWithChildren } from "react";

export function FormLabel({
  children,
  requiredText,
  ...props
}: PropsWithChildren<LabelHTMLAttributes<unknown>> & {
  requiredText?: string;
}): JSX.Element {
  const className = requiredText ? "required" : "field-name";
  return (
    <>
      <label className={className} {...props}>
        {children}
        {requiredText && (
          <strong className={className}>&nbsp;({requiredText})</strong>
        )}{" "}
      </label>
    </>
  );
}
