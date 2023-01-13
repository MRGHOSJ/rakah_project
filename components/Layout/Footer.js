import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import LogoDiscord from "../../public/assets/icon/discord.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="flex">
            <LogoVPN className="h-8 w-auto mb-6" />
            <div className="mt-2">
              <span className="font-bold text-orange-500">Rakah</span>{" "}
              <span className="font-bold">Project</span>
            </div>
          </div>

          <p className="mb-4">
            <strong className="font-medium">Rakah Project</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Rakah Project
          </p>
          <p className="text-gray-400">✉️ rakahproject@gmail.com</p>
          <p className="text-gray-400 hover:text-black-600">
            <a href="https://discord.gg/TXR9hDyGGS" target="_blank" className="flex">
              <LogoDiscord className="h-6 w-auto mb-6" />
              <span className="text-sm pt-1 pl-1">Join Rakah Project Discord Server</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
