import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

// Simulated dummy request
const fakeRequest = (success = true, delay = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve({ success: true });
      else reject(new Error("Simulated error"));
    }, delay);
  });

function VerificationCodeInput({
  length = 5,
  value,
  onChange,
  disabled = false,
}) {
  const inputRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  // Focus management
  useEffect(() => {
    // On mount or when enabled, focus the first empty input
    const firstEmptyIndex = value.split("").findIndex((char) => !char);
    const targetIndex =
      firstEmptyIndex === -1
        ? Math.min(value.length, length - 1)
        : firstEmptyIndex;

    if (inputRefs.current[targetIndex] && !disabled) {
      inputRefs.current[targetIndex].focus();
      setActiveIndex(targetIndex);
    }
  }, [value, length, disabled]);

  const handleInput = (index, inputValue) => {
    const digit = inputValue.replace(/\D/g, "").slice(-1);
    if (!digit) return;

    const newValue = value.split("");
    newValue[index] = digit;
    const updatedValue = newValue.join("").slice(0, length);
    onChange(updatedValue);

    // Move to next input if there's a digit and not last input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        // If current is empty and not first, move left
        inputRefs.current[index - 1]?.focus();
        setActiveIndex(index - 1);
      } else {
        // Clear current value
        const newValue = value.split("");
        newValue[index] = "";
        onChange(newValue.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const digits = pastedText.replace(/\D/g, "").slice(0, length);
    onChange(digits);
  };

  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleInput(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => setActiveIndex(index)}
          disabled={disabled}
          className={`w-12 h-12 text-center text-lg font-medium border text-brandGray rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            disabled ? "bg-grayLightBg" : ""
          }`}
          autoComplete="off"
          inputMode="numeric"
          pattern="[0-9]"
        />
      ))}
    </div>
  );
}

export default function Checkemail() {
  const [verificationCode, setVerificationCode] = useState("");
  const [email] = useState("contact@dscode.com");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleVerification = async (e) => {
    e.preventDefault();
    if (verificationCode.length !== 5 || isVerifying) return;

    setIsVerifying(true);
    try {
      const isValid = verificationCode === "12345"; // Dummy correct code
      await fakeRequest(isValid);
      toast.success("Email verified successfully!");
      setTimeout(() => {
        console.log("Redirecting...");
      }, 1500);
    } catch {
      toast.error("Invalid verification code. Please try again.");
      setVerificationCode("");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0 || isResending) return;

    setIsResending(true);
    try {
      await fakeRequest(true);
      toast.success("A new verification code has been sent.");
      setResendCooldown(30);
    } catch {
      toast.error("Failed to resend code. Try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#d0d9d0]">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 min-h-[40rem] flex flex-col justify-center">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-darkGray mb-4">
                Check your email
              </h1>
              <p className="text-sm text-brandGray leading-relaxed">
                We sent a reset link to{" "}
                <span className="font-medium">{email}</span>. Enter the 5-digit
                code from the email.
              </p>
            </div>

            <form onSubmit={handleVerification} className="mb-6">
              <div className="mb-8">
                <VerificationCodeInput
                  value={verificationCode}
                  onChange={setVerificationCode}
                  disabled={isVerifying}
                />
              </div>

              <button
                type="submit"
                disabled={verificationCode.length !== 5 || isVerifying}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-brandGray">
                Didn't get the email?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || isResending}
                  className="text-darkGray underline hover:text-darkGray disabled:opacity-50 disabled:no-underline"
                >
                  {resendCooldown > 0
                    ? `Resend (${resendCooldown}s)`
                    : isResending
                    ? "Sending..."
                    : "Resend"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
