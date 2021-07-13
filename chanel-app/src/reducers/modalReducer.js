export default function (state = {}, action) {
  switch (action.type) {
    case "MODAL":
      return action.payload;
    default:
      return state;
  }
}
