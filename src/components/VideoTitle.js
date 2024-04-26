import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video p-[20%] px-16 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl mb-3 text-white">{title}</h1>
      <p className="text-sm w-1/2 mb-4 text-white">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black font-bold px-8 py-2 text-lg  rounded-md hover:bg-opacity-50">
          <span className="mr-3">
            <FontAwesomeIcon icon={faPlay} />
          </span>
          Play
        </button>
        <button className="bg-gray-500 text-white font-bold px-8 py-2 text-lg  rounded-md">
          <span className="mr-3">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
