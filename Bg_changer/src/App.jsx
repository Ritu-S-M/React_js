import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState("bg-[#F5F5DC]");

  return (
    <>
      <div className={`w-screen h-screen  relative duration-500 ${darkMode}`}  >
        <div className="absolute right-0 top-0 m-4 flex space-x-2" >
          <button className={` rounded-full w-7 h-7
            ${(darkMode === "bg-[#2E2E2E]")?"invert" :""
          }`} onClick={()=>setDarkMode("bg-[#2E2E2E]")}>
            <img src="/night-mode.png" alt="night-mode"
            />
          </button>
          <button className=" w-7 h-7" onClick={()=>setDarkMode("bg-sky-400")}>
            <img src="/day-mode.png" alt="night-mode"
            />
          </button>
          <button className={`w-7 h-7  ${(darkMode === "bg-[#2E2E2E]")?"invert" :""}`}  onClick={()=>setDarkMode("bg-gradient-to-r from-pink-400 to-yellow-400")}>
            {/* Here for the gradient colour we could have used normal css linear-gradient(to right, #ff9a9e, #fad0c4)
            But this isn't elligible to apply any smooth tansitions.So converting all the other colours also 
            to tailwind css.
            Eg: in css the color "#2E2E2E" the same in tailwind css "bg-[#2E2E2E]" */}
            <img src="/unique-appearance.png" alt="night-mode"
            />
          </button>
          <button className={`w-7 h-7  ${(darkMode === "bg-[#2E2E2E]")?"invert" :""}`} onClick={()=>setDarkMode("bg-gray-600")}>
            <img src="/moon.png" alt="night-mode"
            />
          </button>
          <button className={`w-7 h-7  ${(darkMode === "bg-[#2E2E2E]")?"invert" :""}`} onClick={()=>setDarkMode("bg-[#F5F5DC]")}>
            <img src="/setting.png" alt="night-mode"
            />
          </button>
        </div>

      </div>
    </>
  );
}

export default App;

