import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import Apple from "../images/Apple.png";
import Facebook from "../images/Facebook.png";
import Google from "../images/Google.png";
import * as Yup from "yup";
import { useSignup } from "../auth/SignupContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useSignup();

  const formik = useFormik({
    initialValues: {
      email: signupData.email,
      password: signupData.password,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setSignupData({ ...signupData, ...values });
      navigate("/register/step2");
    },
  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue("showPassword", !formik.values.showPassword);
  };
  const handleClose = () => {
    // Handle close action, for example, navigate to the home page or another route
    navigate("/ ");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 overflow-hidden ">
      <div className=" absolute   bg-white p-6 rounded-lg shadow-md w-full max-w-sm max-h-130 ">
        <div className="flex justify-start mb-8 gap-x-2.5 mt-2 ">
          <button className="text-gray-950 border-b-2 border-pink-600   pb-2">
            Register
          </button>
          <Link to="/ " className="text-gray-600">
            Log in
          </Link>
        </div>
        <div className="flex justify-start space-x-4 mb-6 mt-4">
          <img src={Apple} alt="Apple img" className="h-10" />
          <img src={Facebook} alt="Facebook img" className="h-10" />
          <img src={Google} alt="Google img" className="h-10" />
        </div>
        <p className="text-start text-gray-400 text-xs mb-8">
          or register with email
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-8 relative">
            {formik.touched.email && formik.errors.email && (
              <p className=" absolute bottom-12 text-xs text-red-500">
                {formik.errors.email}
              </p>
            )}
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 pt-7 pb-4 border w-64 rounded-md text-gray-950 h-10"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
            <label className="absolute left-3 text-xs bottom-7 text-gray-500">
              Email address
            </label>
          </div>
          <div className="mb-8 relative">
            {formik.touched.password && formik.errors.password && (
              <p className="absolute bottom-12   text-xs text-red-500">
                {formik.errors.password}
              </p>
            )}
            <input
              type={formik.values.showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pt-7 pb-4 border w-64 rounded-md text-gray-950 h-10"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              required
              autoComplete="current-password"
            />
            <label className="absolute left-3 text-xs bottom-7 text-gray-500">
              Password
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500"
            >
              {formik.values.showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white mt-2 p-2 rounded-md"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Loading..." : "Create Account"}
          </button>
        </form>
        <div className="flex items-center mt-4 mb-4">
          <input type="checkbox" className="mr-2 bg-red-400" />
          <label>Send me news and promotions</label>
        </div>
        <p className="text-center text-gray-500 text-xs  ">
          By continuing I agree with the{" "}
          <a href="#" className="text-blue-500">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
        <button onClick={handleClose} className="text-gray-400 border-none">
          <FaTimes className="absolute right-6 top-7  w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Signup;
