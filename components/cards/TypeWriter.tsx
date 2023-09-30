"use client"
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div>
      <div className="relative flex justify-center items-center xs:h-[20vh] md:h-[25vh] py-8 bg-[#baf0c09a]">
        <h1 className="mr-3 mt-1">The Best Company to call For:</h1>
        <div className="text-black font-bold text-xl flex-shrink-0 w-64">
          <Typewriter
            options={{
              strings: [
                "Custom Decks",
                "Trim/Modling",
                "Office Revenovations",
                "Fences",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}
export default TypeWriter;
