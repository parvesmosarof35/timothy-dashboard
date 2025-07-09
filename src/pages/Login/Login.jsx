import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import GoogleLoginButton from "../../components/GoogleLoginButton";
import signInIMG from "../../assets/sign-in-image.png";
import { Facebook } from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import FBLogo from "../../assets/facebook-logo.png";
import GoogleLogo from "../../assets/Google-logo.png";

const Login = () => {
  const { signIn, signInGoogle, signInFacebook, user, ForgotPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  const handleForgotPassword = () => {
    ForgotPassword(emailRef);
    navigate("/forgotpass");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);

    if (provider === "Google") {
      signInGoogle()
        .then((result) => {
          console.log("Google login successful:", result.user);
        })
        .catch((error) => {
          console.error("Google login error:", error);
        });
    }

    if (provider === "Facebook") {
      signInFacebook()
        .then((result) => {
          console.log("Facebook login successful:", result.user);
        })
        .catch((error) => {
          console.error("Facebook login error:", error);
        });
    }
  };

  return (
    <div className="relative">
      <img
        src={signInIMG}
        className="absolute w-[50rem] h-[50rem] top-0 right-0"
        alt="sign-in-image"
      />
      <div className="absolute left-0 min-h-screen flex items-center container mx-auto">
        <div className="bg-white mt-[1rem] ml-[15rem] p-8 py-20 rounded-2xl  w-full max-w-md min-h-[40rem] flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#ff9000]">Welcome Back</h2>
          <p className="text-lg font-semibold mb-8 text-gray-600 mt-2">
            Enter your email and password to sign in
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                ref={emailRef}
                placeholder="Your email address"
                className="mt-1 w-full px-4 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Your password"
                className="mt-1 w-full px-4 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex justify-between items-center my-5 mt-8 text-sm">
                <label className="flex items-center cursor-pointer">
                  {/* Toggle Switch */}
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-4 bg-gray-300 rounded-full peer-checked:bg-orange-500 transition" />
                    <div className="absolute w-6 h-6 bg-white rounded-full -top-1 left-0 peer-checked:translate-x-full transition shadow" />
                  </div>
                  <span className="ml-3">Remember me</span>
                </label>
                <span
                  onClick={handleForgotPassword}
                  className="cursor-pointer hover:underline hidden"
                >
                  Forgot password?
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff9000] hover:bg-orange-500 text-white font-semibold py-4 rounded-2xl transition"
            >
              Sign In
            </button>
          </form>

          {error && (
            <p className="text-red-600 text-center text-sm mt-3">{error}</p>
          )}

          <p className="text-lg font-semibold text-gray-400 text-center mt-4 mb-3 ">
            Do not have an account?{" "}
            <Link
              to="/register"
              className="text-[#ff9000] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

          {/* OR Divider */}
          <div className="text-center">
            <span className="text-gray-400 text-sm mt-2 font-bold">or</span>
          </div>

          {/* Social Login Section */}
          <div className="bg-white rounded-lg   mb-6 ">
            <p className="text-center text-sm text-gray-600 mb-4">Login with</p>
            <div className="flex justify-center gap-4">
              <div className="border p-7 rounded-2xl cursor-pointer hover:bg-gray-50">
                <img
                  className="w-10 h-10 flex items-center justify-center  transition-colors"
                  onClick={() => handleSocialLogin("Facebook")}
                  src={FBLogo}
                  alt="FBLogo"
                />
              </div>

              <div className="border p-7 rounded-2xl cursor-pointer hover:bg-gray-50">
                <img
                  className="w-10 h-10 flex items-center justify-center  transition-colors"
                  onClick={() => handleSocialLogin("Google")}
                  src={GoogleLogo}
                  alt="GoogleLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
