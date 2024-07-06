import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import { FaSearch, FaThLarge, FaThList } from "react-icons/fa";

const Course = () => {
	return (
		<section className="py-20">
			<div className="container px-5">
				{/* search courses  */}
				<div className="border border-stone-300 px-4 py-2 rounded mb-10 flex flex-col gap-y-2 md:flex-row justify-between ">
					<div className="flex items-center gap-3">
						<div>
							<button className="text-xl text-black mr-2">
								<FaThLarge />
							</button>

							<button className="text-xl text-slate-400">
								<FaThList />
							</button>
						</div>
						<p>Showing 1-9 of 11 results</p>
					</div>
                    <div>
                        <div className="flex">
                            <select name="" id="" className="form-input">
                                <option value="">Programming</option>
                                <option value="">Kids</option>
                                <option value="">Web Development</option>
                                <option value="">Language</option>
                            </select>
							<input
								className="form-input rounded-none"
								type="text" placeholder="Search our courses..." />
							<button className="btn bg-black px-2 rounded-none">
								<FaSearch/>
							</button>
                        </div>
                        

                        
                    </div>
				</div>

				<div className="grid  gap-x-7 gap-y-5 md:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
			</div>
		</section>
	);
};

export default Course;
