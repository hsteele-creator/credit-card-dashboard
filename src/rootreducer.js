import { Data } from "./Data";
const INITIAL_STATE = { Data };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_CARD":
      return {
        Data: {
          ...Data,
          currentCard: action.payload.card,
        },
      };
  }
  return state;
};

export default rootReducer;
