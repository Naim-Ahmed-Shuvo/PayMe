import { createOvermind } from "overmind";
import { createStateHook, createActionsHook, Provider } from "overmind-react";

const app = createOvermind({
  state: {
    count: 0,
    bg: "#FFFFFFF",
    text_color:''
  },
  actions: {
    increaseCount({ state }) {
      state.count++;
    },
    decreaseCount({ state }) {
      state.count--;
    },
    setBgColor({state},color){
         state.bg = color;
    },
    setTextColor({state},color){
       state.text_color = color
    }
  }
});

export default app;

export const useAppState = createStateHook();
export const useActions = createActionsHook();