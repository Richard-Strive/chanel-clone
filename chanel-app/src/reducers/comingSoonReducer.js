export default function (state = {}, action) {
  switch (action.type) {
    case "COMING_SOON":
      return action.payload;
    default:
      return state;
  }
}
