export const updateCurrentCard = (index) => {
  return { type: "UPDATE_CARD", payload: { card: index } };
};
