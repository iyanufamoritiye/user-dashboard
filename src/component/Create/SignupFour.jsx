import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSignup } from "../auth/SignupContext";
import { FaTimes } from "react-icons/fa";

const SignupFour = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData, completeSignup } = useSignup();

  const validationSchema = Yup.object().shape({
    address: Yup.object().shape({
      street: Yup.string().required("Street is required"),
      apartment: Yup.string(),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zip: Yup.string().required("Zip is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      address: {
        street: signupData.address.street,
        number: signupData.address.number,
        city: signupData.address.city,
        state: signupData.address.state,
        zip: signupData.address.zip,
      },
    },
    validationSchema,
    onSubmit: async (values) => {
      setSignupData({ ...signupData, ...values });

      await completeSignup();

      navigate("/register/step5");
    },
  });
  const handleClose = () => {
    navigate("/register/step3");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 m-0">
      <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-sm max-h-130">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-lg font-bold">Add address</h2>
          <p className="text-green-500 font-bold text-sm pt-1">3 of 3</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="relative mb-8">
            <label
              htmlFor="street"
              className="absolute left-3 text-xs bottom-7 text-gray-500"
            >
              Street address
            </label>
            <input
              type="text"
              id="street"
              placeholder="319 Bainbridge Street"
              name="address.street"
              value={formik.values.address.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 pt-7 pb-4 border   w-64 rounded-md   h-10"
            />
            {formik.touched.address?.street &&
              formik.errors.address?.street && (
                <p className="absolute top-12 text-xs text-red-500">
                  {formik.errors.address?.street}
                </p>
              )}
          </div>
          <div className="relative mb-8 ">
            <input
              type="numberic"
              placeholder="Apartment"
              id="number"
              name="address.number"
              value={formik.values.address.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3    pb-4 border w-64 rounded-md text-gray-950 h-12"
            />
            <label
              htmlFor="apartment"
              className="absolute  text-gray-400  right-6 top-3"
            >
              Optional
            </label>
            {formik.touched.address?.number &&
              formik.errors.address?.number && (
                <p className="absolute top-12 text-xs text-red-500">
                  {formik.errors.address?.number}
                </p>
              )}
          </div>

          <div className=" relative mb-8">
            <label
              htmlFor="city"
              className="absolute left-3 text-xs bottom-7 text-gray-500"
            >
              City
            </label>
            <input
              placeholder="New York City"
              type="text"
              id="city"
              name="address.city"
              value={formik.values.address.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 pt-7 pb-4 border   w-64 rounded-md   h-10"
            />
            {formik.touched.address?.city && formik.errors.address?.city && (
              <p className="absolute top-12 text-xs text-red-500">
                {formik.errors.address?.city}
              </p>
            )}
          </div>
          <div className="flex relative mb-8  gap-2">
            <div className="flex gap-2  relative">
              <label
                htmlFor="state"
                className="absolute left-3 text-xs bottom-7 text-gray-500"
              >
                State
              </label>
              <input
                type="text"
                placeholder="New York"
                id="state"
                name="address.state"
                value={formik.values.address.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 pt-7 pb-4 border   w-64 rounded-md   h-10"
              />
              {formik.touched.address?.state &&
                formik.errors.address?.state && (
                  <p className="absolute top-12 text-xs text-red-500">
                    {formik.errors.address?.state}
                  </p>
                )}
            </div>

            <div className="flex gap-2  relative">
              <label
                htmlFor="zip"
                className="absolute left-3 text-xs bottom-7 text-gray-500"
              >
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="11233"
                id="zip"
                name="address.zip"
                value={formik.values.address.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 pt-7 pb-4 border   w-64 rounded-md   h-10"
              />
              {formik.touched.address?.zip && formik.errors.address?.zip && (
                <p className="absolute top-12 text-xs text-red-500">
                  {formik.errors.address?.zip}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-purple-600 text-white p-2 rounded-md mt-4  "
          >
            {formik.isSubmitting ? "Loading..." : " Save Information"}
          </button>
        </form>

        <button onClick={handleClose} className="text-gray-400 border-none">
          <FaTimes className="absolute right-6 top-7 w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SignupFour;
