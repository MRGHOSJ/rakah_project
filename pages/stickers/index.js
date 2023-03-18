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
    heigt:662,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406068093063259/image_2023-03-15_162700907-removebg-preview-transformed.png?width=1440&height=548",
    title: "Console Log debuger",
    off: 10,
    heigt:548,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406068822876181/image_2023-03-15_165656410-removebg-preview-transformed.png?width=777&height=662",
    title: "The Compiler",
    off: 15,
    heigt:662,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406069259096114/brain.png?width=553&height=410",
    title: "The Brains",
    off: 5,
    heigt:410,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406069607211148/image_2023-03-15_160800597-removebg-preview.png?width=765&height=510",
    title: "Senior Developer",
    off: 15,
    heigt:510,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406067442962533/image_2023-03-15_161449015-removebg-preview.png?width=788&height=493",
    title: "Mr Always Right",
    off: 10,
    heigt:493,
  },{
    src: "https://media.discordapp.net/attachments/1063447109443006474/1086406067807854652/image_2023-03-15_161919376-removebg-preview.png?width=1015&height=383",
    title: "Words Play",
    off: 10,
    heigt:383,
  },
];

export default function Stickers() {
  return (
    <>
      <SeoHead title="Rakah Project | Stickers" />
      <Header location="Stickers" />
      
      <div className="pt-32 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 place-items-center ">
      {
        stickers.map((sticker) => (
            <a className="h-120 w-72 rounded shadow-lg mx-auto ">
            <div className={"pt-24 mt border-b-2 border-gray-100 border-palette-lighter relative"+sticker>600?"h-80":""} >
              <img
                src={sticker.src}
                layout="fill"
                className="transform duration-500  ease-in-out hover:scale-110"
              />
            </div>
            <div className="h-28 relative">
              <div className="text-orange-500 text-2xl pt-4 px-4 font-semibold">
                {sticker.title}
              </div>
              <div className="text-lg text-gray-400 p-4 font-primary font-light">
                {sticker.description}
              </div>
              <div
                className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
                rounded-tl-sm triangle"
              >
                <span className="text-lg">{sticker.off}% Off</span>
              </div>
            </div>
          </a>
        ))
      }
    </div>
      <br/>
      <br/>
      <br/>
    </>
  );
}
