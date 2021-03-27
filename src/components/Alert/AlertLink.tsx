import styled from "@emotion/styled";

// HACK: This should not be necessary, something is interfering.
export const AlertLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline !important;
`;

function Link({
  children,
  className,
}: React.PropsWithChildren<React.AnchorHTMLAttributes<unknown>>): JSX.Element {
  return <a className={`alert-link ${className}`.trim()}>{children}</a>;
}
