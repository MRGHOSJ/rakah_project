import SeoHead from "../../components/SeoHead";
import Header from "../../components/Layout/Header";
import SelfTought from "../../public/assets/selfTaught.png";
import Tutored from "../../public/assets/tutored.png";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

export default function Projects() {
  
  const { query } = useRouter();
  return (
    <>
      <SeoHead title="Rakah Project | Projects" />
      <Header location="projects"/>
      <div className="bg-gradient-to-b w-full py-32">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="mx-auto grid grid-flow-row sm:grid-flow-col py-8 lg:py-12">
            <a href={query.ref?"/projects/self_educated?ref="+query.ref:"/projects/self_educated"} className="mx-8 p-8 border border-gray-200 rounded bg-white w-64 hover:text-white-300 hover:bg-orange-500 hover:border-b-4 hover:border-black-600 active:text-black-600 active:bg-gray-100">
              <div className="flex justify-center items-center">
                <img src={SelfTought.src} />
              </div>
              <div className="text-center mt-4">
                <h1 className="font-bold text">Self taught</h1>
              </div>
            </a>
            <br/>
            <a href={query.ref?"/projects/tutored?ref="+query.ref:"/projects/tutored"} className="mx-8 p-8 border border-gray-200 rounded bg-white w-64 hover:text-white-300 hover:bg-orange-500 hover:border-b-4 hover:border-black-600 active:text-black-600 active:bg-gray-100">
              <div className="flex justify-center items-center">
                <img src={Tutored.src} />
              </div>
              <div className="text-center mt-4">
                <h1 className="font-bold text">Tutored</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

