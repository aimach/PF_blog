import Link from "next/link";
import logo from "../public/logo.png"

const NavBar = () => {
  console.log(logo)
  return (
    <nav className="">
      <div className="logo">
        <Link href={'/'}>
          <img src={logo.src} alt='logo' className="w-40" />
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