import { atom } from "recoil";

// TIMER FLAG
export const timerFlag = atom({
  key: "timerFlag", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
