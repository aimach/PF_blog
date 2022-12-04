import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="">
      <div className="logo p-8">
        <h1>Logo</h1>
      </div>
      <ul className="flex flex-row justify-end border-b pb-5">
        <li className="px-8 hover:text-cyan-600">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="px-8 hover:text-cyan-600">
          <Link href={`/articles`}>Articles</Link>
        </li>
        <li className="px-8 hover:text-cyan-600">
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;