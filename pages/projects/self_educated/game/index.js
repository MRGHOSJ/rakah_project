import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "SDL pdf book",
    document: "PDF",
    tags: ["SDL"],
    sub: "This book contains every step necessary to create a fully functionalgame using SDL 1.2 and C.",
    img: "https://m.media-amazon.com/images/I/51qTNakojaL._AC_SY780_.jpg",
    url: "https://www.mediafire.com/file/p0c9ow5xo16k82u/Sdl+Step+by+step+guide.zip/file",
  },
  {
    title: "Jeu Bomberman SDL en C - SDL_IMAGE / MENU #2",
    document: "Video",
    tags: ["Menu"],
    sub: "This tutorial is going to see how to display the menu of our bomberman, load an image, display an icon, display the name of our game and press the escape key to exit the menu!",
    img: "https://img.youtube.com/vi/L1NeMEhrSAM/default.jpg",
    url: "https://www.youtube.com/watch?v=L1NeMEhrSAM",
  },
  {
    title: "SDL 1.2 Tutorial 12 Animation",
    document: "Video",
    tags: ["Animation"],
    sub: "This video shows how to convert a spreadsheet into a full animation (it's in C++, but it'll give you a general idea).",
    img: "https://img.youtube.com/vi/83ReLRqIV7o/default.jpg",
    url: "https://www.youtube.com/watch?v=83ReLRqIV7o",
  },
  {
    title: "SDL tutorial 16 - scrollable background (part 1)",
    document: "Video",
    tags: ["Scrollable"],
    sub: "This tutorial will teach you how to get ready for the sidescroller game with a scrollable background, which is an important part of the game.",
    img: "https://img.youtube.com/vi/kGNFG2U5jqo/default.jpg",
    url: "https://www.youtube.com/watch?v=kGNFG2U5jqo",
  },
  {
    title: "SDL tutorial 12 - sound with SDL_mixer",
    document: "Video",
    tags: ["Sound"],
    sub: "This tutorial will teach you how can you use the SDL_mixer (obviously not all of the functions, because there are a lot, just the basics).",
    img: "https://img.youtube.com/vi/94pPyuS1E_M/default.jpg",
    url: "https://www.youtube.com/watch?v=94pPyuS1E_M",
  },
  {
    title: "SDL Tutorial 9 SDL_ttf Tutorial: Rendering Text",
    document: "Video",
    tags: ["Text"],
    sub: "This tutorial will teach you how can you use the SDL TTF Library.",
    img: "https://img.youtube.com/vi/gBFqZ7A0TPA/default.jpg",
    url: "https://www.youtube.com/watch?v=gBFqZ7A0TPA",
  },
  {
    title: "SDL tutorial 18 - make a simple menu (part 1)",
    document: "Video",
    tags: ["Menu"],
    sub: "This tutorial will teach you how can you implement a very simple menu",
    img: "https://img.youtube.com/vi/k-m0q_uVnno/default.jpg",
    url: "https://www.youtube.com/watch?v=k-m0q_uVnno",
  },
  {
    title: "SDL 1.2 Quiz",
    document: "Quiz",
    tags: ["Menu"],
    sub: "This quiz will help you grasp everything about the SDL menu.",
    img: "https://cdn.discordapp.com/attachments/864587916076646401/1077747202144874616/image.png",
    url: "https://forms.gle/CE6Bz7rkfbd2DH3B6",
  },
];

export default function Game() {
  const [filter, setFilter] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [filterCategories, setFilterCategories] = useState("");

  let Categories = [];
  documents.map((doc) => {
    doc.tags.map((tag) => {
      if (!Categories.includes(tag)) Categories.push(...doc.tags);
    });
  });
  let Tags = [];
  documents.map((doc) => {
    if (!Tags.includes(doc.document)) Tags.push(doc.document);
  });

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

        <Filter
          title={filter}
          setFilter={setFilter}
          setFilterTag={setFilterTag}
          setFilterCategories={setFilterCategories}
          Categories={Categories}
          Tags={Tags}
        />
        <div class="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {documents.map((document) => {
            if (
              document.title.toLowerCase().includes(filter.toLowerCase()) &&
              document.document.includes(filterTag) &&
              (document.tags.indexOf(filterCategories) != -1 ||
              filterCategories == "")
            )
              return (
                <DocumentSelf
                  title={document.title}
                  document={document.document}
                  tags={document.tags}
                  sub={document.sub}
                  img={document.img}
                  url={document.url}
                />
              );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
