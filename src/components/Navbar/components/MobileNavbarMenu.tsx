"use client";

import Image from "next/image";
import { images } from "../../../../public/assets/images";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import useDropdown from "@components/Navbar/hooks/useDropdown";

interface Props {
  session: any;
  providers: any;
}
const MobileNavbarMenu = ({ session, providers }: Props) => {
  const { showDropdown, setShowDropdown } = useDropdown();

  return (
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
  );
};

export default MobileNavbarMenu;
