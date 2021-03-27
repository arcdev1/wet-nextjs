export function PageTitle({children}: React.PropsWithChildren<React.ReactNode>) {
  return <h1 id="wb-cont" property="name">{children}</h1>;
}