import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf"

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
            title="SDL pdf book"
            sub="This book contains every step necessary to create a fully functionalgame using SDL 1.2 and C."
            img="https://m.media-amazon.com/images/I/51qTNakojaL._AC_SY780_.jpg"
            url="https://www.mediafire.com/file/p0c9ow5xo16k82u/Sdl+Step+by+step+guide.zip/file"
          />
          <DocumentSelf
            title="SDL 1.2 Tutorial 12 Animation"
            sub="This video shows how to convert a spreadsheet into a full animation (it's in C++, but it'll give you a general idea)."
            img="https://img.youtube.com/vi/83ReLRqIV7o/default.jpg"
            url="https://www.youtube.com/watch?v=83ReLRqIV7o"
          />
          <DocumentSelf
            title="SDL tutorial 16 - scrollable background (part 1)"
            sub="This tutorial will teach you how to get ready for the sidescroller game with a scrollable background, which is an important part of the game."
            img="https://img.youtube.com/vi/kGNFG2U5jqo/default.jpg"
            url="https://www.youtube.com/watch?v=kGNFG2U5jqo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
