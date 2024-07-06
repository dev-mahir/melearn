import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black text-white p-4">
			<div className="container mx-auto text-center">
				<p>
					&copy; 2024
					<b>
						<Link to="dev-mahir.vercel.app ">Md Mahir</Link>
					</b>
					. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
