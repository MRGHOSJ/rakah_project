import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "Complete JavaFX CRUD Tutorial with MySQL Database Integration",
    document: "Video",
    tags: ["Create", "Update", "Read", "Delete"],
    sub: "In this tutorial, we'll walk you through the process of creating a JavaFX application that performs CRUD (Create, Read, Update, Delete) operations on a MySQL database.",
    img: "https://img.youtube.com/vi/1vByWUaM1-k/default.jpg",
    url: "https://youtu.be/1vByWUaM1-k",
  },
  {
    title: "JavaFX UI /UX Dashboard Template",
    document: "Video",
    tags: ["Dashboard", "Template"],
    sub: "In this video, I Will show you how to make a responsive Ui/UX Dashboard in Netbeans ide using Scene Builder",
    img: "https://img.youtube.com/vi/-yJEdAKTIs4/default.jpg",
    url: "https://youtu.be/-yJEdAKTIs4",
  },
  {
    title:"JavaFX Login Page - SceneBuilder | Netbeans",
    document: "Video",
    tags: ["Login"],
    sub: "In this video, you'll see how to make a simple login app with scene builder.",
    img: "https://img.youtube.com/vi/_WEoMobafoM/default.jpg",
    url: "https://youtu.be/_WEoMobafoM",
  },
  {
    title: "JavaFX Login Example - Scene builder and Netbeans",
    document: "Video",
    tags: ["Login"],
    sub: "In this video, you'll see how to make a simple login app with Javafx and Scene builder",
    img: "https://img.youtube.com/vi/mFlBNMDDWeE/default.jpg",
    url: "https://youtu.be/mFlBNMDDWeE",
  },
  {
    title: "Create a Cool Login Form With Slide Effects || JavaFX Scene Builder",
    document: "Video",
    tags: ["Login","Animation"],
    sub: "In this video, you'll see how to make a simple login app with Javafx and Scene builder",
    img: "https://img.youtube.com/vi/EYFDcrKpEAI/default.jpg",
    url: "https://youtu.be/EYFDcrKpEAI",
  },
  {
    title: "How to send email in java and javafx",
    document: "Video",
    tags: ["Mail"],
    sub: "In this video, you'll see how to make a simple mailing function with Javafx",
    img: "https://img.youtube.com/vi/JJ-XZv1b93c/default.jpg",
    url: "https://youtu.be/JJ-XZv1b93c",
  },
  {
    title: "JavaFX and Scene Builder - Basic Calculator",
    document: "Video",
    tags: ["Calculator"],
    sub: "This video show a simple calculator built with JavaFX and Scene Builder. It has the basic four mathematical principles +, -, / and *.",
    img: "https://img.youtube.com/vi/vtg6vQ2_HMY/default.jpg",
    url: "https://youtu.be/vtg6vQ2_HMY",
  },
  {
    title: "JavaFX Full Tutorial - Employee Management System with SOURCE CODE (Duration: 3h:21m:29s)",
    document: "Video",
    tags: ["JAVAFX","MySQL","JDBC","CRUD"],
    sub: "In this video, I will show you how to design and build complete functions of Employee Management System using CSS, JDBC MySQL, SceneBuilder and JavaFX in Netbeans.",
    img: "https://img.youtube.com/vi/Aliw3lNRzfc/default.jpg",
    url: "https://youtu.be/Aliw3lNRzfc",
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
