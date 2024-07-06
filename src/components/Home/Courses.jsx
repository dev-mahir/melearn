import React from "react";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
	return (
		<section className="py-20">
			<div className="container px-5">
				<h2 className="title">New Courses</h2>
				<div className="grid grid-cols-1 gap-5 md:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 ">
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
				</div>
			</div>
		</section>
	);
};

export default Courses;
