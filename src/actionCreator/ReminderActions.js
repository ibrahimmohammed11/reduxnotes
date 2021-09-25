export const addReminder = (text, date) => {
  // كل مره و ال ديسبت و هى جايه بتجيب معاها اخر نسخة لل ستيت
  // function bt3ml return lel action
  const action = { type: "ADDREMINDER", text, date };
  return action;
};

export const removeReminder = (id) => {
  const action = { type: "REMOVEREMINDER", id };
  return action;
};

export const clearReminder = () => {
  const action = { type: "CLEARREMINDER" };
  return action;
};
