import React from "react";

const Hero = () => {
	return (
		<section
			id="home"
			className="bg-gray-900 text-white h-screen flex items-center justify-center bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center ">
			<div className="text-center space-y-4 px-5">
				<h1 className="text-[40px] md:text-[50px] font-medium">
					Learn a new skill online on your time
				</h1>
				<h3 className="text-xl md:text-2xl">
					<b>57,000</b> &nbsp; Online Coursese
				</h3>
				<button className="btn md:px-10 md:py-3">Start a free trial</button>
			</div>
		</section>
	);
};

export default Hero;
