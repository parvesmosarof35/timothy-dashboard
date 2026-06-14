import React, { useState, useEffect, useRef } from "react";
import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../redux/api/aboutUs/aboutUsApi";
import JoditEditor from "jodit-react";
import { BiInfoCircle, BiError, BiRefresh, BiLoaderAlt } from "react-icons/bi";
import Swal from "sweetalert2";

const AboutUs = () => {
  const { data: apiData, isLoading, error, refetch } = useGetAboutUsQuery();
  const [updateAboutUs, { isLoading: isUpdating }] = useUpdateAboutUsMutation();

  const editorRef = useRef(null);
  const [aboutUs, setAboutUs] = useState("");

  // Initialize about us content when apiData is fetched
  useEffect(() => {
    if (apiData?.data) {
      setAboutUs(apiData.data);
    }
  }, [apiData]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!aboutUs.trim() || aboutUs.replace(/<[^>]*>/g, "").trim().length < 10) {
      Swal.fire({
        title: "Warning!",
        text: "About Us content must be at least 10 characters.",
        icon: "warning",
        confirmButtonColor: "#F2CA50",
      });
      return;
    }

    try {
      await updateAboutUs({ content: aboutUs }).unwrap();

      Swal.fire({
        title: "Success!",
        text: "About Us has been updated successfully.",
        icon: "success",
        confirmButtonColor: "#F2CA50",
      });
      refetch();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err?.data?.message || "Failed to update About Us.",
        icon: "error",
        confirmButtonColor: "#F2CA50",
      });
    }
  };

  const getWordCount = () => {
    if (!aboutUs) return 0;
    const cleanText = aboutUs.replace(/<[^>]*>/g, "").trim();
    return cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-40 min-h-screen bg-gray-50">
        <BiLoaderAlt className="w-12 h-12 text-[#F2CA50] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="bg-white border border-gray-200 p-8 rounded-3xl text-center max-w-md w-full shadow-md">
          <BiError className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-gray-800 mb-2">
            Error Loading About Us
          </h2>
          <p className="text-gray-500 mb-6">
            Unable to load About Us. Please try again later.
          </p>
          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 bg-[#F2CA50] text-black px-6 py-2.5 rounded-xl font-bold tracking-wider uppercase mx-auto hover:bg-white transition-colors duration-300"
          >
            <BiRefresh className="w-5 h-5" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  const joditConfig = {
    readonly: false,
    placeholder: "Start typing the About Us...",
    height: 450,
    theme: "default",
    uploader: {
      insertImageAsBase64URI: true,
    },
    style: {
      background: "#ffffff",
      color: "#1f2937",
      border: "none",
    },
  };

  return (
    <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto p-4 md:p-8 min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <BiInfoCircle className="w-8 h-8 text-[#F2CA50]" />
          </div>
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-serif">About Us</h1>
            <p className="text-gray-400 text-xs mt-1">Manage and update your platform's profile information</p>
          </div>
        </div>
      </header>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-[30px] p-6 md:p-10 space-y-6 shadow-md">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h2 className="text-gray-800 text-xl font-serif">Editor</h2>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-gray-400">
              Word Count: {getWordCount()} words
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-gray-400 text-[10px] font-bold tracking-[2px] uppercase">About Us Text</label>
            <div className="text-gray-800 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <JoditEditor
                ref={editorRef}
                value={aboutUs}
                config={joditConfig}
                onBlur={(newContent) => setAboutUs(newContent)}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUpdating}
            className="w-full md:w-auto bg-[#F2CA50] text-black text-[10px] font-bold tracking-[3px] uppercase px-12 py-5 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all duration-500 disabled:opacity-40 cursor-pointer"
          >
            {isUpdating ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutUs;
