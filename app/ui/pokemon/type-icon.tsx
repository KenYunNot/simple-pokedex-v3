
export default function TypeIcon({ type, shortened } : { type: string, shortened?: boolean }) {


  return (
    <div className={`flex justify-center items-center w-20 h-8 mx-1 text-white text-xs font-bold border border-gray-400 rounded-md text-shadow ${type}`}>{type.toUpperCase()}</div>
  );
}