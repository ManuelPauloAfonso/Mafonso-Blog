import Link from "next/link";
import { Container } from "./style";
import img2 from '../../assets/image 2.svg'
import img3 from '../../assets/image 4.svg'
import img4 from '../../assets/image 5.svg'
import Image from "next/image";


export default function Cards() {
  return (
    <Container>
      <div className="card1">
        <Image
          src={img2}
          alt="alien-space white logo"
          width={297}
          height={179}
        />
        <div>
          <h3>long established</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
          <div className="link">
            <span>May 20th 2020</span>
            <Link href="/about">Read more</Link>
          </div>
        </div>
      </div>
      <div className="card1">
        <Image
          src={img3}
          alt="alien-space white logo"
          width={297}
          height={179}
        />
        <div>
          <h3>long established</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
          <div className="link">
            <span>May 20th 2020</span>
            <Link href="/about">Read more</Link>
          </div>
        </div>
      </div>
      <div className="card1">
        <Image
          src={img4}
          alt="alien-space white logo"
          width={297}
          height={179}
        />
        <div>
          <h3>long established</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
          <div className="link">
            <span>May 20th 2020</span>
            <Link href="/about">Read more</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}