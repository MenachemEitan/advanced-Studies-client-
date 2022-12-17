const TOKEN = "Token";

const UserData = "personObject";

export const storeToken = (token) => localStorage.setItem(TOKEN, token);
export const storeUserData = (userData) => {
  var personObject = userData;
  localStorage.setItem(UserData, JSON.stringify(personObject));
};

export const forLogout = () => {
  let items = [TOKEN, UserData];
  items.forEach((i) => localStorage.removeItem(i));
  window.location.reload();
};
export const getToken = () => localStorage.getItem(TOKEN);

export const getUserData = () => {
  var jsonString = localStorage.getItem("personObject");
  var retrievedObject = JSON.parse(jsonString);
  return retrievedObject;
};

export const isLoggedIn = () => {
  return getToken() ? true : false;
};
