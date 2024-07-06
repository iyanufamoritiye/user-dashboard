import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { auth, db } from "../../firebaseConfig";

const SignupContext = createContext();
export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    // address: {
    //   street: "",
    //   number: "",
    //   city: "",
    //   state: "",
    //   zip: "",
    // },
    email: "",
    password: "",
    fullName: "",
    gender: "",
    dialcode: " +234",
    phoneNumber: "",
    birthday: "",
    address: "",
  });

  const completeSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: signupData.fullName,
        gender: signupData.gender,
        dialcode: signupData.dialcode,
        phoneNumber: signupData.phoneNumber,
        birthday: signupData.birthday,
        address: signupData.address,
      });
    } catch (error) {
      console.error("Error completing signup:", error);
      throw error;
    }
  };

  return (
    <SignupContext.Provider
      value={{ signupData, setSignupData, completeSignup }}
    >
      {children}
    </SignupContext.Provider>
  );
};
