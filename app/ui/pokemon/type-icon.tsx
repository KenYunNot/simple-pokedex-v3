
export default function TypeIcon({ type } : { type: string }) {
  return (
    <div className={`type-icon ${type}`}>{type.toUpperCase()}</div>
  );
}