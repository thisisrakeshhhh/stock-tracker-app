import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Side - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Center - Navigation */}
        <nav className="flex-1 flex justify-center">
          <NavItems />
        </nav>

        {/* Right Side - Placeholder */}
        <div className="w-[140px] flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium">
            Login
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;