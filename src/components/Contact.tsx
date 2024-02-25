import React from "react";

const Contact = () => {
  return (
    <div className="flex w-full justify-between mobile:max-sm:flex-col mobile:max-sm:gap-5">
      <div className="w-[40vw] mobile:max-sm:w-full mobile:max-sm:text-center">
        <h3 className=" font-bold text-[40px] pb-5 text-themecolor mobile:max-sm:text-center">
          Contact Me
        </h3>
        <p>
          I am passionate about bringing innovative ideas to life through the
          power of software development. Whether you are looking for a skilled
          developer to enhance your existing project or craft a groundbreaking
          web application from scratch, I am eager to discuss your vision and
          collaborate on creating something truly remarkable.
        </p>

        <p>
          I am always open to new challenges and opportunities, so feel free to
          reach out with any inquiries.
        </p>
      </div>
      <form className="w-[40vw] border  border-themecolor flex flex-col gap-2 p-4 h-[40vh] mobile:max-sm:w-full rounded-lg text-slate-600">
        <input
          type="name"
          className="w-full outline-none p-2"
          placeholder="Name"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full outline-none p-2"
        />
        <textarea
          className="outline-none h-[600px] p-2"
          placeholder="Message..."
          name=""
          id=""
        ></textarea>
        <button className="bg-themecolor p-2 text-white">send message</button>
      </form>
    </div>
  );
};

export default Contact;
