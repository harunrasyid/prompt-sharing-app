"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { images } from "../../../../public/assets/images";

interface Props {
  session: any;
  providers: any;
}

const DesktopNavbarMenu = ({ session, providers }: Props) => {
  return (
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
  );
};

export default DesktopNavbarMenu;
