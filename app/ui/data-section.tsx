
export default function Section({ header, children } : { header: string, children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="section-header">{header}</h2>
      <div className="mt-3">
        {children}
      </div>
    </div>
  );
}


