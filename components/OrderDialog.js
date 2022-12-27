import { useState } from "react";
import Toast from "./Toast";

import Facebook from "../public/assets/Icon/facebook.svg";
import Discord from "../public/assets/Icon/discord.svg";
import Mail from "../public/assets/Icon/mail.svg";
import { sendEmailForm } from "../lib/api";

export default function OrderDialog(props) {
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showDiscord, setDiscord] = useState(false);
  const [showMail, setMail] = useState(false);
  const [showFacebook, setFacebook] = useState(false);

  const [discordUser, setDiscordUser] = useState("");
  const [mailUser, setMailUser] = useState("");
  const [facebookUser, setFacebookUser] = useState("");
  const [message, setMessage] = useState("");

  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let discordformat = /^((.+?)#\d{4})/;
  let facebookUserFormat = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/ig
  let orderService = () => {
    if (showDiscord || showMail || showFacebook) {
      if (showDiscord && discordUser == "") {
        setToastMessage("You need to enter your discord username!");
        setToastType("error");
        setToast(true);
        return;
      }
      if (showMail && mailUser == "") {
        setToastMessage("You need to enter your email!");
        setToastType("error");
        setToast(true);
        return;
      }
      if (showFacebook && facebookUser == "") {
        setToastMessage("You need to enter your facebook username!");
        setToastType("error");
        setToast(true);
        return;
      }
      if (mailUser != "" && !mailUser.match(mailformat)){
        setToastMessage("You have entered an invalid email address please retry!");
        setToastType("error");
        setToast(true);
        return;
      }
      if (discordUser != "" && !discordUser.match(discordformat)){
        setToastMessage("You have entered an invalid discord user please retry!");
        setToastType("error");
        setToast(true);
        return;
      }
      
      if (facebookUser != "" && !facebookUser.match(facebookUserFormat)){
        setToastMessage("You have entered an invalid facebook url profile please retry!");
        setToastType("error");
        setToast(true);
        return;
      }
      setToastMessage("You have just sent your order we will reach out under 24hours!");
      setToastType("success");
      setToast(true);
      sendEmail()
      closeDialog()
    } else {
      setToastMessage(
        "You need to at least choose one of the contact method from above!"
      );
      setToastType("error");
      setToast(true);
    }
  };

  let closeDialog = () => {
    setDiscord(false);
    setMail(false);
    setFacebook(false);
    setDiscordUser("");
    setMailUser("");
    setFacebookUser("");
    setMessage("");
    props.dialog.setShowModal(false);
  };

  let sendEmail = async () => {
    let subject = "Order For " + props.dialog.service.title + " Project:" + props.dialog.title; 
    let res = {
      project:props.dialog.title,
      service:props.dialog.service.title,
      price:props.dialog.service.price,
      currency:props.dialog.service.currency,
    }
    if(discordUser)
      res.discordUser = discordUser
    if(mailUser)
      res.mailUser = mailUser
    if(facebookUser)
      res.facebookUser = facebookUser
    if(message)
      res.message = message
    let data = {
      subject:subject,
      html:res
    }
    await sendEmailForm(data)
  }

  return (
    <>
      {props.dialog.show ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black-600 opacity-40"
              onClick={() => props.dialog.setShowModal(true)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg mx-auto bg-white-300 rounded-md shadow-lg">
                <div className="mt-3 sm:flex p-4 flex flex-col justify-center max-w-md mx-auto">
                  <div className="bg-gradient-to-tr from-gray-100 to-white-300">
                    <div className="p-6 bg-sky-100 rounded">
                      <div className="flex items-center justify-center font-black m-3 mb-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 mr-3 text-orange-500 animate-pulse"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <h1 className="tracking-wide text-3xl text-black-600">
                          Order now
                        </h1>
                      </div>
                      <div
                        id="login_form"
                        className="flex flex-col justify-center"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="inline-flex items-center self-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 mr-3 bg-gradient-to-r from-orange-500 to-orange-500 shadow-lg rounded p-1.5 text-gray-100"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13 7H7v6h6V7z" />
                              <path
                                fill-rule="evenodd"
                                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="font-bold text-black-600">
                              {props.dialog.service.price}{" "}
                              {props.dialog.service.currency}
                            </span>
                          </div>
                          <div className="text-black-600">
                            <span className="font-bold">
                              {props.dialog.title}:
                            </span>
                            <br />
                            <span className="text-black-500">
                              {props.dialog.service.title}
                            </span>
                          </div>
                        </div>
                        <label className="text-sm font-medium">
                          Where can we contact you?
                        </label>
                        <div className="flex">
                          <a onClick={() => setFacebook(!showFacebook)}>
                            {showFacebook ? (
                              <Facebook className="w-8 h-8 text-orange-500" />
                            ) : (
                              <Facebook className="w-8 h-8 text-black-500" />
                            )}
                          </a>
                          <a onClick={() => setDiscord(!showDiscord)}>
                            {showDiscord ? (
                              <Discord className="ml-3 w-8 h-8 text-orange-500" />
                            ) : (
                              <Discord className="ml-3 w-8 h-8 text-black-500" />
                            )}
                          </a>
                          <a onClick={() => setMail(!showMail)}>
                            {showMail ? (
                              <Mail className="ml-5 w-8 h-8 text-orange-500" />
                            ) : (
                              <Mail className="ml-5 w-8 h-8 text-black-500" />
                            )}
                          </a>
                        </div>
                        <br />
                        {showDiscord ? (
                          <input
                            className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-orange-500 focus:invalid:ring-orange-500"
                            type="text"
                            name="username"
                            placeholder="Discord name..."
                            value={discordUser}
                            onChange={(e) => setDiscordUser(e.target.value)}
                          />
                        ) : null}

                        {showFacebook ? (
                          <input
                            className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-orange-500 focus:invalid:ring-orange-500"
                            type="text"
                            name="username"
                            placeholder="Facebook profile url..."
                            value={facebookUser}
                            onChange={(e) => setFacebookUser(e.target.value)}
                          />
                        ) : null}

                        {showMail ? (
                          <input
                            className="px-2 py-1.5
            mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-orange-500 focus:invalid:ring-orange-500"
                            type="mail"
                            name="username"
                            placeholder="Email..."
                            value={mailUser}
                            onChange={(e) => setMailUser(e.target.value)}
                          />
                        ) : null}

                        <label className="text-sm font-medium">
                          Messages (optional)
                        </label>
                        <textarea
                          className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-400 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-orange-500 focus:invalid:ring-orange-500"
                          name="messages"
                          placeholder="Write something"
                          value={message}
                          onChange={(e)=>{setMessage(e.target.value)}}
                        ></textarea>
                        <button
                          className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-orange-500 to-orange-500 font-medium text-gray-100 block transition duration-300"
                          onClick={() => orderService()}
                        >
                          <span id="login_process_state" className="hidden">
                            Sending :)
                          </span>
                          <span id="login_default_state">
                            Order<span id="subtotal"></span>
                          </span>
                        </button>
                        <a
                          className="mt-5 mx-auto text-sm text-gray-400 cursor-pointer"
                          onClick={() => closeDialog()}
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Toast
        options={{
          show: showToast,
          message: toastMessage,
          type: toastType,
          setToast: setToast,
        }}
      />
    </>
  );
}
