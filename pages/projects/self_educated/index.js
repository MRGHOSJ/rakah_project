import ProjectCard from "../../../components/ProjectCard";
import Header from "../../../components/Layout/Header";
import Footer from "../../../components/Layout/Footer";
import SeoHead from "../../../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Rakah Project | Self Educated" />
      <Header location="insideOfPorjects" />
      <div className="mt-24 max-w-screen-xl px-6 sm:px-8 lg:px-40 py-3 sm:py-4">
        <h1 class=" text-3xl font-extrabold text-black-600  md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-black-600 from-orange-500">
            Find your
          </span>{" "}
          Project
        </h1>
        <span className="ml-1 text-md text-gray-700 dark:text-gray-400">
          Find this project you're acting at and begin your self tutored
          journey!
        </span>
        
        <div className="mt-5 mx-auto grid xl:grid-cols-3 md:grid-cols-2 gap-4 py-3 sm:py-4">
          <ProjectCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Simple_DirectMedia_Layer%2C_Logo.svg/1200px-Simple_DirectMedia_Layer%2C_Logo.svg.png"
            title="SDL Game"
            sub="Here you will find every pricing details on how to create a game out of SDL and C"
            level="1st"
            programingLanguage={["C", "SDL"]}
            href="self_educated/game"
          />
          <ProjectCard
            image="https://cdni.iconscout.com/illustration/premium/thumb/game-controller-5950856-4947552.png"
            title="Controller"
            sub="Here you will find every pricing details on how to create your own controller with arduino"
            level="1st"
            programingLanguage={["Arduino", "C"]}
            href="self_educated/controller"
          />

          <ProjectCard
            image="https://media.istockphoto.com/id/492490042/vector/knight-graphic.jpg?s=612x612&w=0&k=20&c=zhDvZw1AOTOR-LsGcuuis7REJXk3H6peOdjqRgHGAXw="
            title="Coat of arms"
            sub="Here you will find every pricing details on how to create a coat of arm"
            level="1st"
            programingLanguage={["Illustrator", "Photoshop"]}
            href="self_educated/coat_of_arm"
          />
          <ProjectCard
            image="https://img.freepik.com/free-vector/linear-flat-web-application-code-illustration-app-development-concept-php-javascript-html5-cogwheels-screwdriver-program-editor-interface_126523-2672.jpg"
            title="Web Application (PHP)"
            sub="Build a full-stack web application with HTML, CSS, JavaScript, PHP, and SQL, including both front-end and back-end development."
            level="2nd"
            programingLanguage={["Html", "CSS", "JavaScript", "PHP", "SQL"]}
            href="self_educated/web_app"
          />
          <ProjectCard
            image="https://www.embien.com/images/features/qt-application-development.png"
            title="Desktop App (qt)"
            sub="Develop a cross-platform desktop application using C++ and Qt, with a focus on GUI design and database integration."
            level="2nd"
            programingLanguage={["C++", "SQL", "QT"]}
            href="self_educated/desktop_app"
          />

          <ProjectCard
            image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/381310510/original/7074f41367418452cd90eafad1b55ded2b53c9b0/create-a-custom-javafx-application-to-solve-your-specific-problem-quickly.jpeg"
            title="Desktop App (Javafx)"
            sub="Create a desktop application using JavaFX, covering UI components, layout design, and event handling."
            level="3rd"
            programingLanguage={["Java", "JavaFX", "SQL"]}
            href="self_educated/javafx"
          />

          <ProjectCard
            image="https://d3puhl2t51lebl.cloudfront.net/uploads/2022/01/simphony.png"
            href="self_educated/symfony"
            title="Web Application (Symfony)"
            sub="Build a scalable web application using the Symfony framework, with emphasis on MVC architecture and database interaction."
            level="3rd"
            programingLanguage={["Symfony", "SQL"]}
          />
          <ProjectCard
            image="https://nocodestartup.io/wp-content/uploads/2023/02/flutterflow1.png"
            href="self_educated/flutterflow"
            title="Mobile Application (Flutter Flow)"
            sub="Build a scalable mobile application using flutter flow and firebase."
            level="3rd"
            programingLanguage={["Firebase", "FlutterFlow"]}
          />
          <ProjectCard
            image="https://www.filepicker.io/api/file/fUQ7OU6CQxmF0pFCiNxu"
            title="Web Application (Spring Boot & Angular)"
            sub="Develop a scalable web application using the Spring Boot framework with Angular for the front end, emphasizing REST API integration and data management."
            level="4th"
            programingLanguage={["Spring Boot", "Angular"]}
            href="self_educated/springboot"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
