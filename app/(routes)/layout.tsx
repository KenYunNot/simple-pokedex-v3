export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <NavbarSpacer />
      {children}
    </>
  )
}

function NavbarSpacer() {
  return (
    <div className="h-20" />
  )
}