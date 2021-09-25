import { bake_cookie, read_cookie } from "sfcookies";

function rootReducer(prevState = [], action) {
  let reminders = null;
  prevState = read_cookie("reminders");
  if (action.type === "ADDREMINDER") {
    reminders = [
      ...prevState,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === "REMOVEREMINDER") {
    //عملت ال فلتر علي ال ستيت كلها عشان هي اللي شايله الداتا كلها
    reminders = prevState.filter((el) => el.id !== action.id);
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === "CLEARREMINDER") {
    reminders = [];
    bake_cookie("reminders", reminders);
    return reminders;
  } else {
    return prevState;
  }
}
export default rootReducer;
