const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   //.genSalt generates the password salt for us (meaning it adds in random values into the hash'd password)
//   //(12) is how many rounds it gets salt'd
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt); //hash takes in a plain-text password and the salt
//   console.log(salt);
//   console.log(hash);
// };

//better way to do this and exactly like in class
const hashPassword = async (pw) => {
  //.genSalt generates the password salt for us (meaning it adds in random values into the hash'd password)
  //(12) is how many rounds it gets salt'd
  const hash = await bcrypt.hash(pw, 12); //hash takes in a plain-text password and the salt
  console.log(hash);
};

//node index.js to see this. You can run this multiple times and notice that the salt and has are different every time
// hashPassword("monkey");

//after we have a password saved and hashed, how do we compare? WITH THIS
const login = async (pw, hashedPw) => {
  //.compare expect a plain-text password and a hashedPassword
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("logged in succesfully");
  } else {
    console.log("incorrect");
  }
};

login("monkey", "$2b$12$PO5v8DYMLrQkL9QcgHTKd.k6jhvY4T6SnMjWRhRbmeW0nKXBvyx2e");

//we really only need hashPassword and login functions for passwords
//we just need to have a hash'd password and then compare it! simple!
