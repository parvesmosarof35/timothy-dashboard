import { useState, useEffect, useRef } from "react";
import { PiBell } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../../redux/features/auth/authSlice";
import { Skeleton } from "antd";
import { useGetAllNotificationsQuery } from "../../../redux/api/notifications/notificationManageApi";

const AdminProfile = ({ 
  headingText = "Users Management", 
  searchValue = "", 
  onSearchChange = null,
  showSearch = true,
  suggestions = []
}) => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Load notifications after login
  const { data: notifData, isLoading: notifLoading, isFetching: notifFetching } =
    useGetAllNotificationsQuery(
      { page: 1, limit: 10 },
      { skip: !token }
    );
  const notifications = Array.isArray(notifData?.data?.data)
    ? notifData.data.data
    : [];
  const hasUnread = notifications.some((n) => n?.read === false);

  useEffect(() => {
    if (token && !user) {
      dispatch(getUserProfile());
    }
  }, [token, user, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotification = () => {
    navigate("/dashboard/notification");
  };

  return (
    <div className="flex items-center justify-between sticky top-0 md:top-0 w-full md:w-full px-0 md:px-6 py-8 md:py-4 gap-2 bg-white font-sans rounded-md shadow z-20">
      {/* Left dynamic text */}
      <h1 className="text-xs md:text-2xl ml-12 md:ml-0 font-bold text-darkGray">
        {headingText}
      </h1>

      {/* Right-side controls */}
      <div className="flex items-center gap-2">
        {/* Search box */}
        {showSearch && typeof onSearchChange === "function" && (
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center md:min-w-[20rem] justify-between min-h-12 gap-2 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setIsFocused(true);
                }}
                className="outline-none text-sm text-[#88755A] bg-transparent placeholder:text-[#88755A] w-full"
              />
              <CiSearch className="text-[#88755A] text-3xl" />
            </div>

            {/* Suggestions Dropdown */}
            {isFocused && searchValue.trim() !== "" && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-50 min-w-[20rem]">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setIsFocused(false);
                      onSearchChange("");
                      navigate(item.link);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 cursor-pointer transition-colors border-b border-gray-100 last:border-0"
                  >
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.title}
                        className="w-8 h-8 rounded-full object-cover border border-gray-200"
                        onError={(e) => {
                          e.target.src = "/default-avatar.png";
                        }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#edd8bf] text-[#88755A] flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                        {item.title.substring(0, 2)}
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold text-darkGray truncate">
                        {item.title}
                      </span>
                      <span className="text-xs text-[#88755A] truncate">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bell Icon with notification */}
        <div className="relative md:block">
          <div
            onClick={handleNotification}
            className="relative cursor-pointer md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center shadow-sm border border-lightGrayBorders"
          >
            <PiBell className="text-[#88755A] text-2xl" />
            {/* Loading indicator over bell */}
            {(notifLoading || notifFetching) && (
              <span className="absolute -top-[2px] md:top-[8px] -right-[0px] w-[10px] h-[10px] bg-gray-300 rounded-full animate-pulse" />
            )}
            {/* Unread indicator */}
            {!notifLoading && !notifFetching && hasUnread && (
              <span className="absolute -top-[2px] md:top-[8px] -right-[0px] w-[10px] h-[10px] bg-brandRed rounded-full" />
            )}
          </div>
        </div>

        {/* Profile Section with Loading State */}
        {loading ? (
          <div className="flex gap-4 items-center">
            <Skeleton.Avatar active size="large" />
            <div className="hidden md:block">
            
              <Skeleton.Input active size="small" />
            </div>
          </div>
        ) : (
          <div className="relative group flex items-center">
            <div className="flex gap-2">
              <div
                onClick={() => navigate("/dashboard/update-profile")}
                className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              >
                <img
                  src={user?.profileImage || "/default-avatar.png"}
                  alt="Admin"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/default-avatar.png";
                  }}
                />
              </div>
              <div className="text-brandGray font-semibold hidden md:block">
                <p>{user?.fullName || "Admin User"}</p>
                <p>{user?.role || "Admin"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;