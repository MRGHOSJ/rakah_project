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
export default function Controller() {
  const reRef = useRef();
  
  return (
    <>
      <SeoHead title="Rakah Project | Tutored" />
      <Header location="insideOfPorjectsTutored" />
      <PricingTuto
        title="Controller"
        services={[
          {
            title: "Packaging (emballage)",
            price: "20-120",
            currency: "DT",
            pros: [
              "Components",
              "Simple Packing",
              "Can be fully customised",
              "Modern looking",
              "Functional",
            ],
          },
          {
            title: "Code",
            price: "50",
            currency: "DT",
            pros: [
              "Configuration of the controller",
              "Using arduinoReadData function",
              "Using arduinoWriteData function",
              "Supports other components",
              "Fully functional",
              "Execution speed depends on the game itself",
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
