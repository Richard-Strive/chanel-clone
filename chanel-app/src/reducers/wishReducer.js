export default function (state = {}, action) {
  switch (action.type) {
    case "WISH":
      return action.payload;
    default:
      return state;
  }
}
