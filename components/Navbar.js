import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"

const NavBar = () => {
  return (
    <nav className="">
      <div className="logo">
        <Link href={'/'}>
          <Image src={logo.src} alt='logo' width={150} height={150} />
        </Link>
      </div>
      <ul className="flex flex-row justify-end border-b pb-5">
        <li className="px-8 hover:text-primary-color">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="px-8 hover:text-primary-color">
          <Link href={`/articles`}>Articles</Link>
        </li>
        <li className="px-8 hover:text-primary-color">
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;