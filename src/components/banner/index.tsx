import { Container } from "./style";
import Image from "next/image";
import coffe from '../../assets/coffe.svg'
import banner from '../../assets/banner.svg'




export default function Banner() {
  return (
    <Container>
      <div>
        <h1>
          Make better <br />
          coffee
          <Image
            src={coffe}
            alt="alien-space white logo"
            width={70}
            height={67}
          />
        </h1>
        <p>why learn how to blog?</p>
      </div>
      <div>
        <Image
          src={banner}
          alt="alien-space white logo"
          width={476}
          height={323}
        />
      </div>
    </Container>
  )
}