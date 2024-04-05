import { Menu, MenuItem } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "bg-[#141414]" : ""} hover:bg-[#141414] flex justify-between items-center px-5 py-3`}>
      <p className="font-bold text-3xl text-white">
        <a href="/" >Movie<span className="text-yellow-500">NIGHT</span> </a>
      </p>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 bg-[#141414] w-full z-10">
          <ul className="flex flex-col items-end space-y-4 py-4 px-6">
            <li>
              <a href="/" className={`navBarComponents ${pathname === "/" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>Movies</a>
            </li>
            <li>
              <a href="/tv" className={`navBarComponents ${pathname === "/tv" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>TV Shows</a>
            </li>
            <li>
              <a href="/people" className={`navBarComponents ${pathname === "/people" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>People</a>
            </li>
            <li>
              <a href="/search" className={`navBarComponents ${pathname === "/search" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>Search</a>
            </li>
            {session ? (
              <>
                <li>
                  <a href="/profile" className="navBarComponents">Profile</a>
                </li>
                <li>
                  <button onClick={() => signOut()} className="navBarComponents">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={() => signIn("google")} className="bg-[#BF8915] px-2.5 py-2.5 rounded-md font-bold">Sign In</button>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="/" className={`navBarComponents ${pathname === "/" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>Movies</a>
        <a href="/tv" className={`navBarComponents ${pathname === "/tv" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>TV Shows</a>
        <a href="/people" className={`navBarComponents ${pathname === "/people" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>People</a>
        <a href="/search" className={`navBarComponents ${pathname === "/search" ? "bg-[#BF8915] px-2.5 py-2.5 rounded-md" : ""}`}>Search</a>
        {session && (
          <div>
            <button onClick={() => router.push("/profile")}>
              <img src={session.user.image || ""} alt={session.user.name || "user"} className="w-12 rounded-full" />
            </button>
          </div>
        )}
        {!session && (
          <button
            className="bg-[#BF8915] px-2.5 py-2.5 rounded-md font-bold"
            onClick={() => signIn("google")}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
