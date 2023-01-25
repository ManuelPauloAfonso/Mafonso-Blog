import { Container } from "./style";
import Image from "next/image";
import logo from '../../assets/Manuel Afonso.svg'
import social1 from '../../assets/insta.svg'
import social2 from '../../assets/linke.svg'
import social3 from '../../assets/t.svg'

export default function Footer() {
  return (
    <Container>
      <div>
        <h1>Manuel Afonso</h1>
        <span>2023 copyright all rights reserved</span>
      </div>
      <ul>
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