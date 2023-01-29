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
        title="Web app"
        services={[
          {
            title: "CRUD",
            price: "40",
            currency: "DT",
            pros: [
              "Create function",
              "Delete function",
              "Update function",
              "Read function",
              "Input control",
              "DataBase setup",
            ],
          },
          {
            title: "METIER",
            price: "10 / 20",
            currency: "DT(each one)",
            pros: [
              "Mail (20 DT)",
              "SMS (20 DT)",
              "Forgot password (20 DT)",
              "Sorting (10 DT)",
              "Paging (10 DT)",
              "Search (10 DT)",
              "Statistical (10 DT)",
              "Translation (10 DT)",
              "Pdf (10 DT)",
              "Login (10 DT)",
              "Sum (10 DT)",
            ],
          },
          {
            title: "INTEGRATION",
            price: "40",
            currency: "DT(per person)",
            pros: ["Database config", "Fix bugs", "Merge files", "Push to git"],
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