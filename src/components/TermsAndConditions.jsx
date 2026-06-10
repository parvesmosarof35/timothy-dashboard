<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import {
  useGetTermsConditionsQuery,
  useUpdateTermsConditionsMutation,
} from "../redux/api/termsConditions/termsConditionsApi";
import JoditEditor from "jodit-react";
import { BiFile, BiError, BiRefresh, BiLoaderAlt } from "react-icons/bi";
import Swal from "sweetalert2";

const TermsAndConditions = () => {
  const { data: apiData, isLoading, error, refetch } = useGetTermsConditionsQuery();
  const [updateTerms, { isLoading: isUpdating }] = useUpdateTermsConditionsMutation();

  const editorRef = useRef(null);
  const [termsConditions, setTermsConditions] = useState("");

  // Initialize terms conditions content when apiData is fetched
  useEffect(() => {
    if (apiData?.data) {
      setTermsConditions(apiData.data);
    }
  }, [apiData]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!termsConditions.trim() || termsConditions.replace(/<[^>]*>/g, "").trim().length < 10) {
      Swal.fire({
        title: "Warning!",
        text: "Terms & Conditions content must be at least 10 characters.",
        icon: "warning",
        confirmButtonColor: "#F2CA50",
      });
      return;
    }

    try {
      await updateTerms({ content: termsConditions }).unwrap();

      Swal.fire({
        title: "Success!",
        text: "Terms & Conditions have been updated successfully.",
        icon: "success",
        confirmButtonColor: "#F2CA50",
      });
      refetch();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err?.data?.message || "Failed to update Terms & Conditions.",
        icon: "error",
        confirmButtonColor: "#F2CA50",
=======
import React, { useState } from 'react';
import { useGetTermsConditionsQuery, useUpdateTermsConditionsMutation } from '../redux/api/termsConditions/termsConditionsApi';
import { FiFileText, FiMail, FiCalendar, FiEdit2, FiSave, FiX } from 'react-icons/fi';
import { BiShield, BiUser, BiData, BiCopyright, BiError, BiRefresh } from 'react-icons/bi';
import Swal from 'sweetalert2';

const TermsAndConditions = () => {
  const { data: apiData, isLoading, error } = useGetTermsConditionsQuery();
  const [updateTerms, { isLoading: isUpdating }] = useUpdateTermsConditionsMutation();
  
  const termsData = apiData?.data;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Initialize form data when termsData is available
  React.useEffect(() => {
    if (termsData && !isEditing) {
      setFormData({
        title: termsData.title || '',
        acceptance_terms: termsData.acceptance_terms || '',
        app_purpose: termsData.app_purpose || '',
        user_responsibilities: termsData.user_responsibilities || '',
        data_usage: termsData.data_usage || '',
        intellectual_property: termsData.intellectual_property || '',
        limitation: termsData.limitation || '',
        updates: termsData.updates || '',
        contactUS: termsData.contactUS || ''
      });
    }
  }, [termsData, isEditing]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      await updateTerms({
        id: termsData.id,
        data: formData
      }).unwrap();
      
      Swal.fire({
        title: 'Success!',
        text: 'Terms and conditions updated successfully',
        icon: 'success',
        confirmButtonColor: '#ff9000'
      });
      
      setIsEditing(false);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update terms and conditions',
        icon: 'error',
        confirmButtonColor: '#ff9000'
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
      });
    }
  };

<<<<<<< HEAD
  const getWordCount = () => {
    if (!termsConditions) return 0;
    const cleanText = termsConditions.replace(/<[^>]*>/g, "").trim();
    return cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
=======
  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
    if (termsData) {
      setFormData({
        title: termsData.title || '',
        acceptance_terms: termsData.acceptance_terms || '',
        app_purpose: termsData.app_purpose || '',
        user_responsibilities: termsData.user_responsibilities || '',
        data_usage: termsData.data_usage || '',
        intellectual_property: termsData.intellectual_property || '',
        limitation: termsData.limitation || '',
        updates: termsData.updates || '',
        contactUS: termsData.contactUS || ''
      });
    }
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
  };

  if (isLoading) {
    return (
<<<<<<< HEAD
      <div className="flex justify-center items-center py-40 min-h-screen bg-gray-50">
        <BiLoaderAlt className="w-12 h-12 text-[#F2CA50] animate-spin" />
=======
      <div className="min-h-screen bg-grayLightBg p-6">
        <div className=" mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-6 w-1/3"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
      </div>
    );
  }

  if (error) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="bg-white border border-gray-200 p-8 rounded-3xl text-center max-w-md w-full shadow-md">
          <BiError className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-gray-800 mb-2">
            Error Loading Terms & Conditions
          </h2>
          <p className="text-gray-500 mb-6">
            Unable to load Terms & Conditions. Please try again later.
          </p>
          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 bg-[#F2CA50] text-black px-6 py-2.5 rounded-xl font-bold tracking-wider uppercase mx-auto hover:bg-white transition-colors duration-300"
          >
            <BiRefresh className="w-5 h-5" />
            Retry
          </button>
=======
      <div className="min-h-screen bg-grayLightBg p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <BiError className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Error Loading Terms</h2>
            <p className="text-gray-600">Unable to load terms and conditions. Please try again later.</p>
          </div>
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  const joditConfig = {
    readonly: false,
    placeholder: "Start typing the Terms and Conditions...",
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
            <BiFile className="w-8 h-8 text-[#F2CA50]" />
          </div>
          <div>
            <h1 className="text-gray-800 text-3xl md:text-4xl font-serif">Terms & Conditions</h1>
            <p className="text-gray-400 text-xs mt-1">Manage and update your platform's usage policies</p>
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
            <label className="text-gray-400 text-[10px] font-bold tracking-[2px] uppercase">Terms & Conditions Text</label>
            <div className="text-gray-800 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <JoditEditor
                ref={editorRef}
                value={termsConditions}
                config={joditConfig}
                onBlur={(newContent) => setTermsConditions(newContent)}
              />
=======
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sections = [
    {
      icon: BiShield,
      title: "Acceptance of Terms",
      field: "acceptance_terms",
      content: isEditing ? formData.acceptance_terms : termsData?.acceptance_terms,
      color: "text-blue-600"
    },
    {
      icon: FiFileText,
      title: "App Purpose",
      field: "app_purpose",
      content: isEditing ? formData.app_purpose : termsData?.app_purpose,
      color: "text-green-600"
    },
    {
      icon: BiUser,
      title: "User Responsibilities",
      field: "user_responsibilities",
      content: isEditing ? formData.user_responsibilities : termsData?.user_responsibilities,
      color: "text-purple-600"
    },
    {
      icon: BiData,
      title: "Data Usage",
      field: "data_usage",
      content: isEditing ? formData.data_usage : termsData?.data_usage,
      color: "text-orange-600"
    },
    {
      icon: BiCopyright,
      title: "Intellectual Property",
      field: "intellectual_property",
      content: isEditing ? formData.intellectual_property : termsData?.intellectual_property,
      color: "text-red-600"
    },
    {
      icon: BiError,
      title: "Limitations",
      field: "limitation",
      content: isEditing ? formData.limitation : termsData?.limitation,
      color: "text-yellow-600"
    },
    {
      icon: BiRefresh,
      title: "Updates",
      field: "updates",
      content: isEditing ? formData.updates : termsData?.updates,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-grayLightBg p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <div className="text-center">
            <FiFileText className="w-16 h-16 text-orangePrimary mx-auto mb-4" />
            {isEditing ? (
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-3xl font-bold text-gray-800 mb-2 text-center bg-transparent border-b-2 border-orangePrimary focus:outline-none w-full max-w-md"
                placeholder="Terms and Conditions Title"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {termsData?.title || 'Terms and Conditions'}
              </h1>
            )}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>Created: {termsData?.createdAt ? formatDate(termsData.createdAt) : 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiRefresh className="w-4 h-4" />
                <span>Updated: {termsData?.updatedAt ? formatDate(termsData.updatedAt) : 'N/A'}</span>
              </div>
            </div>
            
            {/* Edit/Save/Cancel Buttons */}
            <div className="flex items-center justify-center gap-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 bg-orangePrimary text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors"
                >
                  <FiEdit2 className="w-4 h-4" />
                  Edit Terms
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    disabled={isUpdating}
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <FiSave className="w-4 h-4" />
                    {isUpdating ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                    Cancel
                  </button>
                </>
              )}
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gray-50 ${section.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {section.title}
                    </h3>
                    {isEditing ? (
                      <textarea
                        value={section.content || ''}
                        onChange={(e) => handleInputChange(section.field, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orangePrimary focus:border-transparent resize-none"
                        rows={4}
                        placeholder={`Enter ${section.title.toLowerCase()}...`}
                      />
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {section.content || 'Content not available'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orangePrimary to-orange-400 p-8 rounded-2xl shadow-sm mt-8 text-white">
          <div className="text-center">
            <FiMail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
            <p className="mb-4 opacity-90">
              If you have any questions about these terms and conditions, please contact us.
            </p>
            {isEditing ? (
              <input
                type="email"
                value={formData.contactUS}
                onChange={(e) => handleInputChange('contactUS', e.target.value)}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Contact email"
              />
            ) : (
              <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-medium">
                <FiMail className="w-4 h-4" />
                <span>{termsData?.contactUS || 'support@asdf.com'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 TimberLens Inc. All rights reserved.</p>
        </div>
      </div>
>>>>>>> a4043d08e86469869d7f8014a2fda4f07ebde0d0
    </div>
  );
};

export default TermsAndConditions;
