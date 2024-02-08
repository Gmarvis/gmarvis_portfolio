import React from "react";

const Contact = () => {
  return (
    <div className="flex w-full">
      <div className="w-[50vw]">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          necessitatibus optio praesentium animi, unde amet ex maiores harum.
          Omnis facere veritatis aut laboriosam maiores natus ratione ea nam,
          quidem sint minima? Excepturi id repellat distinctio dicta quos
          assumenda itaque, aperiam ipsum sapiente? Excepturi nesciunt
          blanditiis ipsa odio est illo doloremque inventore error ipsum.
        </p>
      </div>
      <form className="w-[40vw] border  border-themecolor flex flex-col gap-2 p-4 h-[40vh] rounded-lg text-slate-600">
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
