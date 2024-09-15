import users from "./users";

export const doseUserExist = (Username = "") => {
    let doseUserExist = false;
    if (users.Username == Username) {
        doseUserExist = true;
        return;
    }
    return doseUserExist;
};
export default doseUserExist;
