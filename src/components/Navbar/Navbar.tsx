"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets/images";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import HomeButton from "@components/Navbar/components/HomeButton";

interface Props {}

const Navbar = ({}: Props) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    const initializeProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    initializeProviders();
  }, []);

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <HomeButton width={30} height={30} />

      {/* Desktop */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create post
            </Link>
            <button onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={session?.user.image ?? images.logo}
                alt={"profile"}
                width={30}
                height={30}
                className={"object-contain rounded-full"}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image ?? images.logo}
              alt={"profile"}
              width={30}
              height={30}
              className={"object-contain rounded-full"}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown ? (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setShowDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type={"button"}
                  onClick={() => {
                    setShowDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
