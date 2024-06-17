"use client";

import React, { RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MessageBar from "./MessageBar";
import SpinnerLoader from "./atoms/SpinnerLoader";

const Contact = () => {
	const form: any = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [sendMessage, setSendMessage] = useState("");

	const [message, setMessage] = useState("");

	const [status, setStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIsLoading(true);

		if (!name || !email || !sendMessage) {
			setStatus(false);

			setMessage("please fill the form corectly");

			setTimeout(() => {
				setMessage("");
			}, 5000);
			setIsLoading(false);
			return;
		}

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
					setIsLoading(false);
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
					setIsLoading(false);
				}
			);
	};

	return (
		<div
		id="contact"
		className="flex py-40 sm:max-sm:h-[80vh] dark:bg-slate-800 gap-10 justify-betweenitems-center mobile:max-sm:flex-col mobile:max-sm:gap-5 px-24 bigScreen:px-80 mobile:max-sm:px-5 w-full bg-slate-200">
			<div className=" max-w-lg w-full mobile:max-sm:w-full mobile:max-sm:text-center">
				<h3 className=" font-bold text-[40px] pb-5 text-themecolor mobile:max-sm:text-center">
					Contact Me
				</h3>
				<p className="text-gray-700  text-sm dark:text-slate-400">
					I am passionate about bringing innovative ideas to life through the
					power of software development. Whether you are looking for a skilled
					developer to enhance your existing project or craft a groundbreaking
					web application from scratch, I am eager to discuss your vision and
					collaborate on creating something truly remarkable.
				</p>

				<p className="text-gray-700 text-sm mt-3 dark:text-slate-400">
					I am always open to new challenges and opportunities, so feel free to
					reach out with any inquiries.
				</p>
			</div>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="w-[40vw] border  border-themecolor flex flex-col gap-2 p-4 min-h-[40vh] mobile:max-sm:h-auto mobile:max-sm:w-full rounded-lg text-slate-600"
			>
				<input
					type="name"
					name="name"
					className="w-full outline-none p-2 rounded-md dark:bg-slate-700 dark:text-slate-200"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					className="w-full outline-none p-2 rounded-md dark:bg-slate-700 dark:text-slate-200"
				/>
				<textarea
					className="outline-none h-[100px] flex-grow mobile:max-sm:h-[150px] p-2 text-sm rounded-md dark:bg-slate-700 dark:text-slate-200"
					placeholder="Message..."
					name="message"
					onChange={(e) => setSendMessage(e.target.value)}
					id=""
				></textarea>
				<button
					className={`bg-themecolor p-2 text-white flex justify-center items-center disabled:bg-slate-800 rounded-md`}
					disabled={isLoading}
				>
					{!isLoading ? "send message " : <SpinnerLoader />}
				</button>
				{message && <MessageBar status={status} text={message} />}
			</form>
		</div>
	);
};

export default Contact;

//>>>>>>>>>>>>TODO<<<<<<<<<<<
// #1 Handle form validation
