import React, { useContext, useState } from 'react';
import { Facebook, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordError, setPasswordError] = useState('');

    const {
    user,
    signInGoogle,
    signInFacebook
  } = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordError("Password must be at least 6 characters long, must include at least one Uppercase and Lowercase");
      return;
    } else {
      setPasswordError("");
    }

    // Add your registration logic here
    console.log('Registration attempt:', { name, email, password, rememberMe });
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


  console.log(user);
  return (
    <div className="min-h-screen mb-32 bg-white relative">
      {/* Top Orange Section */}
      <div className=" relative overflow-hidden py-40">
        <img src="https://i.ibb.co/XxTSZFzf/SignUp.png" alt="signupimg"  className='absolute h-full top-0 w-full px-6 py-6'/>
        
        <div className="text-center relative z-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-sans">Welcome!</h1>
          <p className="text-gray-600 text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur<br />
            adipiscing elit sed do eiusmod tempor
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="px-12 py-8 w-[29rem] border rounded-2xl absolute top-72 left-1/2 -translate-x-1/2 bg-white">
        {/* Social Login Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <p className="text-center text-sm text-gray-600 mb-4">Register with</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => handleSocialLogin('Facebook')}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook size={18} className="text-white" />
            </button>
          
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <span className="text-white font-bold text-sm">G</span>
            </button>
          </div>
        </div>

        {/* OR Divider */}
        <div className="text-center mb-6">
          <span className="text-gray-400 text-sm">or</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              required
            />
            {passwordError && (
              <p className="text-red-600 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          {/* Remember Me Toggle */}
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-[2.6rem] h-5 rounded-full transition-colors ${
                  rememberMe ? 'bg-orange-500' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    rememberMe ? 'translate-x-5' : 'translate-x-1'
                  } mt-1`}></div>
                </div>
              </div>
              <span className="ml-3 text-sm text-gray-700">Remember me</span>
            </label>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Register
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
        <Link to={`/login`}>
          <span className="text-orange-500 font-medium hover:underline cursor-pointer">
            Sign in
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;