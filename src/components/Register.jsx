import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { sin } from "../assets";
import * as Yup from "yup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";

const RegisterSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();

 const handleRegister = async (values, { setSubmitting, resetForm }) => {
  try {
    const cureentUser = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = cureentUser.user;
    await updateProfile(user, { displayName: values.name });

    resetForm();

    Swal.fire({
      icon: "success",
      title: "Account Created",
      text: "Your account has been created successfully!",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then(() => {
      navigate("/sign");
    });
  } catch (error) {
    let errorMessage = "Something went wrong !";

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email is already in use.";
        break;
      case "auth/invalid-email":
        errorMessage = "The email address is not valid.";
        break;
      case "auth/user-disabled":
        errorMessage = "This user account has been disabled.";
        break;
      case "auth/user-not-found":
        errorMessage = "No account found with this email.";
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
      case "auth/missing-password":
        errorMessage = "Please enter your password.";
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many attempts. Please try again later.";
        break;
      case "auth/network-request-failed":
        errorMessage =
          "Network error. Please check your internet connection.";
        break;
    }

    Swal.fire({
      icon: "error",
      title: "Register Failed",
      text: errorMessage,
    });
  } finally {
    setSubmitting(false);
  }
};


  return (
    <div className="flex h-[700px] w-full ">
      <div className="w-full hidden lg:inline-block">
        <img className="ml-4 h-full rounded-lg mt-12" src={sin} alt="leftSideImage" />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form className="md:w-96 w-80 flex flex-col items-center justify-center">
              <Link to="/">
                {" "}
                <h2 className="text-4xl text-gray-900 font-medium">Register</h2>
              </Link>{" "}
              <p className="text-sm text-gray-500/90 mt-3 mb-5">
                Welcome Please register
              </p>
              <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-2">
                <MdOutlineDriveFileRenameOutline />

                <Field
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                  required
                />
              </div>
              <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <MdOutlineMail />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email id"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                  required
                />
              </div>
              <div className="flex items-center mt-2 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <IoEyeOffOutline />

                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering" : "Register"}
              </button>
              <p className="text-gray-500/90 text-sm mt-4">
                You Have Account?
                <Link
                  to="/sign"
                  className="text-indigo-400 hover:underline ml-1"
                >
                  Sign In
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

export default Register;
