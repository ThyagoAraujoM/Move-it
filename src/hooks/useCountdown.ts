import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";

export function useCountdown() {
  const value = useContext(CountdownContext);

  return value;
}
