import Image from "next/image";
import Link from "next/link";



export default function LogoSmall() {
  return (
    <Link href={"/"}>
      <Image
        src= "/images/logo-meli.png"
        alt="Mercado Libre Logo"
        width={44}
        height={32}
        priority
      ></Image>
    </Link>
  );
}