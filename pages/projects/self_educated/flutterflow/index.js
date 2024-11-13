import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "Firebase Setup | FlutterFlow University",
    document: "Video",
    tags: ["FlutterFlow", "Firebase"],
    sub: "In this video we explore how to create a Firebase project from inside FlutterFlow and how to connect an existing project to FlutterFlow.",
    img: "https://img.youtube.com/vi/o7qTUzw2-UQ/default.jpg",
    url: "https://youtu.be/o7qTUzw2-UQ",
  },
  {
    title: "Implement CRUD (Create Read Update Delete) in FlutterFlow for your Web and Mobile app projects",
    document: "Video",
    tags: ["Create", "Update", "Read", "Delete"],
    sub: "In this tutorial, you will learn how to implement Create Read Update Delete (CRUD) feature in your mobile or web applications built without coding using FlutterFlow and Firebase.",
    img: "https://img.youtube.com/vi/ZSsg_EAaLJQ/default.jpg",
    url: "https://youtu.be/ZSsg_EAaLJQ",
  },
  {
    title:
      "How to Build Simple Search in Flutter App",
    document: "Video",
    tags: ["Search"],
    sub: "In this video we will run you through how to hook up a simple search of Firestore Documents all within FlutterFlow.",
    img: "https://img.youtube.com/vi/UV_ULe7dZuE/default.jpg",
    url: "https://youtu.be/UV_ULe7dZuE",
  },
  {
    title: "How to set up Login/Sign Up and Logout in FlutterFlow (FULL TUTORIAL 2023)",
    document: "Video",
    tags: ["Login"],
    sub: "In this video you will learn how to create a login/sign up/logout functionality in FlutterFlow.",
    img: "https://img.youtube.com/vi/f1jLiLTCHvg/default.jpg",
    url: "https://youtu.be/f1jLiLTCHvg",
  },
  {
    title: "Send Emails Automatically via #flutterflow and #emailJS",
    document: "Video",
    tags: ["Mail"],
    sub: "In this video, you'll see how to send emails with flutter flow",
    img: "https://img.youtube.com/vi/ltZnN8kJGh0/default.jpg",
    url: "https://youtu.be/ltZnN8kJGh0",
  },
  {
    title: "FLUTTERFLOW NEW 2023 - CALENDER WIDGET",
    document: "Video",
    tags: ["Calendar"],
    sub: "FLUTTERFLOW NEW 2023 - CALENDER WIDGET WITH APP STATE.",
    img: "https://img.youtube.com/vi/B3mw8vIzcls/default.jpg",
    url: "https://youtu.be/B3mw8vIzcls",
  },
  {
    title: "How to add QR or Barcode Scan Action in your mobile or web app without coding using FlutterFlow",
    document: "Video",
    tags: ["QR Code","scan"],
    sub: "In this tutorial you will learn how to use the QR code action in FlutterFlow to scan QR codes and Barcodes and use the Launch URL to redirect users to a web page using the scanned results. ",
    img: "https://img.youtube.com/vi/c1l_HSJDDao/default.jpg",
    url: "https://youtu.be/c1l_HSJDDao",
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
