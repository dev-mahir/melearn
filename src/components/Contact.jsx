import React from "react";

const Contact = () => {
	return (
		<section id="contact" className="bg-gray-100 text-gray-900 py-20">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-8">Contact Me</h2>
				<form className="max-w-xl mx-auto">
					<div className="mb-4">
						<input
							type="text"
							placeholder="Name"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div className="mb-4">
						<input
							type="email"
							placeholder="Email"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div className="mb-4">
						<textarea
							placeholder="Message"
							className="w-full p-2 border border-gray-300 rounded"></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
