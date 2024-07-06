import React from "react";

const Counter = () => {
	return (
		<section className="py-10">
			<div className="container px-5  grid grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-4 ">
				<div className="flex  items-center gap-6">
					<div>
						<img src="/images/book.png" alt="" className="w-14" />
					</div>
					<div>
						<span className="font-bold text-2xl">12000</span>
						<h4 className="text-lg">Online Courses</h4>
					</div>
				</div>
				<div className="flex  items-center gap-6">
					<div>
						<img src="/images/people.png" alt="" className="w-20" />
					</div>
					<div>
						<span className="font-bold text-2xl">1500</span>
						<h4 className="text-lg text-nowrap">
							Expert Instructors
						</h4>
					</div>
				</div>
				<div className="flex  items-center gap-6">
					<div>
						<img src="/images/lock.png" alt="" className="w-14" />
					</div>
					<div>
						<span className="font-bold text-2xl">Unlimited</span>
						<h4 className="text-lg"> Course Access</h4>
					</div>
				</div>
				<div className="flex  items-center gap-6">
					<div>
						<img src="/images/book1.png" alt="" className="w-14" />
					</div>
					<div>
						<span className="font-bold text-2xl">Learn</span>
						<h4 className="text-lg">From Anywhere</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;
