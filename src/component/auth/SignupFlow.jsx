import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignupProvider } from "../auth/SignupContext";
import Signup from "../Create/Signup";
import SignupTwo from "../Create/SignupTwo";
import SignupThree from "../Create/SignupThree";
import SignupFour from "../Create/SignupFour";
 
import SignupSuccess from "../Create/SignupSuccess";

function SignupFlow() {
  return (
    <SignupProvider>
      <Routes>
        <Route path="/step1" element={<Signup />} />
        <Route path="/step2" element={<SignupTwo />} />
        <Route path="/step3" element={<SignupThree />} />
        <Route path="/step4" element={<SignupFour />} />
        <Route path="/step5" element={<SignupSuccess />} />
      </Routes>
    </SignupProvider>
  );
}

export default SignupFlow;
