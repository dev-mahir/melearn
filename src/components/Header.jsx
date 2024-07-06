import React from "react";
import { Link } from "react-router-dom";
import {
	FaCarAlt,
	FaFacebookF,
	FaLinkedin,
	FaPhoneAlt,
	FaSearch,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
	return (
		<header className="">
			{/* top header  */}
			<div className="bg-black py-2 hidden md:block">
				<div className="container flex justify-between items-center ">
					<div className=" flex gap-4">
						<div className="flex items-center gap-2">
							<FaPhoneAlt className="text-secondary" />
							<Link to={"tel:0128972"} className="text-white">
								+569842125
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<GoMail className="text-secondary" />
							<Link
								to={"mailto:mdmahir.ds@gmail.com"}
								className=" text-white">
								mdmahir.ds@gmail.com
							</Link>
						</div>
					</div>
					<div className="">
						<ul className="flex  items-center gap-3">
							<li>
								<Link
									to="https://.facebook.com/mdmahir.bd"
									className="text-[16px] text-secondary">
									<FaFacebookF />
								</Link>
							</li>

							<li>
								<Link
									to="https://.facebook.com/mdmahir.bd"
									className="text-[16px] text-secondary">
									<FaTwitter />
								</Link>
							</li>
							<li>
								<Link
									to="https://.facebook.com/mdmahir.bd"
									className="text-[16px] text-secondary">
									<FaLinkedin />
								</Link>
							</li>
							<li>
								<Link
									to="https://www.youtube.com/@mynersoft"
									className="text-[16px] text-secondary">
									<FaYoutube />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* main header  */}
			</div>
			<section className="py-3 shadow">
				<div className="container px-5 flex justify-between items-center">
					<div>
						<Link to="/">
							<img
								src="/images/logo-dark.png"
								alt=""
								className=" object-cover w-[100px]"
							/>
						</Link>
					</div>

					<nav className="hidden md:block">
						<ul className="flex ">
							<li>
								<Link to="/" className="nav-item">
									Home
								</Link>
							</li>
							<li>
								<Link to="/course" className="nav-item">
									Course
								</Link>
							</li>
							<li>
								<Link to="/about" className="nav-item">
									About us
								</Link>
							</li>
							<li>
								<Link to="/contact" className="nav-item">
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<div>
						<button>
							<FaSearch className="text-lg duration-200 hover:text-secondary mr-2" />
						</button>
						<button>
							<FaCartShopping className="text-lg duration-200 hover:text-secondary" />
						</button>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
