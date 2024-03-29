import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import Theme from "../Theme/Theme";
import Currently from "./Currently";

const FooterITems = () => {
  let year = new Date().getFullYear();

  return (
    <div>
      <div className="flex justify-between items-center  lg:p-4"></div>
      <div className=" grid grid-cols-1 place-content-center justify-items-center lg:flex lg:justify-evenly lg:items-center   ">
        <div className="pb-8 lg:transform lg:-translate-y-8 lg:-translate-x-6">
          <Currently />
        </div>
        <div className="pb-8 lg:pl-4 lg:transform lg:-translate-x-6">
          <iframe
            src="https://open.spotify.com/embed/playlist/6nm8IMHVnt1GRPKJ8zvDSD?theme=0"
            width="250"
            height="330"
            allow="encrypted-media"
            frameBorder="0"
            className=" border border-opacity-40 "
          ></iframe>
        </div>
        <div className="lg:self-center lg:transform lg:translate-x-6 ">
          <h1 className=" text-4xl  select-none pb-12 lg:p-4 lg:pb-24  lg:pl-10">
            <span className="dark:text-mine text-mine2"> Aku</span>
            <span className="dark:text-mine2 text-mine">noro</span>
            <span className="dark:text-mine text-mine2">gia</span>
          </h1>
          <ul className="flex flex-col text-2xl text-white justify-center items-center whitespace-nowrap space-y-2 ">
            <Link href="/">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className=" transition duration-500 ease-in-out hover:text-mine2">
                  About
                </li>
              </a>
            </Link>

            <li className=" transition duration-500 ease-in-out hover:text-mine">
              Contact Me:
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center pt-2">
            <div className="flex space-x-5 pb-4 pt-2   ">
              <FaDiscord className="transition duration-500 ease-in-out hover:text-mine cursor-pointer w-8 h-8 " />
              <FaTwitter className="transition duration-500 ease-in-out hover:text-mine2 cursor-pointer w-8 h-8 " />
              <Theme />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center pt-10 pb-1 ">
        <Image
          src={"/Spotify_Logo_RGB_Green.png"}
          width={260}
          height={80}
          color={"#1DB954"}
        />
        <Image
          src={
            "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          }
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-xs lg:text-sm text-gray-500 lg:pl-6 pt-16 pb-2">
          © 2020-{year} <span className="dark:text-mine text-mine2"> Aku</span>
          <span className="dark:text-mine2 text-mine">noro</span>
          <span className="dark:text-mine text-mine2">gia</span>. All Rights
          Reserved.
        </h1>
      </div>
    </div>
  );
};

export default FooterITems;
