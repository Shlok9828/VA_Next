"use client"; // This marks the component as a client-side component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13 app directory
import InputField from "../components/common/InputField"; // Adjust path based on folder structure

const GradientImage = ({ src, alt, position }) => (
  <img src={src} alt={alt} className={`absolute ${position} h-1/2 z-0`} />
);

const AuthButton = ({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex justify-center items-center gap-2 rounded p-2 w-1/2 ${className}`}
  >
    {children}
  </button>
);

const StoreButton = ({ icon, line1, line2 }) => (
  <button className="flex items-center bg-black rounded text-white p-2 space-x-2">
    <img src={icon} alt={`${line2} Icon`} className="h-6 w-6" />
    <span className="grid text-left">
      <span className="text-[10px]">{line1}</span>
      <span className="font-bold text-base">{line2}</span>
    </span>
  </button>
);

const Login = () => {
  const router = useRouter(); // Using useRouter from next/navigation for client-side routing
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    router.push("/dashboard"); // Use Next.js router to navigate
  };

  return (
    <div className="flex h-screen relative">
      <GradientImage src="/right-grad.png" alt="Left Gradient" position="left-0 bottom-0" />
      <GradientImage src="/left-grad.png" alt="Right Gradient" position="right-0 bottom-0" />

      <div className="flex-1 flex">
        <img src="/login-bg.png" alt="Daikin" className="h-full w-11/12 mb-3" />
      </div>

      <div className="flex-1 py-10 flex flex-col justify-center bg-white shadow-md font-montserrat">
        <div className="min-w-2xl mx-auto mt-6">
          <header className="mb-5 flex justify-between items-center">
            <img src="/logo.png" alt="Daikin Logo" className="h-8" />
            <div className="flex justify-center items-center bg-[#00B3FF] w-16 h-13 rounded-full p-1 fixed right-0">
              <img src="/Bot.png" alt="AI Icon" className="w-10 h-8" />
            </div>
          </header>

          <h2 className="text-2xl font-semibold mb-5">Create account</h2>

          <form className="grid gap-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="Email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-6 gap-8 w-[601.93px]">
              <AuthButton className="bg-[#00A0E4] text-white">Create account</AuthButton>
              <AuthButton className="bg-[#2D3748] text-white">
                <img src="/google-icon.png" alt="Google Icon" className="w-5 h-5" />
                Sign-in with Google
              </AuthButton>
            </div>
          </form>

          <div className="flex gap-4 mt-12">
            <StoreButton icon="/icons/play-store.png" line1="GET IT ON" line2="Google Play" />
            <StoreButton icon="/icons/apple.png" line1="Download on the" line2="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
