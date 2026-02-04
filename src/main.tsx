import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";

// import { HooksApp } from "./HooksApp.tsx";
// import { TrafficLight } from "./01-useState/TrafficLight.tsx";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightwithEffect.tsx";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightwithHook.tsx";
// import { PokemonPage } from "./03-examples/PokemonPage.tsx";
// import { FocusScreen } from "./04-useRef/FocusScreen.tsx";
// import { TasksApp } from "./05-useReducer/TaskApp.tsx";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords.tsx";
// import { MemoHook } from "./06-memos/MemoHook.tsx";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { ClientInformation } from "./08-use-suspense/ClientInformation";

import "./index.css";
import { getUserAction } from "./08-use-suspense/api/get-user.action";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}

    {/* Suspense permite desplegar contenido hasta que los hijos muestren algo */}
    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>,
);
