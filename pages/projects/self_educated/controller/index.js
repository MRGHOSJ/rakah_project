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
            title="Controller DIY cardboard"
            document="Video"
            tags={["DIY"]}
            sub="This tutorial will teach you how to design your own controller from cardboard"
            img="https://img.youtube.com/vi/XyYUTsFYSFU/default.jpg"
            url="https://youtu.be/XyYUTsFYSFU"
          />
          <DocumentSelf
            title="Code/Demo (C++, SDL, OpenGL, Arduino)"
            document="Video"
            tags={["Arduino","SDL"]}
            sub="This tutorial will give you an idea about connecting arduino with your sdl game (Using c++)"
            img="https://img.youtube.com/vi/244s4VrxRhQ/default.jpg"
            url="https://youtu.be/244s4VrxRhQ"
          />
          <DocumentSelf
            title="How does a joystick function?"
            document="Video"
            tags={["Joystick"]}
            sub="This tutorial will teach you how to create a fully functional joystick for your controller"
            img="https://img.youtube.com/vi/S4l4zddOmp4/default.jpg"
            url="https://www.youtube.com/watch?v=S4l4zddOmp4"
          />
          <DocumentSelf
            title="Arduino Bluetooth Basics"
            document="Video"
            tags={["Bluetooth"]}
            sub="This tutorial will teach you how to use an arduino to control an object with a smartphone"
            img="https://img.youtube.com/vi/sXs7S048eIo/default.jpg"
            url="https://youtu.be/sXs7S048eIo"
          />
          <DocumentSelf
            title="Arduino Button Basics"
            document="Video"
            tags={["Button"]}
            sub="This tutorial will teach you how to Program a Push Button with an Arduino"
            img="https://img.youtube.com/vi/8j4a3A9Jeqw/default.jpg"
            url="https://www.youtube.com/watch?v=8j4a3A9Jeqw"
          />
          <DocumentSelf
            title="Arduino LED Sequential Control Basics"
            document="Video"
            tags={["LED"]}
            sub="This tutorial will teach you how to Program  a very simple arduino project for beginners. We’re going to get three different LEDs to turn on and turn off in a simple sequence, like you see here"
            img="https://img.youtube.com/vi/e1FVSpkw6q4/default.jpg"
            url="https://youtu.be/e1FVSpkw6q4"
          />
          <DocumentSelf
            title="Arduino LCD Tutorial"
            document="Video"
            tags={["LCD"]}
            sub="This tutorial will teach you how to connect an LCD (Liquid Crystal Display) to the Arduino board"
            img="https://img.youtube.com/vi/dZZynJLmTn8/default.jpg"
            url="https://youtu.be/dZZynJLmTn8"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
