import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";
import "yup-phone";
import "react-phone-input-2/lib/style.css";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import * as Yup from "yup";

import { useSignup } from "../auth/SignupContext";

const countryCodes = [
  { code: "+355", country: "      Albania" },
  { code: "+376", country: "Andorra" },
  { code: "+244", country: "Angola" },
  { code: "+54", country: "Argentina" },
  { code: "+374", country: "Armenia" },
  { code: "+61", country: "Australia" },
  { code: "+43", country: "Austria" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+973", country: "Bahrain" },
  { code: "+880", country: "Bangladesh" },
  { code: "+375", country: "Belarus" },
  { code: "+32", country: "Belgium" },
  { code: "+501", country: "Belize" },
  { code: "+229", country: "Benin" },
  { code: "+975", country: "Bhutan" },
  { code: "+591", country: "Bolivia" },
  { code: "+387", country: "Bosnia and Herzegovina" },
  { code: "+267", country: "Botswana" },
  { code: "+55", country: "Brazil" },
  { code: "+673", country: "Brunei" },
  { code: "+359", country: "Bulgaria" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+257", country: "Burundi" },
  { code: "+855", country: "Cambodia" },
  { code: "+237", country: "Cameroon" },
  { code: "+1", country: "Canada" },
  { code: "+238", country: "Cape Verde" },
  { code: "+236", country: "Central African Republic" },
  { code: "+235", country: "Chad" },
  { code: "+56", country: "Chile" },
  { code: "+86", country: "China" },
  { code: "+57", country: "Colombia" },
  { code: "+269", country: "Comoros" },
  { code: "+243", country: "Congo, Democratic Republic of the" },
  { code: "+242", country: "Congo, Republic of the" },
  { code: "+506", country: "Costa Rica" },
  { code: "+385", country: "Croatia" },
  { code: "+53", country: "Cuba" },
  { code: "+357", country: "Cyprus" },
  { code: "+420", country: "Czech Republic" },
  { code: "+45", country: "Denmark" },
  { code: "+253", country: "Djibouti" },
  { code: "+1 767", country: "Dominica" },
  { code: "+1 809", country: "Dominican Republic" },
  { code: "+670", country: "East Timor" },
  { code: "+593", country: "Ecuador" },
  { code: "+20", country: "Egypt" },
  { code: "+503", country: "El Salvador" },
  { code: "+240", country: "Equatorial Guinea" },
  { code: "+291", country: "Eritrea" },
  { code: "+372", country: "Estonia" },
  { code: "+251", country: "Ethiopia" },
  { code: "+500", country: "Falkland Islands" },
  { code: "+298", country: "Faroe Islands" },
  { code: "+679", country: "Fiji" },
  { code: "+358", country: "Finland" },
  { code: "+33", country: "France" },
  { code: "+594", country: "French Guiana" },
  { code: "+689", country: "French Polynesia" },
  { code: "+241", country: "Gabon" },
  { code: "+220", country: "Gambia" },
  { code: "+995", country: "Georgia" },
  { code: "+49", country: "Germany" },
  { code: "+233", country: "Ghana" },
  { code: "+350", country: "Gibraltar" },
  { code: "+30", country: "Greece" },
  { code: "+299", country: "Greenland" },
  { code: "+1 473", country: "Grenada" },
  { code: "+590", country: "Guadeloupe" },
  { code: "+1 671", country: "Guam" },
  { code: "+502", country: "Guatemala" },
  { code: "+224", country: "Guinea" },
  { code: "+245", country: "Guinea-Bissau" },
  { code: "+592", country: "Guyana" },
  { code: "+509", country: "Haiti" },
  { code: "+504", country: "Honduras" },
  { code: "+852", country: "Hong Kong" },
  { code: "+36", country: "Hungary" },
  { code: "+354", country: "Iceland" },
  { code: "+91", country: "India" },
  { code: "+62", country: "Indonesia" },
  { code: "+98", country: "Iran" },
  { code: "+964", country: "Iraq" },
  { code: "+353", country: "Ireland" },
  { code: "+972", country: "Israel" },
  { code: "+39", country: "Italy" },
  { code: "+1 876", country: "Jamaica" },
  { code: "+81", country: "Japan" },
  { code: "+962", country: "Jordan" },
  { code: "+7", country: "Kazakhstan" },
  { code: "+254", country: "Kenya" },
  { code: "+686", country: "Kiribati" },
  { code: "+850", country: "North Korea" },
  { code: "+82", country: "South Korea" },
  { code: "+965", country: "Kuwait" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+856", country: "Laos" },
  { code: "+371", country: "Latvia" },
  { code: "+961", country: "Lebanon" },
  { code: "+266", country: "Lesotho" },
  { code: "+231", country: "Liberia" },
  { code: "+218", country: "Libya" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+370", country: "Lithuania" },
  { code: "+352", country: "Luxembourg" },
  { code: "+853", country: "Macau" },
  { code: "+389", country: "North Macedonia" },
  { code: "+261", country: "Madagascar" },
  { code: "+265", country: "Malawi" },
  { code: "+60", country: "Malaysia" },
  { code: "+960", country: "Maldives" },
  { code: "+223", country: "Mali" },
  { code: "+356", country: "Malta" },
  { code: "+692", country: "Marshall Islands" },
  { code: "+596", country: "Martinique" },
  { code: "+222", country: "Mauritania" },
  { code: "+230", country: "Mauritius" },
  { code: "+52", country: "Mexico" },
  { code: "+691", country: "Micronesia" },
  { code: "+373", country: "Moldova" },
  { code: "+377", country: "Monaco" },
  { code: "+976", country: "Mongolia" },
  { code: "+382", country: "Montenegro" },
  { code: "+212", country: "Morocco" },
  { code: "+258", country: "Mozambique" },
  { code: "+95", country: "Myanmar" },
  { code: "+264", country: "Namibia" },
  { code: "+674", country: "Nauru" },
  { code: "+977", country: "Nepal" },
  { code: "+31", country: "Netherlands" },
  { code: "+599", country: "Netherlands Antilles" },
  { code: "+687", country: "New Caledonia" },
  { code: "+64", country: "New Zealand" },
  { code: "+505", country: "Nicaragua" },
  { code: "+227", country: "Niger" },
  { code: "+234", country: "Nigeria" },
  { code: "+683", country: "Niue" },
  { code: "+1 670", country: "Northern Mariana Islands" },
  { code: "+47", country: "Norway" },
  { code: "+968", country: "Oman" },
  { code: "+92", country: "Pakistan" },
  { code: "+680", country: "Palau" },
  { code: "+970", country: "Palestine" },
  { code: "+507", country: "Panama" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" },
  { code: "+63", country: "Philippines" },
  { code: "+48", country: "Poland" },
  { code: "+351", country: "Portugal" },
  { code: "+1 787", country: "Puerto Rico" },
  { code: "+974", country: "Qatar" },
  { code: "+242", country: "Republic of the Congo" },
  { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia" },
  { code: "+250", country: "Rwanda" },
  { code: "+590", country: "Saint Barthelemy" },
  { code: "+290", country: "Saint Helena" },
  { code: "+1 869", country: "Saint Kitts and Nevis" },
  { code: "+1 758", country: "Saint Lucia" },
  { code: "+590", country: "Saint Martin" },
  { code: "+508", country: "Saint Pierre and Miquelon" },
  { code: "+1 784", country: "Saint Vincent and the Grenadines" },
  { code: "+685", country: "Samoa" },
  { code: "+378", country: "San Marino" },
  { code: "+239", country: "Sao Tome and Principe" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+221", country: "Senegal" },
  { code: "+381", country: "Serbia" },
  { code: "+248", country: "Seychelles" },
  { code: "+232", country: "Sierra Leone" },
  { code: "+65", country: "Singapore" },
  { code: "+421", country: "Slovakia" },
  { code: "+386", country: "Slovenia" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+252", country: "Somalia" },
  { code: "+27", country: "South Africa" },
  { code: "+34", country: "Spain" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+249", country: "Sudan" },
  { code: "+597", country: "Suriname" },
  { code: "+47", country: "Svalbard and Jan Mayen" },
  { code: "+268", country: "Swaziland" },
  { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" },
  { code: "+963", country: "Syria" },
  { code: "+886", country: "Taiwan" },
  { code: "+992", country: "Tajikistan" },
  { code: "+255", country: "Tanzania" },
  { code: "+66", country: "Thailand" },
  { code: "+228", country: "Togo" },
  { code: "+690", country: "Tokelau" },
  { code: "+676", country: "Tonga" },
  { code: "+1 868", country: "Trinidad and Tobago" },
  { code: "+216", country: "Tunisia" },
  { code: "+90", country: "Turkey" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+688", country: "Tuvalu" },
  { code: "+256", country: "Uganda" },
  { code: "+380", country: "Ukraine" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+44", country: "United Kingdom" },
  { code: "+1", country: "United States" },
  { code: "+598", country: "Uruguay" },
  { code: "+998", country: "Uzbekistan" },
  { code: "+678", country: "Vanuatu" },
  { code: "+379", country: "Vatican City" },
  { code: "+58", country: "Venezuela" },
  { code: "+84", country: "Vietnam" },
  { code: "+681", country: "Wallis and Futuna" },
  { code: "+967", country: "Yemen" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
];

const countryCodesList = countryCodes.map((country) => country.code);

const SignupTwo = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useSignup();

  const formik = useFormik({
    initialValues: {
      fullName: signupData.fullName,
      gender: signupData.gender,
      dialcode: signupData.dialcode,
      phoneNumber: signupData.phoneNumber,
      birthday: signupData.birthday,
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Full name is required"),
      gender: Yup.string().required("Gender is required"),
      dialcode: Yup.string().required("Dial code is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      birthday: Yup.date(),
    }),
    onSubmit: (values) => {
      setSignupData({ ...signupData, ...values });
      navigate("/register/step3");
    },
  });

  const handleDialcodeChange = (e) => {
    const newDialcode = e.target.value;
    const { phoneNumber } = formik.values;
    formik.setFieldValue("dialcode", newDialcode);
    formik.setFieldValue(
      "phoneNumber",
      phoneNumber.replace(/^(\+[\d\s]*)/, newDialcode)
    );
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    const { dialcode } = formik.values;
    formik.setFieldValue(
      "phoneNumber",
      value.startsWith(dialcode) ? value : `${dialcode}${value}`
    );
  };

  const handleClose = () => {
    navigate("/register/step1");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 m-0">
      <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-sm max-h-130">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-lg font-bold">Personal information</h2>
          <p className="text-green-500 font-bold text-sm pt-1">2 of 3</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-6 font-medium text-sm  border rounded-md text-gray-950 h-10"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="fullName"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="absolute text-xs text-red-500">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          <div className="mb-4 flex items-center gap-3">
            <label className="block">Gender:</label>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formik.values.gender === "Male"}
                  onChange={formik.handleChange}
                  className="appearance-none
                  w-4 h-4   bg-red-100 rounded-full 
                  
                  focus:outline-none focus:ring-offset-0 
                  focus:ring-4 focus:ring-blue-400 focus:bg-white focus:h-2 focus:w-2 focus:m-1
                   disabled:border-gray-400  "
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formik.values.gender === "Female"}
                  onChange={formik.handleChange}
                  className="appearance-none
                    w-4 h-4   bg-red-100 rounded-full 
                    focus:outline-none focus:ring-offset-0 
                    focus:ring-4 focus:ring-blue-400 focus:bg-white focus:h-2 focus:w-2 focus:m-1
                     disabled:border-gray-400  "
                />
                <span>Female</span>
              </label>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <p className="text-xs text-red-500">{formik.errors.gender}</p>
            )}
          </div>
          <div className="flex gap-2 mb-2 font-bold">
            <RiInformationLine className=" " />
            <p className="text-xs text-gray-600    mb-2  text-start">
              The phone number and birthday are only visible to you
            </p>
          </div>

          <div className="relative mb-8 flex gap-2">
            <div className="flex gap-4 ">
              <div>
                <select
                  className="  border border-zinc-300  p-2 rounded-md w-20 h-12 text-sm  text-gray-950  pl-4  "
                  name="dialcode"
                  id="dialcode"
                  onChange={handleDialcodeChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.dialcode}
                  value={countryCodes.code}
                >
                  {countryCodes.map((country, index) => (
                    <option
                      key={index}
                      value={country.code}
                      className="flex gap-8 "
                    >
                      {country.code} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {country.country}
                    </option>
                  ))}
                  {formik.touched.dialcode && formik.errors.da && (
                    <p className="absolute top-14 text-xs text-red-500">
                      {formik.errors.phoneNumber}
                    </p>
                  )}
                </select>
              </div>

              <div>
                <input
                  className="  border border-zinc-300 appearance-nonet p-2 font-medium text-sm rounded-md w-60 h-12  flex gap-6"
                  placeholder="Phone number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={handlePhoneNumberChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className="absolute top-14 text-xs text-red-500">
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-2 relative">
            <input
              type="date"
              className="w-full p-6 border     rounded-md font-medium text-sm   text-gray-950 h-10  border-zinc-300  "
              value={formik.values.birthday}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="birthday"
            />
            {/* <FaCalendarAlt className=" " /> */}
          </div>
          <p className="text-xs text-gray-500 mt-2 mb-8 text-start">
            Let us know about your birthday so as not to miss a gift
          </p>
          <button
            type="submit"
            className="w-full h-10 bg-purple-600 text-white p-2 rounded-md  "
            // disabled={formik.isSubmitting}
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

export default SignupTwo;
