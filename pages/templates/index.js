import SeoHead from "../../components/SeoHead";
import Header from "../../components/Layout/Header";
import SelfTought from "../../public/assets/selfTaught.png";
import Tutored from "../../public/assets/tutored.png";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

let stickers = [
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406068407652423/image_2023-03-15_164713166-removebg-preview-transformed.png?width=651&height=662",
    title: "The Coder breaker",
    off: 15,
    heigt: 662,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406068093063259/image_2023-03-15_162700907-removebg-preview-transformed.png?width=1440&height=548",
    title: "Console Log debuger",
    off: 10,
    heigt: 548,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406068822876181/image_2023-03-15_165656410-removebg-preview-transformed.png?width=777&height=662",
    title: "The Compiler",
    off: 15,
    heigt: 662,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406069259096114/brain.png?width=553&height=410",
    title: "The Brains",
    off: 5,
    heigt: 410,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406069607211148/image_2023-03-15_160800597-removebg-preview.png?width=765&height=510",
    title: "Senior Developer",
    off: 15,
    heigt: 510,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406067442962533/image_2023-03-15_161449015-removebg-preview.png?width=788&height=493",
    title: "Mr Always Right",
    off: 10,
    heigt: 493,
  },
  {
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406067807854652/image_2023-03-15_161919376-removebg-preview.png?width=1015&height=383",
    title: "Words Play",
    off: 10,
    heigt: 383,
  },
];

export default function Stickers() {
  return (
    <>
      <SeoHead title="Rakah Project | Templates" />
      <Header location="Templates" />

      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop:"180px",
          width: "50%",
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/red-black-coming-soon-countdown-clock-vector-design-vector-illustration_123447-44461.jpg"
          layout="fill"
          className="transform duration-500  ease-in-out hover:scale-110"
        />
      </div>
    </>
  );
}
