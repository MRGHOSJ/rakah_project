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
export default function CoatOfArms() {
  const reRef = useRef();
  
  return (
    <>
      <SeoHead title="Rakah Project | Tutored" />
      <Header location="insideOfPorjectsTutored" />
      <PricingTuto
        title="Coat of arm"
        services={[
          {
            title: "Coat of arm",
            price: "30",
            currency: "DT",
            pros: [
              "6 images (symbols/ animals/ objects/ shapes)",
              "Different colours",
              "Coat of arms motto",
              "Modern",
              "Creative",
              "Unique",
              "Describe your coat of arms (+10 DT)",
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
