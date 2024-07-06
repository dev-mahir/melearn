import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CourseCard = () => {
	return (
		<div className="shadow">
			<div className="relative bg-[url('/images/course.jpg')] bg-cover bg-no-repeat bg-center h-[150px] ">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="flex  items-center  gap-2 absolute bottom-1 left-1">
					<img
						src="/images/mahir.jpg"
						alt=""
						className="w-12 h-12 rounded-full object-cover"
					/>
					<div>
						<Link
							to="/instructor/mahir"
							className="text-sm font-medium text-white hover:underline">
							Md Mahir
						</Link>
						<div className="flex">
							<FaStar className="text-secondary" />
							<FaStar className="text-secondary" />
							<FaStar className="text-secondary" />
							<FaStar className="text-secondary" />
							<FaStar className="text-secondary" />
						</div>
					</div>
				</div>
			</div>
			<div className="py-2 px-2">
				<h3 className="subtitle mb-1">Build A Website With React</h3>
				<p>Lorem ipsum dolor, sit amet consectetur ...</p>
			</div>
			<div className=" p-2 border-t border-t-slate-200">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2 text-gray">
						<FaPeopleGroup className="text-lg " />
						<p>28 Students</p>
					</div>
					<p className="bg-secondary px-2 py-1 font-medium rounded text-white">
						Free
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
