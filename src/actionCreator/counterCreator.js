// function mapDispatchToProps(dispatch) {
//     return {
//         increase: () => dispatch({ type: "INCREASE" }),
//         decrease: () => dispatch({ type: "DECREASE" })

//     }
// }

export function increase() {
  return function (dispatch) {
    dispatch({ type: "INCREASE" });
  };
}
export function decrease() {
  return function (dispatch) {
    dispatch({ type: "DECREASE" });
  };
}
