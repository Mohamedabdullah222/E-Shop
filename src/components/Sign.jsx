import React from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { sin } from "../assets";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { Field, Form, Formik } from "formik";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Sign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (values, { setSubmitting }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      dispatch(
        setUser({
          __id: user.uid,
          userName: user.displayName,
          email: user.email,
        })
      );

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      let errorMessage = "Something went wrong!";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "This email is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is not valid.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/weak-password":
          errorMessage =
            "The password is too weak. It should be at least 6 characters.";
          break;
        case "auth/missing-email":
          errorMessage = "Please enter your email.";
          break;
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden lg:inline-block">
        <img className="ml-4 h-full rounded-lg mt-12" src={sin} alt="leftSideImage" />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form className="md:w-96 w-80 flex flex-col items-center justify-center">
              <Link to="/">
                <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
              </Link>
              <p className="text-sm text-gray-500/90 mt-3">
                Welcome back! Please sign in to continue
              </p>


              <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-3">
                <MdOutlineMail />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email id"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <IoEyeOffOutline />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                <div className="flex items-center gap-2">
                  <input className="h-5" type="checkbox" id="checkbox" />
                  <label className="text-sm" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot" className="text-sm underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Logining... <FaSignOutAlt className="animate-spin" />
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <p className="text-gray-500/90 text-sm mt-4">
                Don’t have an account?
                <Link
                  to="/register"
                  className="text-indigo-400 hover:underline ml-1"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-gray-500/90 text-sm mt-4">
                Back to
                <Link to="/" className="text-indigo-400 hover:underline ml-1">
                  Home Page
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sign;
