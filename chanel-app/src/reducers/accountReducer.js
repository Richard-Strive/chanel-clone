export default function (state = {}, action) {
  switch (action.type) {
    case "ACCOUNT":
      return action.payload;
    default:
      return state;
  }
}
