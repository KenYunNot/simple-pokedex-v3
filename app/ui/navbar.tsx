import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center sm:justify-start bg-red-500">
      <Link
        href='/'  
      >
        <Image
          className="px-3 w-96"
          src="/logo.png"
          width={1023}
          height={200}
          alt="pokemon-font" 
        />
      </Link>
    </nav>
  );
}