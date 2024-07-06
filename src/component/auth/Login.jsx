import React, { useState } from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import Apple from "../images/Apple.png";
import Facebook from "../images/Facebook.png";
import Google from "../images/Google.png";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    rememberMe: localStorage.getItem("rememberMe") === "true",
    showPassword: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      setErrorMessage(" ");
      await signInWithEmailAndPassword(auth, values.email, values.password);
      if (values.rememberMe) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        localStorage.setItem("rememberMe", values.rememberMe);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
      console.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue("showPassword", !formik.values.showPassword);
  };
  const handleClose = () => {
    // Handle close action, for example, navigate to the home page or another route
    navigate("/register/step1");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 md:p-8">
      <div className=" relative  bg-white p-6 rounded-lg shadow-md w-full max-w-sm max-h-130  ">
        <div className="flex justify-start mb-8 gap-x-2.5  mt-2">
          <Link to="/register/step1" className="text-gray-600">
            Register
          </Link>
          <button className="text-gray-950 border-b-2 border-pink-600 pb-2">
            Log in
          </button>
        </div>

        <div className="flex justify-start space-x-4 mb-6 mt-4">
          <img src={Apple} alt="Apple img" className="h-10 md:h-12" />
          <img src={Facebook} alt="Facebook img" className="h-10 md:h-12" />
          <img src={Google} alt="Google img" className="h-10 md:h-12" />
        </div>
        <p className="text-start text-gray-400 text-xs mb-8">
          or login with email
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-8 relative">
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 pt-7 pb-4 border w-64 rounded-md text-gray-950 h-10"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className=" absolute bottom-12 text-xs text-red-500">
                {formik.errors.email}
              </p>
            )}
            <label className="absolute left-3 text-xs bottom-7 text-gray-500">
              Email address
            </label>
          </div>
          <div className="mb-8 relative">
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
            {formik.touched.password && formik.errors.password && (
              <p className="absolute bottom-12  text-xs text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white mt-2 p-2 rounded-md "
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Loading..." : " Login to Dashboard "}
          </button>
        </form>
        <div className="flex items-center mt-4 mb-8">
          <input
            type="checkbox"
            name="rememberMe"
            className="mr-2 bg-red-400"
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          <label>Remember me</label>
        </div>
        <button onClick={handleClose} className="text-gray-400 border-none">
          <FaTimes className="absolute right-6 top-7  w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Login;
