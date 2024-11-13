import homePageImage from "@/assets/Desktop - 1.png";
import commingSoon from "@/assets/Layer_1.png";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <Image
          src={homePageImage}
          alt="Website homepage screenshot"
          layout="responsive" // Makes the image responsive
          width={1080} // Set the width and height based on your image's aspect ratio
          height={1920}
          priority={true}
          className="filter blur-sm"
        />
      </div>
      <div className="fixed inset-0 flex justify-center pt-[180px] z-50 bg-black bg-opacity-50">
        <div className="bg-white h-[500px] w-[90%] md:w-[60%] p-6 bg-opacity-90 rounded-lg shadow-lg mx-4 rounded-xl">
          <div className="flex items-center justify-center mt-[50px]">
            <Image
              src={commingSoon}
              alt="Website homepage screenshot"
              layout="contain"
              width={350}
              height={200}
              priority={true}
            />
          </div>
          <h2 className="text-2xl text-center font-semibold mb-4 mt-10 text-[#1CAAAA]">
            Contact Us: 01886626484
          </h2>
        </div>
      </div>
    </div>
  );
}
