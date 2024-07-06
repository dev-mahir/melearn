import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";
import Course from "./pages/Course";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/course" element={<Course />} />
			</Route>
		</Routes>
	);
};

export default App;
