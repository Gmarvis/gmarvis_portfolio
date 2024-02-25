"use client";

import React, { RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MessageBar from "./MessageBar";

const Contact = () => {
  const form: any = useRef();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(true);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k0kw658", "template_3rvzfiq", form.current, {
        publicKey: "vq3hgDoUtK5_tEs1Z",
      })
      .then(
        (results) => {
          setMessage(
            " Thank you for reaching out i will get back to you as soon as possible"
          );
          setStatus(true);

          setTimeout(() => {
            setMessage("");
          }, 5000);

          console.log(results);

          console.log("SUCCESS!");
        },
        (error) => {
          setMessage(
            "Sorry and error occured while sending message please try again!"
          );
          setStatus(false);
          setTimeout(() => {
            setMessage("");
          }, 5000);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex w-full justify-between mobile:max-sm:flex-col mobile:max-sm:gap-5">
      <div className="w-[40vw] mobile:max-sm:w-full mobile:max-sm:text-center">
        <h3 className=" font-bold text-[40px] pb-5 text-themecolor mobile:max-sm:text-center">
          Contact Me
        </h3>
        <p className="text-gray-700 text-sm">
          I am passionate about bringing innovative ideas to life through the
          power of software development. Whether you are looking for a skilled
          developer to enhance your existing project or craft a groundbreaking
          web application from scratch, I am eager to discuss your vision and
          collaborate on creating something truly remarkable.
        </p>

        <p className="text-gray-700 text-sm mt-3">
          I am always open to new challenges and opportunities, so feel free to
          reach out with any inquiries.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[40vw] border  border-themecolor flex flex-col gap-2 p-4 min-h-[40vh] mobile:max-sm:w-full rounded-lg text-slate-600"
      >
        <input
          type="name"
          name="name"
          className="w-full outline-none p-2"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full outline-none p-2"
        />
        <textarea
          className="outline-none h-[100px] p-2 text-sm"
          placeholder="Message..."
          name="message"
          id=""
        ></textarea>
        <button className="bg-themecolor p-2 text-white ">send message</button>
        {message && <MessageBar status text={message} />}
      </form>
    </div>
  );
};

export default Contact;

//>>>>>>>>>>>>TODO<<<<<<<<<<<
// #1 Add a loading indicator when sending message
// #2 Handle form validation
