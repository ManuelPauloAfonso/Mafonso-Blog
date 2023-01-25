import { Container } from "./style";
import Image from "next/image";
import logo from '../../assets/Manuel Afonso.svg'
import social1 from '../../assets/insta.svg'
import social2 from '../../assets/linke.svg'
import social3 from '../../assets/t.svg'
import Link from "next/link";





export default function Header() {
  return (
    <Container>
      <Image
        src={logo}
        alt="alien-space white logo"
        height={24}
        width={148}
      />
      <ul>
        <li> <Link href="/home">home</Link> </li>
        <li><Link href="/article">article</Link></li>
        <li>
          <Image
            src={social1}
            alt="alien-space white logo"
            height={24}
            width={24}
          />
        </li>
        <li>
          <Image
            src={social2}
            alt="alien-space white logo"
            height={24}
            width={24}
          />
        </li>
        <li>
          <Image
            src={social3}
            alt="alien-space white logo"
            height={24}
            width={24}
          />
        </li>
      </ul>
    </Container>
  )
}