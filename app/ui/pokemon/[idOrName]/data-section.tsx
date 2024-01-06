
export default function Section({ header, children } : { header: string, children: React.ReactNode }) {
  return (
    <div className="m-3 mt-6">
      <h2 className="text-2xl font-semibold">{header}</h2>
      <div className="mt-3">
        {children}
      </div>
    </div>
  );
}


