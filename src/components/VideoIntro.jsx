import { Video } from "lucide-react";
import React from "react";

const VideoIntro = () => {
  return (
    <section id="video" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Should You Hire Me?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Watch my 2-minute introduction to learn about my strengths and passion
        </p>
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
          <Video size={80} className="text-gray-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl">
              Video Placeholder - Add your video URL here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
