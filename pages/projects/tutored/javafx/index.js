import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import PricingTuto from "../../../../components/PricingTuto";
import ReCAPTCHA from "react-google-recaptcha";
import { setup } from "../../../../lib/csrf";
import { useRef } from "react";

export const getServerSideProps = setup(async ({ req, res }) => {
  return { props: {} };
});
export default function DesktopApp() {
  const reRef = useRef();

  return (
    <>
      <SeoHead title="Rakah Project | Tutored" />
      <Header location="insideOfPorjectsTutored" />
      <PricingTuto
        title="Dekstop Application (JavaFX)"
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
            price: "10 / 20 / 30",
            currency: "DT (each one)",
            pros: [
              "Mail (20 DT)", // API/Advanced Metier
              "SMS (20 DT)", // API/Advanced Metier
              "Forgot password (20 DT)", // API/Advanced Metier
              "Sorting (10 DT)", // Metier
              "Paging (10 DT)", // Metier
              "Search (10 DT)", // Metier
              "Statistical (10 DT)", // Metier
              "Translation (10 DT)", // Metier
              "Pdf (10 DT)", // Metier
              "Login (10 DT)", // Metier
              "Sum (10 DT)", // Metier
              "SMS (20 DT)", // API/Advanced Metier
              "Image Recognition (30 DT)", // AI
              "Text Analysis (30 DT)", // AI
              "Face Detection (30 DT)", // AI
              "Speech Recognition (30 DT)", // AI
              "Data Export (10 DT)", // Metier
              "User Authentication (10 DT)", // Metier
              "Forecasting (30 DT)", // AI
              "Geo-Location (20 DT)", // API/Advanced Metier
              "Currency Conversion (20 DT)", // API/Advanced Metier
              "Calendar Integration (10 DT)", // Metier
              "Data Encryption (20 DT)", // API/Advanced Metier
              "Weather API Integration (20 DT)", // API/Advanced Metier
              "Recommendation Engine (30 DT)", // AI
              "QRcode Scanning (20 DT)", // API/Advanced Metier
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
