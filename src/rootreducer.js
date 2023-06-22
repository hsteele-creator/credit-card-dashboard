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
    case "UPDATE_USER":
      return {
        Data: {
          ...Data,
          currentUser: action.payload.name,
        },
      };
    case "ADD_CARD":
      const updatedCards = [
        ...state.Data[action.payload.name].cards,
        action.payload.data,
      ];
      const currentUser = action.payload.name;
      return {
        ...state,
        Data: {
          ...Data,
          [currentUser]: {
            ...Data[currentUser],
            cards: updatedCards,
          },
        },
      };
  }
  return state;
};

export default rootReducer;
