import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="p-3 bg-red-500">
      <Link
        href='/'  
      >
        <img 
          className="mx-3 w-96"
          src="https://fontmeme.com/permalink/231224/e059f38d9511eda4f7e9afb0a94d2594.png" 
          alt="pokemon-font" 
        />
      </Link>
    </nav>
  );
}