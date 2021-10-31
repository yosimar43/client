import Link from "next/link";
import Logo from "./Logo";

const PrinpalNavBar = () => {
  return (
    <nav className="border-b-2 border-red-200 flex pt-4 justify-center items-center gap-6 ">
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Link href="/guias">
        <a>guides</a>
      </Link>
    </nav>
  );
};

export default PrinpalNavBar;
