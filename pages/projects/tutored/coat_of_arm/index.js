import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import PricingTuto from "../../../../components/PricingTuto";
import { setup } from "../../../../lib/csrf";

export const getServerSideProps = setup(async ({req, res}) => {
  return { props: {}}
});
export default function DesktopApp() {
  
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
      />
      <Footer />
    </>
  );
}
