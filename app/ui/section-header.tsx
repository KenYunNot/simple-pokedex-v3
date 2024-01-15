
export default function SectionHeader({ children } : { children: React.ReactNode }) {
  return (
    <h2 className="my-3 text-3xl font-bold">
      {children}
    </h2> 
  )
}