import React from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Counter from "../components/Home/Counter";
import Courses from "../components/Home/Courses";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Hero />
			<Counter />
			<Courses />
		</>
	);
};

export default Home;
