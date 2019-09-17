export const setNameAction = name => {
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
};
// export function setNameAction(name) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({
//         type: "SET_NAME",
//         payload: name
//       });
//     }, 2000);
//   };
// }
