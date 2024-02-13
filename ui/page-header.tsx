
export default function PageHeader({ children } : { children: React.ReactNode }) {
  return (
    <h1 className="pb-4 text-5xl font-semibold text-center">
      {children}
    </h1>
  )
}