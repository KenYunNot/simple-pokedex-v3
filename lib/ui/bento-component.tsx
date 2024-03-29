export default function BentoComponent({
  className="",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  /* col-span-1  col-span-2  col-span-3  col-span-4  col-span-5 */
  /* row-span-1  row-span-2  row-span-3  row-span-4  row-span-5 */

  return (
    <div className={`group/component rounded-lg overflow-hidden ${className}`}>
      {!!children ? children : "Some filler text"}
    </div>
  );
}
