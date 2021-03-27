import React from "react";

export type PanelVariant =
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "default";

interface PanelProps {
  variant?: PanelVariant;
  titleText?: string;
  footerText?: string;
}

export function Panel({
  children,
  variant,
  titleText,
  footerText,
}: React.PropsWithChildren<PanelProps>): JSX.Element {
  variant = variant ?? "default";
  return (
    <PanelWrapper variant={variant}>
      {titleText && <PanelHeading>{titleText}</PanelHeading>}
      <PanelBody>{children}</PanelBody>
      {footerText && <PanelFooter>{footerText}</PanelFooter>}
    </PanelWrapper>
  );
}

// DIY
export function PanelWrapper({
  children,
  variant,
}: React.PropsWithChildren<{ variant: PanelVariant }>): JSX.Element {
  variant = variant ?? "default";
  return <section className={`panel panel-${variant}`}>{children}</section>;
}

export function PanelBody({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <div className="panel-body">{children}</div>;
}

export function PanelHeading({
  children,
}: React.PropsWithChildren<React.ReactNode>) {
  return (
    <header className="panel-heading">
      <h5 className="panel-title">{children}</h5>
    </header>
  );
}

export function PanelFooter({
  children,
}: React.PropsWithChildren<React.ReactNode>) {
  return <footer className="panel-footer">{children}</footer>;
}
