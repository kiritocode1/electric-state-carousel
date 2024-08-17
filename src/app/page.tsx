"use client";
import { Suspense } from "react";
import Carousel from "@/components/Carousel";
import { Canvas } from "@react-three/fiber";

import { Sedan } from "next/font/google";
import Link from "next/link";

const sedanFont = Sedan({
  subsets: ["latin"],
  weight:"400",
  display: "swap",
});
export default function Home() {
  return (
		<Suspense fallback={<div>Loading...</div>}>
		  <div className="w-full min-h-screen bg-[#D5D5D5] grid place-content-center" style={sedanFont.style}>
			  <Link href="https://www.simonandschuster.com/books/The-Electric-State/Simon-Stalenhag/9781501181412" className="text-pink-700 text-5xl">The Electric State</Link>A Graphic Novel <br /> by Simon Stalenhag.
			  <br/> illustrated by <Link href="https://aryank.online" >Aryan Kathawale.</Link>
			</div>
			<div className=" w-full min-h-screen ">
				<Canvas className="">
					<Suspense fallback={null}>
						<Carousel />
					</Suspense>
				</Canvas>
			</div>
		</Suspense>
  );
}
