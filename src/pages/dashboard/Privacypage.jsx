import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import AdminProfile from "./components/AdminProfile";
import Swal from "sweetalert2";

const initialPrivacyPolicy = `
1. Introduction
Timber items respect your privacy; This policy explains how we collect, use, and protect your personal data when you use our app.

2. Information We Collect
We may collect the following information:
- Images uploaded for timber analysis
- Usage history (scan time/soda)
- Device location (if you allow)
- Device type & OS version (for bug tracking)

3. How We Use Your Data
We use your information to:
- Improve scan accuracy
- Provide better timber identification
- Maintain usage history
- Improve app performance and features

4. Data Security
We use secure servers and encryption techniques to protect your data. However, no system is 100% secure.

5. Third-Party Services
We do not sell or share your data with third-party advertisers. We may use analytics tools (e.g., Google Firebase) to understand app usage.

6. User Control
You can:
- Delete your scan history
- Request scan removal via email
- Disable location sharing anytime

7. Children's Privacy
This app is not intended for children under 13. We do not knowingly collect data from minors.

8. Changes to This Policy
We may update this policy. Continued use of the app after updates means you accept the new version.

9. Contact Us
If you have questions about this policy, please contact us:
- support@timberlensapp.com
`;

export default function Privacypage() {
  const [isEditing, setIsEditing] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(initialPrivacyPolicy);
  const [editedPrivacyPolicy, setEditedPrivacyPolicy] =
    useState(initialPrivacyPolicy);

  const handleToggleEdit = () => {
    if (isEditing) {
      Swal.fire({
        title: "Discard Changes?",
        text: "Your unsaved changes will be lost!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, discard",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsEditing(false);
          setEditedPrivacyPolicy(privacyPolicy); // reset edits
        }
      });
    } else {
      setEditedPrivacyPolicy(privacyPolicy); // enter edit mode with original
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated Privacy Policy?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setPrivacyPolicy(editedPrivacyPolicy);
        setIsEditing(false);

        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Privacy policy updated successfully.",
          confirmButtonColor: "#22c55e",
        });
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-grayLightBg p-6">
      <div className="mb-8">
        <AdminProfile />
      </div>

      <div className="relative w-full">
        <button
          onClick={handleToggleEdit}
          className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <CiEdit className="text-xl" />
              <span>Edit</span>
            </>
          )}
        </button>
      </div>

      {isEditing ? (
        <textarea
          className="w-full min-h-[calc(100vh-180px)] p-4 text-lg font-medium border rounded-lg"
          value={editedPrivacyPolicy}
          onChange={(e) => setEditedPrivacyPolicy(e.target.value)}
        />
      ) : (
        <div className="w-full min-h-[calc(100vh-180px)] p-4 text-lg font-medium space-y-6 font-poppins">
          {privacyPolicy
            .trim()
            .split("\n\n")
            .map((section) => {
              const lines = section.split("\n");
              const firstLine = lines[0];
              const remainingLines = lines.slice(1);

              return (
                <div key={firstLine} className="mb-6">
                  <p className="font-bold text-xl mb-2">{firstLine}</p>
                  {remainingLines.map((line, i) => (
                    <p key={i} className="my-1">
                      {line.startsWith("- ") ? "• " + line.substring(2) : line}
                    </p>
                  ))}
                </div>
              );
            })}
        </div>
      )}

      {isEditing && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
