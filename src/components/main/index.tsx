import Image from "next/image";
import coffe from '../../assets/coffe.svg'
import { Container } from "./style";
import Link from "next/link";
import post1 from '../../assets/image1.svg'




export default function Main() {
  return (
    <Container>
      <div className="card1">
        <h3>long established</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div className="link">
          <span>May 20th 2020</span>
          <Link href="/about">Read more</Link>
        </div>
      </div>
      <div className="card2">
        <Image
          src={post1}
          alt="alien-space white logo"
          width={433}
          height={243}
        />
      </div>
    </Container>
  )
}