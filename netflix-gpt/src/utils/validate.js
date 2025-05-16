 export const checkValidData =(email ,password,fname) => {
    const fnamevalid =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fname);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid)
    {
        return "Email is not valid";
    }
    if(!ispasswordValid)
    {
        return "Password should be minimum 8 characters, at least one letter and one number";
    }
     if(!fnamevalid)
    {
        return "name added is not valid";
    }
    return null

 }
 