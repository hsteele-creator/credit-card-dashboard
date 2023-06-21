export const updateCurrentCard = (index) => {
  return { type: "UPDATE_CARD", payload: { card: index } };
};

export const updateCurrentUser = (name) => {
  return {type : "UPDATE_USER", payload : {name}}
}
