import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "Angular + Spring Boot JWT Authentication Example | JavaTechie",
    document: "Video",
    tags: ["Login"],
    sub: "This tutorial will walk you through the steps to build a full stack Angular 8 + Spring Boot JWT Authentication example",
    img: "https://img.youtube.com/vi/-Aob4HfEWg4/default.jpg",
    url: "https://youtu.be/-Aob4HfEWg4",
  },
  {
    title:
      "How to Integrate Chart.js Using Angular 12 with Data from a REST API (2021)",
    document: "Video",
    tags: ["Chart"],
    sub: "In this tutorial, I break down how to integrate Chart.js and Angular using a Rest API.  Some of the things we did in this tutorial include REST API consumption, Chart.js Integration, Dependency Injection.",
    img: "https://img.youtube.com/vi/WCI4yvrzFwc/default.jpg",
    url: "https://youtu.be/WCI4yvrzFwc",
  },
  {
    title: "Spring Boot - Send Email via SMTP - Tutorial by Mailtrap",
    document: "Video",
    tags: ["Mail"],
    sub: "In this Mailtrap tutorial, we cover how to send email from Spring Boot application. Learn how to send plain text emails, send HTML emails with and without templates, add attachments, and more.",
    img: "https://img.youtube.com/vi/BzGm2NtyfE4/default.jpg",
    url: "https://youtu.be/BzGm2NtyfE4",
  },
  {
    title: "Export PDF using Angular || How to generate a PDF using Angular",
    document: "Video",
    tags: ["PDF"],
    sub: "Create a Simple Program for Export PDF using Anuglar.",
    img: "https://img.youtube.com/vi/aXbqxancvVA/default.jpg",
    url: "https://youtu.be/aXbqxancvVA",
  },
  {
    title: "Connect a Spring web server with a MySQL Database - Tutorial",
    document: "Video",
    tags: ["Spring Boot","Mysql"],
    sub: "This video will look at how we can connect our Spring Boot Application with a MySQL Database.",
    img: "https://img.youtube.com/vi/KbXeVexjy7A/default.jpg",
    url: "https://youtu.be/KbXeVexjy7A",
  },
  {
    title: "Date and Time Format Conversion Between Spring Boot and Angular",
    document: "Video",
    tags: ["Date Time Input"],
    sub: "This video explain DatePicker and how to format dates between Angular and Spring Boot.",
    img: "https://img.youtube.com/vi/CyWQVYLiupc/default.jpg",
    url: "https://youtu.be/CyWQVYLiupc",
  },
  {
    title: "Spring Boot Postman Setup & Testing POST Endpoint",
    document: "Video",
    tags: ["Postman","Testing"],
    sub: "Join us as we guide you through the process of configuring Postman for effective API testing, ensuring your Spring Boot application functions flawlessly. Discover valuable insights and best practices in this SEO-friendly tutorial to take your development skills to the next level. Subscribe now to stay updated with our ongoing Spring Boot tutorial series!",
    img: "https://img.youtube.com/vi/MMR-_xMLp0U/default.jpg",
    url: "https://youtu.be/MMR-_xMLp0U",
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
