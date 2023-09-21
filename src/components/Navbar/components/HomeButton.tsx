import Image from "next/image";
import { images } from "../../../../public/assets/images";
import Link from "next/link";
import { Constants } from "@constants";

interface Props {
  width: number;
  height: number;
}

const HomeButton = ({ height, width }: Props) => {
  return (
    <Link href={"/"} className="flex flex-center gap-2">
      <Image
        src={images.logo}
        alt={"promptNest-logo"}
        width={width}
        height={height}
        className={"object-contain"}
      />
      <p className="logo_text">{Constants.APP_NAME}</p>
    </Link>
  );
};

export default HomeButton;
