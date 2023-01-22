import ProjectCard from "../../../components/ProjectCard";
import Header from "../../../components/Layout/Header";
import Footer from "../../../components/Layout/Footer";
import SeoHead from "../../../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Rakah Project | Tutored" />
      <Header location="insideOfPorjectsTutored" />
      <div className="mt-24 max-w-screen-xl px-6 sm:px-8 lg:px-40 py-3 sm:py-4">
        <h1 class=" text-3xl font-extrabold text-black-600  md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-black-600 from-orange-500">
            Find your
          </span>{" "}
          Project
        </h1>
        <span className="ml-1 text-md text-gray-700 dark:text-gray-400">
          Find the project that you wish to be educated about. 
        </span>
        <div className="mt-5 mx-auto grid xl:grid-cols-3 md:grid-cols-2 gap-4 py-3 sm:py-4">
          <ProjectCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Simple_DirectMedia_Layer%2C_Logo.svg/1200px-Simple_DirectMedia_Layer%2C_Logo.svg.png"
            title="Game"
            sub="Here you will find every pricing details on how to create a game out of SDL and C"
            level="1 st"
            programingLanguage={["C", "SDL"]}
            href="tutored/game"
          />
          <ProjectCard
            image="https://cdni.iconscout.com/illustration/premium/thumb/game-controller-5950856-4947552.png"
            title="Controller"
            sub="Here you will find every pricing details on how to create your own controller with arduino"
            level="1 nd"
            programingLanguage={["Arduino", "C"]}
            href="tutored/controller"
          />
          <ProjectCard
            image="https://miro.medium.com/max/1200/0*A2DRAEH8pV4ARcO6.jpg"
            title="Web App"
            sub="Here you will find every pricing details on how to create a WEB app"
            level="2 nd"
            programingLanguage={["Html", "CSS", "JavaScript", "PHP", "SQL"]}
            href="tutored/web_app"
          />
          <ProjectCard
            image="data:image/png;base64,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"
            title="Desktop App (qt)"
            sub="Here you will find every pricing details on how to create a desktop app"
            level="2 nd"
            programingLanguage={["C++", "SQL"]}
            coming_soon={true}
            href="tutored/desktop_app"
          />

          <ProjectCard
            title="Pidev"
            sub="Here you will find every pricing details on how to create a pidev project"
            level="3 rd"
            programingLanguage={["Java"]}
            coming_soon={true}
            href="tutored/pidev"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
