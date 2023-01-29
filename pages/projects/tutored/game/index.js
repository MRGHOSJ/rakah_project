import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import PricingTuto from "../../../../components/PricingTuto";
import ReCAPTCHA from "react-google-recaptcha";
import { setup } from "../../../../lib/csrf";
import { useRef } from "react";

export const getServerSideProps = setup(async ({req, res}) => {
  return { props: {}}
});
export default function Webapp() {
  const reRef = useRef();
  return (
    <>
      <SeoHead title="Rakah Project | Tutored" />
      <Header location="insideOfPorjectsTutored" />
      <PricingTuto
        title="SDL Game"
        services={[
          {
            title: "Menu",
            price: "30",
            currency: "DT",
            pros: [
              "3 backgrounds (menu principal, options et jeu)",
              "Sound",
              "3 boutons : Jouer , options et quitter",
              "Text",
              "Supports keyboard usage",
              "Supports mouse usage",
              "Increase the sound or decrease it",
              "Choose full screen mode or normal mode",
              "Animation (using gif)",
            ],
          },
          {
            title: "Character",
            price: "40",
            currency: "DT",
            pros: [
              "Character design (+20 DT)",
              "Character initialize",
              "Display character (img, score, life)",
              "Move acceleration",
              "Character animation",
              "Character jump",
            ],
          },
          {
            title: "Background",
            price: "40",
            currency: "DT",
            pros: [
              "Background design (+20 DT)",
              "Background initialize",
              "Display background (img, score)",
              "2 background animation (opening, closing door, / flower …)",
              "Pixel-perfect collision",
              "4-way scrolling"
            ],
          },
          {
            title: "Enemies",
            price: "40",
            currency: "DT",
            pros: [
            "Secondary entity design (+20 DT)",
            "Secondary entity initialize",
            "Secondary entity animation",
            "Bounding box collision",
          ],
          },
          {
            title: "Enigme",
            price: "30",
            currency: "DT",
            pros: [
              "Enigme design (+20 DT)",
              "Enigme initialize random generation of enigma (question + answers) from the file",
              "Enigme resolution (comparison choice and correct answer)",
              "Secondary entity animation: example clock with spinning hand",
            ],
          },
          {
            title: "Minimap",
            price: "40",
            currency: "DT",
            pros: [
              "Minimmap design (+20 DT)",
              "Minimmap initialize",
              "Display character in minimap",
              "Time management (riddle, game)",
              "Best score"
            ],
          },
        ]}
        reRef={reRef}
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={reRef}
      />
      <Footer />
    </>
  );
}
