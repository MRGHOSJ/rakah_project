import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";

export default function Game() {
  return (
    <>
      <SeoHead title="Rakah Project | Self Educated" />
      <Header location="insideOfPorjects" />

      <div className="mt-24 px-6 sm:px-8 lg:px-40 py-3 sm:py-4">
        <h1 class=" text-3xl font-extrabold text-black-600  md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-black-600 from-orange-500">
            Find your
          </span>{" "}
          documents
        </h1>
        <span className="ml-1 text-md text-gray-700 dark:text-gray-400">
          Here you will find all of the documents you will need to complete your
          project on your own.
        </span>
        <div class="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          
        <DocumentSelf
            title="Coat of arms illustrator template freepik"
            document="Link"
            tags={["Freepik"]}
            sub="Here you will find templates for coat of arm that you can use"
            img="https://www.freepik.com/media/img/logos/freepik.svg"
            url="https://www.freepik.com/free-photos-vectors/coat-arms"
          />
          <DocumentSelf
            title="Redrawing the Rutten Coat of Arms in VECTOR"
            document="Video"
            tags={["Sketch","Inkscape"]}
            sub="This tutorial will give you an idea on how to create your coat of arms from a sketch"
            img="https://img.youtube.com/vi/ItGGqwmiXTc/default.jpg"
            url="https://youtu.be/ItGGqwmiXTc"
          />
          <DocumentSelf
            title="How to Make Badge Shield Shapes - Adobe Illustrator Tutorial"
            document="Video"
            tags={["Shield Shapes","Illustrator"]}
            sub="This tutorial will give you an idea on how to Make Badge Shield Shapes in Adobe Illustrator Tutorial."
            img="https://img.youtube.com/vi/u7tjFhzmE8U/default.jpg"
            url="https://youtu.be/u7tjFhzmE8U"
          />
          <DocumentSelf
            title="Basic Tools Beginner Tutorial: How to Make an Easy Custom Family Coat of Arms"
            document="Video"
            tags={["Basic coat of arms","Inkscape"]}
            sub="This tutorial will give you an idea on how to create a custom, personalized family coat of arms"
            img="https://img.youtube.com/vi/jqYe8KH7zAA/default.jpg"
            url="https://youtu.be/jqYe8KH7zAA"
          />
          <DocumentSelf
            title="Pen Tool Heraldic Logo in Illustrator"
            document="Video"
            tags={["Logo","Illustrator"]}
            sub="This tutorial will give you an idea on how to create a sketch in Photoshop then I use Illustrator and pen tool to make the logo in vector format. "
            img="https://img.youtube.com/vi/3Aov4GAseCM/default.jpg"
            url="https://youtu.be/3Aov4GAseCM"
          />
          <DocumentSelf
            title="Making a coat of arms Using Photoshop : Photoshop Tips"
            document="Video"
            tags={["Photoshop"]}
            sub="This tutorial you will learn about making a crest using Photoshop with help from a well-versed web, graphic and illustrative designer in this free video clip."
            img="https://img.youtube.com/vi/GsH4O8rt5N0/default.jpg"
            url="https://youtu.be/GsH4O8rt5N0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
