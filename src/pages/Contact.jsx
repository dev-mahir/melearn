import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<section className="py-28">
			<div className="container px-5 flex flex-col md:flex-row gap-12">
				<div className=" md:w-[30%]">
					<h3 className="subtitle text-2xl md:text-xl mb-3 ">
						Information
					</h3>
					<div className="space-y-5">
						<div className="flex items-center gap-1 border border-slate-300 rounded-md px-3 py-5">
							<FaLocationDot className="text-black text-xl" />
							<p className="text-base">
								Madhupur, Tangail - 1996
							</p>
						</div>
						<div className="flex items-center gap-1 border border-slate-300 rounded-md px-3 py-5">
							<FaEnvelope className="text-black text-xl" />
							<Link
								to="mailto:mdmahir.ds@gmail.com"
								className="text-base">
								mdmahir.ds@gmail.com
							</Link>
						</div>
						<div className="flex items-center gap-1 border border-slate-300 rounded-md px-3 py-5">
							<FaPhone className="text-black text-xl rotate-90" />
							<Link to="tel:+8801868944080" className="text-base">
								+8801868944080
							</Link>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<h3 className="subtitle text-2xl md:text-xl mb-3 ">
						Contact With Us
					</h3>
					<div>
						<form action="">
							<div className="space-y-5">
								<div className="flex flex-col md:flex-row gap-5">
									<input
										type="text"
										className="form-input"
										placeholder="Name*"
										name="name"
									/>
									<input
										type="email"
										className="form-input"
										placeholder="Email*"
										name="email"
									/>
								</div>
								<div className="flex flex-col md:flex-row gap-5">
									<input
										type="text"
										className="form-input"
										placeholder="Subject*"
										name="subject"
									/>
									<input
										type="text"
										className="form-input"
										placeholder="Phone"
										name="phone"
									/>
								</div>
								<textarea
									className="form-input"
									name="message"
									placeholder="Enter your message..."></textarea>
								<button type="submit" className="btn py-2 bg-black">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
