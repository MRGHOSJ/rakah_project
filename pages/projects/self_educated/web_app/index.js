import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf"

export default function WebApp() {

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
            title="Complete CRUD Operation with PHP MySql Database"
            sub="In this tutorial, you are going to learn how to create PHP CRUD Operation. You will learn how to create, Read, Update and Delete Data using Mysql Database."
            img="https://img.youtube.com/vi/JZdMXUIMdQw/default.jpg"
            url="https://www.youtube.com/watch?v=JZdMXUIMdQw"
          />
          <DocumentSelf
            title="How to Create a Search Feature with PHP and MySQL"
            sub="In this tutorial, you are going to learn how to create a search feature with php and mysql."
            img="https://img.youtube.com/vi/O-5qZmsI0Gg/default.jpg"
            url="https://youtu.be/O-5qZmsI0Gg"
          />
          <DocumentSelf
            title="How to send SMS using PHP | Textlocal API"
            sub="This tutorial will teach you how to send SMS text messages using PHP. You can use this to send text messages to your website members, clients or customers from a web based platform."
            img="https://img.youtube.com/vi/kDEyqRFS0Z8/default.jpg"
            url="https://www.youtube.com/watch?v=kDEyqRFS0Z8"
          />
          <DocumentSelf
            title="How to Sort Data in Numerical order (High-Low | Low-High) in PHP MySQL | PHP Tutorials - 23"
            sub="This tutorial will teach you how to Sort Data in Numerical order (High-Low | Low-High) in PHP MySQL"
            img="https://img.youtube.com/vi/dGwd2VspHCw/default.jpg"
            url="https://www.youtube.com/watch?v=dGwd2VspHCw"
          />
          <DocumentSelf
            title="How to Make Pagination in PHP"
            sub="This tutorial will teach you how to Make Pagination in PHP with MySQL Database."
            img="https://img.youtube.com/vi/QP1jJlnC8eI/default.jpg"
            url="https://youtu.be/QP1jJlnC8eI"
          />
          <DocumentSelf
            title="Js chart using php and mysql extremely easy example"
            sub="This tutorial on implement the js chart using php and mysql."
            img="https://img.youtube.com/vi/2zgxbiX0tbs/default.jpg"
            url="https://www.youtube.com/watch?v=2zgxbiX0tbs"
          />
          <DocumentSelf
            title="How to Make Login Form in PHP and MySQL"
            sub="This tutorial will teach you how to Make Login Form in PHP and MySQL."
            img="https://img.youtube.com/vi/aIsu9SPcGbU/default.jpg"
            url="https://www.youtube.com/watch?v=aIsu9SPcGbU"
          />
          <DocumentSelf
            title="How To Add Google Translator To Any Website Using JavaScript | JavaScript Project"
            sub="This tutorial will teach you how to add a google translator to your website by html ,css & javascript in english"
            img="https://img.youtube.com/vi/vXZvAdS5tSM/default.jpg"
            url="https://www.youtube.com/watch?v=vXZvAdS5tSM"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
