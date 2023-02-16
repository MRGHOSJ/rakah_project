import Header from "../../../../components/Layout/Header";
import Footer from "../../../../components/Layout/Footer";
import SeoHead from "../../../../components/SeoHead";
import DocumentSelf from "../../../../components/DocumentSelf"

export default function desktop_app() {

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
            title="Qt Installation/Tutorial : C++ Notepad App"
            document="Video"
            tags={["Installation","First steps"]}
            sub="This video shows how to install Qt for Windows and MacOS. Then we'll cover Qt Basics, Dialogs, Widgets, Drag and Drop Interfaces, Creating / Opening / Saving Files, Menus, Toolbars, Icons, Printing, and much more."
            img="https://img.youtube.com/vi/I96uPDifZ1w/default.jpg"
            url="https://www.youtube.com/watch?v=I96uPDifZ1w&feature=youtu.be"
          />
          <DocumentSelf
            title="Qt C++ Tutorial 4 - Creating a CRUD with SQLite (Portuguese)"
            document="Video"
            tags={["Create","Update","Read","Delete"]}
            sub="This video illustrates how to create a completely functional CRUD for Qt C++, but it is in Portuguese. You can use the subtitles to translate the movie, and the end result looks promising."
            img="https://img.youtube.com/vi/DCUznzzoJMU/default.jpg"
            url="https://www.youtube.com/watch?v=DCUznzzoJMU"
          />
          <DocumentSelf
            title="How To Create First Qt GUI Widget Application in C++ Using Qt Creator"
            document="Video"
            tags={["Widgets","Qt Creator"]}
            sub="In this video, you'll see how to create Widgets in C++ Using Qt Creator."
            img="https://img.youtube.com/vi/3SIj6zL6mmA/default.jpg"
            url="https://youtu.be/3SIj6zL6mmA"
          />
          <DocumentSelf
            title="Qt Tutorials For Beginners 10 - Simple Login app using QT"
            document="Video"
            tags={["Login"]}
            sub="In this video, you'll see how to make a simple login app with QT c++."
            img="https://img.youtube.com/vi/6_elY8O20I8/default.jpg"
            url="https://youtu.be/6_elY8O20I8"
          />
          <DocumentSelf
            title="Qt5 C++ Creating LineChart With QtChart | C++ GUI Tutorial"
            document="Video"
            tags={["Chart"]}
            sub="In this video, you'll see how to create LineChart with QtChart, basically we are using QtChart class for this article,  QtChart module provides a set of easy to use chart components"
            img="https://img.youtube.com/vi/eS61kziGo1I/default.jpg"
            url="https://youtu.be/eS61kziGo1I"
          />
          <DocumentSelf
            title="Qt Creator Tutorial - SMTP (Send Mail) (Spanish)"
            document="Video"
            tags={["Mail"]}
            sub="Although the video is in Spanish, you can use YouTube subtitles to help you comprehend the complete procedure. In thi video you will learn how to send mails thru SMTP services using Qt c++"
            img="https://img.youtube.com/vi/Ly8FzkNukrE/default.jpg"
            url="https://youtu.be/Ly8FzkNukrE"
          />
          <DocumentSelf
            title="Generate PDF with Image in C++ QT Creator (Spanish)"
            document="Video"
            tags={["PDF"]}
            sub="Basically a PDF document made in C++ QTCreator is generated and displayed, using the libraries QPDFWriter, QPainter.Although the video is in Spanish, you can use YouTube subtitles to help you comprehend the complete procedure."
            img="https://img.youtube.com/vi/gcy-jPU27eY/default.jpg"
            url="https://youtu.be/gcy-jPU27eY"
          />
          <DocumentSelf
            title="Qt Tutorial 2 : C++ Calculator"
            document="Video"
            tags={["Calculator"]}
            sub="This video show a C++ app you guys asked for was a calculator, so here it is. We'll make a C++ GUI Calculator app in one video."
            img="https://img.youtube.com/vi/txGRU7OrTZo/default.jpg"
            url="https://www.youtube.com/watch?v=txGRU7OrTZo"
          />
          <DocumentSelf
            title="Qt C++ Calendar"
            document="Video"
            tags={["Calendar"]}
            sub="The Calendar example displays a Calendar control and an events list for the selected date."
            img="https://img.youtube.com/vi/pBaEdnz1qck/default.jpg"
            url="https://youtu.be/pBaEdnz1qck"
          />
          <DocumentSelf
            title="QR Code generator library "
            document="Documentation"
            tags={["QR Code"]}
            sub="You can generate QR Code symbols conveniently on this web page, powered by the TypeScript port of this library."
            img="https://www.nayuki.io/res/qr-code-generator-library/teensy-qrcodegen-thumb.jpg"
            url="https://www.nayuki.io/page/qr-code-generator-library"
          />
          <DocumentSelf
            title="Qt5 C++ Creating Menu And Toolbar QMenu"
            document="Video"
            tags={["Tool bar"]}
            sub="In this video you will learn how you can create Menu And Toolbar (QMenu And QToolbar) in Qt5 C++ we will use QMenu, QToolbar and also QAction for this tutorial."
            img="https://img.youtube.com/vi/8z191FSk7n4/default.jpg"
            url="https://youtu.be/8z191FSk7n4"
          />
          <DocumentSelf
            title="C++ Qt 131 - Media Player GUI"
            document="Video"
            tags={["Media player"]}
            sub="In this video you will learn how to show case videos inside of your Qt app."
            img="https://img.youtube.com/vi/ZoFm_Mznq1M/default.jpg"
            url="https://www.youtube.com/watch?v=ZoFm_Mznq1M"
          />
          <DocumentSelf
            title="QMediaPlayer – simple audio player"
            document="Video"
            tags={["Audio player"]}
            sub="In this documentation you will find every detail on how to import and execute audio for your Qt app."
            img="https://evileg.com/media/uploads/2016/12/26/player.png"
            url="https://evileg.com/en/post/155/  "
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
