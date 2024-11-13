import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "Symfony 5 for beginners, Create CRUD Application",
    document: "Video",
    tags: ["Create","Update","Delete","Read"],
    sub: "This video shows how to install Qt for Windows and MacOS. Then we'll cover Qt Basics, Dialogs, Widgets, Drag and Drop Interfaces, Creating / Opening / Saving Files, Menus, Toolbars, Icons, Printing, and much more.",
    img: "https://img.youtube.com/vi/gxV7wOz_WI4/default.jpg",
    url: "https://youtu.be/gxV7wOz_WI4",
  },
  {
    title:
      "Symfony 5 Login and Registration | Symfony 5 Login and Registration using command line",
    document: "Video",
    tags: ["Login"],
    sub: "In this video, you'll see a symfony 5 Login and Registration using command line.",
    img: "https://img.youtube.com/vi/whl9RJJLnq4/default.jpg",
    url: "https://youtu.be/whl9RJJLnq4",
  },
  {
    title: "Implementing Pagination Without a Bundle (Symfony 6)",
    document: "Video",
    tags: ["Pagination"],
    sub: "In this video, we are implementing product pagination without using bundle on Symfony 6 series e-commerce project",
    img: "https://img.youtube.com/vi/Jwq-RDUv2D4/default.jpg",
    url: "https://youtu.be/Jwq-RDUv2D4",
  },
  {
    title: "How to Send Emails in Symfony - Tutorial by Mailtrap",
    document: "Video",
    tags: ["Mail"],
    sub: "Whether you're new to Symfony or an experienced developer, this tutorial provides valuable insights and practical code examples to elevate your Symfony email sending skills",
    img: "https://img.youtube.com/vi/Ktg_AwNB7QQ/default.jpg",
    url: "https://youtu.be/Ktg_AwNB7QQ",
  },
  {
    title: "Symfony 6 Message Queue Tutorial Part 5 - Creating a PDF file in PHP",
    document: "Video",
    tags: ["PDF"],
    sub: "This is a series on creating and handling asynchronous background tasks in Symfony using the Messenger component. In part 5 we'll create a PDF file and attach it to the email we created previously.",
    img: "https://img.youtube.com/vi/UOxx03ECOuo/default.jpg",
    url: "https://youtu.be/UOxx03ECOuo",
  },
  {
    title: "Managing a shopping cart with Symfony",
    document: "Video",
    tags: ["Shoppinh cart"],
    sub: "This video we will see how to manage a customer cart with Symfony.",
    img: "https://img.youtube.com/vi/__CdqAy1xMg/default.jpg",
    url: "https://youtu.be/__CdqAy1xMg",
  },
  {
    title: "Creating a private messaging system with Symfony 5",
    document: "Video",
    tags: ["Messaging"],
    sub: "This video we will see how to create a private messaging system between users with Symfony 5.",
    img: "https://img.youtube.com/vi/GK4XTkymA4E/default.jpg",
    url: "https://youtu.be/GK4XTkymA4E",
  },
  {
    title: "Tutorial Easily create stats charts with Chart.JS",
    document: "Video",
    tags: ["Statistiques"],
    sub: "Here is an excerpt from Carl Brison's training on Easily Create Stat Charts with Chart.JS",
    img: "https://img.youtube.com/vi/d9fEdcNCzr4/default.jpg",
    url: "https://youtu.be/d9fEdcNCzr4",
  },
];

export default function desktop_app() {
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
