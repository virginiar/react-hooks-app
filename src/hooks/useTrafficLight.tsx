import { useState, useEffect } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  // useState: hook de estado que renderiza los cambios
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // useEffect: hook con efectos secundarios
  // Los efectos deben ser atómicos

  // Efecto para el countdown
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Función de limpieza para detener el efecto
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Efecto de cambio de color del semáforo
  useEffect(() => {
    if (countdown > 0) return;

    // Error: Calling setState synchonously within an effect can trigger cascading renders
    // https://es.react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    setCountdown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "yellow") {
      setLight("red");
      return;
    }
    if (light === "green") {
      setLight("yellow");
      return;
    }
  }, [countdown, light]);

  return {
    // Properties
    countdown,
    // colors,
    // light,
    // Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    // Methods
  };
};
