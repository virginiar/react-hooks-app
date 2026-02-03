import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from "./HooksApp.tsx";
// import { TrafficLight } from "./01-useState/TrafficLight.tsx";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightwithEffect.tsx";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightwithHook.tsx";
// import { PokemonPage } from "./03-examples/PokemonPage.tsx";
// import { FocusScreen } from "./04-useRef/FocusScreen.tsx";
// import { TasksApp } from "./05-useReducer/TaskApp.tsx";
import { ScrambleWords } from "./05-useReducer/ScrambleWords.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
);
