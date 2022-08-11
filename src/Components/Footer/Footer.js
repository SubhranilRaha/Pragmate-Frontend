import React from "react";

function Footer() {
	return (
		<>
			<div className="flex flex-col items-start justify-around w-full p-20 bg-gray-50 h-1/2 md:flex-row">
				<div className="p-5 ">
					<ul>
						<p className="pb-6 text-3xl font-bold text-gray-800 font-[Poppins] ">
							PRAG<span className="text-orange-600">MATE</span>
						</p>
						<div className="flex gap-6 pb-5 ml-2 text-xl ">
                        <i class="uil uil-instagram hover:text-orange-600 hover:scale-105"></i>
                        <i class="uil uil-twitter-alt hover:text-orange-600 hover:scale-105"></i>
                        <i class="uil uil-facebook hover:text-orange-600 hover:scale-105"></i>
                        <i class="uil uil-linkedin-alt hover:text-orange-600 hover:scale-105"></i>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-gray-800">TOPIC 1</p>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
						Attribute 1
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 2
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 3
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 4
						</li>
					</ul>
				</div>
                <div className="p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-gray-800">TOPIC 2</p>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
						Attribute 1
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 2
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 3
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 4
						</li>
					</ul>
				</div>
                <div className="p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-gray-800">TOPIC 3</p>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
						Attribute 1
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 2
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 3
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-orange-600">
                        Attribute 4
						</li>
					</ul>
				</div>
                
				
			</div>
			<div className="flex flex-col items-center justify-center p-5 text-center bg-gray-50">
				<h1 className="font-semibold text-gray-800 ">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="font-semibold cursor-pointer hover:text-blue-600">
						Team Encoded{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;