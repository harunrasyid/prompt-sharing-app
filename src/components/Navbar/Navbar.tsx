"use client";

import HomeButton from "@components/Navbar/components/HomeButton";
import useProviders from "@components/Navbar/hooks/useProviders";
import DesktopNavbarMenu from "@components/Navbar/components/DesktopNavbarMenu";
import MobileNavbarMenu from "@components/Navbar/components/MobileNavbarMenu";

interface Props {}

const Navbar = ({}: Props) => {
  const { providers, session } = useProviders();

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <HomeButton width={30} height={30} />

      {/* Desktop */}
      <DesktopNavbarMenu session={session} providers={providers} />

      {/* Mobile */}
      <MobileNavbarMenu session={session} providers={providers} />
    </nav>
  );
};

export default Navbar;
