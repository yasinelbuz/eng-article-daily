import React from "react";
import AboutImg from "@/assets/images/about-img.jpeg";

export default function About() {
	return (
		<section class="text-gray-600 body-font">
			<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
				<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<img
						class="object-cover object-center rounded w-full h-80"
						alt="hero"
						src={AboutImg}
					/>
				</div>
				<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium leading-10! text-gray-900">
						Every day may not be good.
						<br class="hidden lg:inline-block" />
						But there is something
						<br class="hidden lg:inline-block" />
						good in every day.
					</h1>
					<p className="mb-8 leading-relaxed">
						<p>
							Hello, in my English learning process, reading is
							extremely important. I also wanted to code an
							application that came to my mind during the English
							development process.
						</p>
						<br class="hidden lg:inline-block" />
						<p>
							Articles are pulled from <b>ChatGPT</b> and only one
							post is shared per day.
							<br class="hidden lg:inline-block" />
							<br class="hidden lg:inline-block" />
							If you want to contact me, <br /> you can send an
							e-mail to{" "}
							<a
								href="mailto:yasinelbuz@gmail.com"
								className="text-blue-700 font-bold"
							>
								yasinelbuz@gmail.com
							</a>
						</p>
					</p>
				</div>
			</div>
		</section>
	);
}
