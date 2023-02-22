import { useState } from "react";
import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf";
import Filter from "../../../../components/Filter";

const documents = [
  {
    title: "Qt Installation/Tutorial : C++ Notepad App",
    document: "Video",
    tags: ["Installation", "First steps"],
    sub: "This video shows how to install Qt for Windows and MacOS. Then we'll cover Qt Basics, Dialogs, Widgets, Drag and Drop Interfaces, Creating / Opening / Saving Files, Menus, Toolbars, Icons, Printing, and much more.",
    img: "https://img.youtube.com/vi/I96uPDifZ1w/default.jpg",
    url: "https://www.youtube.com/watch?v=I96uPDifZ1w&feature=youtu.be",
  },
  {
    title: "Qt C++ Tutorial 4 - Creating a CRUD with SQLite (Portuguese)",
    document: "Video",
    tags: ["Create", "Update", "Read", "Delete"],
    sub: "This video illustrates how to create a completely functio,nal CRUD for Qt C++, but it is in Portuguese. You can use the subtitles to translate the movie, and the end result looks promising.",
    img: "https://img.youtube.com/vi/DCUznzzoJMU/default.jpg",
    url: "https://www.youtube.com/watch?v=DCUznzzoJMU",
  },
  {
    title:
      "How To Create First Qt GUI Widget Application in C++ Using Qt Creator",
    document: "Video",
    tags: ["Widgets", "Qt Creator"],
    sub: "In this video, you'll see how to create Widgets in C++ Using Qt Creator.",
    img: "https://img.youtube.com/vi/3SIj6zL6mmA/default.jpg",
    url: "https://youtu.be/3SIj6zL6mmA",
  },
  {
    title: "Qt Tutorials For Beginners 10 - Simple Login app using QT",
    document: "Video",
    tags: ["Login"],
    sub: "In this video, you'll see how to make a simple login app with QT c++.",
    img: "https://img.youtube.com/vi/6_elY8O20I8/default.jpg",
    url: "https://youtu.be/6_elY8O20I8",
  },
  {
    title: "Qt5 C++ Creating LineChart With QtChart | C++ GUI Tutorial",
    document: "Video",
    tags: ["Chart"],
    sub: "In this video, you'll see how to create LineChart with QtChart, basically we are using QtChart class for this article,  QtChart module provides a set of easy to use chart components",
    img: "https://img.youtube.com/vi/eS61kziGo1I/default.jpg",
    url: "https://youtu.be/eS61kziGo1I",
  },
  {
    title: "Qt Creator Tutorial - SMTP (Send Mail) (Spanish)",
    document: "Video",
    tags: ["Mail"],
    sub: "Although the video is in Spanish, you can use YouTube subtitles to help you comprehend the complete procedure. In thi video you will learn how to send mails thru SMTP services using Qt c++",
    img: "https://img.youtube.com/vi/Ly8FzkNukrE/default.jpg",
    url: "https://youtu.be/Ly8FzkNukrE",
  },
  {
    title: "Generate PDF with Image in C++ QT Creator (Spanish)",
    document: "Video",
    tags: ["PDF"],
    sub: "Basically a PDF document made in C++ QTCreator is generated and displayed, using the libraries QPDFWriter, QPainter.Although the video is in Spanish, you can use YouTube subtitles to help you comprehend the complete procedure.",
    img: "https://img.youtube.com/vi/gcy-jPU27eY/default.jpg",
    url: "https://youtu.be/gcy-jPU27eY",
  },
  {
    title: "Qt Tutorial 2 : C++ Calculator",
    document: "Video",
    tags: ["Calculator"],
    sub: "This video show a C++ app you guys asked for was a calculator, so here it is. We'll make a C++ GUI Calculator app in one video.",
    img: "https://img.youtube.com/vi/txGRU7OrTZo/default.jpg",
    url: "https://www.youtube.com/watch?v=txGRU7OrTZo",
  },
  {
    title: "Qt C++ Calendar",
    document: "Video",
    tags: ["Calendar"],
    sub: "The Calendar example displays a Calendar control and an events list for the selected date.",
    img: "https://img.youtube.com/vi/pBaEdnz1qck/default.jpg",
    url: "https://youtu.be/pBaEdnz1qck",
  },
  {
    title: "QR Code generator library ",
    document: "PDF",
    tags: ["QR Code"],
    sub: "You can generate QR Code symbols conveniently on this web page, powered by the TypeScript port of this library.",
    img: "https://www.nayuki.io/res/qr-code-generator-library/teensy-qrcodegen-thumb.jpg",
    url: "https://www.nayuki.io/page/qr-code-generator-library",
  },
  {
    title: "Qt5 C++ Creating Menu And Toolbar QMenu",
    document: "Video",
    tags: ["Tool bar"],
    sub: "In this video you will learn how you can create Menu And Toolbar (QMenu And QToolbar) in Qt5 C++ we will use QMenu, QToolbar and also QAction for this tutorial.",
    img: "https://img.youtube.com/vi/8z191FSk7n4/default.jpg",
    url: "https://youtu.be/8z191FSk7n4",
  },
  {
    title: "C++ Qt 131 - Media Player GUI",
    document: "Video",
    tags: ["Media player"],
    sub: "In this video you will learn how to show case videos inside of your Qt app.",
    img: "https://img.youtube.com/vi/ZoFm_Mznq1M/default.jpg",
    url: "https://www.youtube.com/watch?v=ZoFm_Mznq1M",
  },
  {
    title: "QMediaPlayer – simple audio player",
    document: "Video",
    tags: ["Audio player"],
    sub: "In this PDF you will find every detail on how to import and execute audio for your Qt app.",
    img: "https://evileg.com/media/uploads/2016/12/26/player.png",
    url: "https://evileg.com/en/post/155/  ",
  },
  {
    title: "Extended Scientific Calculator Template",
    document: "Template",
    tags: ["Calculator"],
    sub: "This template will help you understand how you can create a scientific calculator.",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/331876649_1169724213609532_5028553746186673322_n.png?stp=dst-png_s403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=E-pQ9eWljaQAX_voi9m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT-A2cWreDw9Rh2JRcRMAyjwgNZw8irC_xlPafna6mmow&oe=641CCCDA",
    url: "https://www.mediafire.com/file/fsz69bub9l8h9r9/Extended+Scientific+Calculator.zip/file",
  },
  {
    title: "Login Register Template",
    document: "Template",
    tags: ["Login","Register"],
    sub: "This template will help you understand how you can create a login and register form.",
    img: "https://cdn.discordapp.com/attachments/864587916076646401/1077749830815854642/image.png",
    url: "https://www.mediafire.com/file/dspzu1rcbm3npmx/Login_Register.zip/file",
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
