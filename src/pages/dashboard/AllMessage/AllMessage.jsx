import React from "react";
import AdminProfile from "../components/AdminProfile";
import { useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useGetAllChannelsForAdminQuery } from "../../../redux/api/chat/getAllChannelsForAdminApi";
import { useGetMessagesByChannelNameQuery } from "../../../redux/api/chat/getAllMSGApi";

const AllMessage = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  
  const { data: channelsData, isLoading: channelsLoading, error: channelsError } = useGetAllChannelsForAdminQuery();
  const { data: messagesData, isLoading: messagesLoading } = useGetMessagesByChannelNameQuery(
    selectedChannel?.channelName,
    { skip: !selectedChannel }
  );

  const channels = channelsData?.data || [];
  const messages = messagesData?.data?.[0]?.messages || [];

  // Get current admin user ID from localStorage token using jwt-decode
  const getCurrentAdminId = () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;
      
      const decoded = jwtDecode(token);
      return decoded.id;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const currentAdminId = getCurrentAdminId();

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.abs(now - date) / 36e5;
    
    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const getLastMessage = (channel) => {
    // This would ideally come from the API, but for now we'll show a placeholder
    return "Click to view messages";
  };

  return (
    <div className="space-y-6 bg-grayLightBg min-h-screen md:px-6 font-sans">
      <AdminProfile headingText="All Messages" />

      <div className="flex flex-col w-full h-full justify-center md:flex-row bg-gray-100">
        {/* Sidebar */}
        <div className="md:w-80 w-full h-full bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Messages
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder={`All Conversations ${channels.length}`}
                className="w-full pr-10 p-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-brandGray" />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {channelsLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="text-sm text-gray-500">Loading channels...</div>
              </div>
            ) : channelsError ? (
              <div className="flex justify-center items-center h-32">
                <div className="text-sm text-red-500">Error loading channels</div>
              </div>
            ) : channels.length === 0 ? (
              <div className="flex justify-center items-center h-32">
                <div className="text-sm text-gray-500">No channels found</div>
              </div>
            ) : (
              channels.map((channel) => {
                const isActive = selectedChannel?.id === channel.id;
                const person1 = channel.person1;
                const person2 = channel.person2;
                
                // Determine which person is NOT the admin
                const otherPerson = person1?.id === currentAdminId ? person2 : person1;
                
                return (
                  <div
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel)}
                    className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${
                      isActive
                        ? "bg-orangePrimary border-r-4 border-orangeAction hover:bg-orangePrimary"
                        : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={otherPerson?.profileImage || "https://i.pravatar.cc/150?img=1"}
                        alt={otherPerson?.fullName || "User"}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-darkGray">
                          {otherPerson?.fullName || "Unknown User"}
                        </h3>
                        <span className="text-xs text-brandGray">
                          {formatTime(channel.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-brandGray truncate mt-1">
                        {getLastMessage(channel)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
            {selectedChannel ? (
              <div className="flex items-center">
                {(() => {
                  const otherPerson = selectedChannel.person1?.id === currentAdminId 
                    ? selectedChannel.person2 
                    : selectedChannel.person1;
                  
                  return (
                    <>
                      <div className="relative">
                        <img
                          src={otherPerson?.profileImage || "https://i.pravatar.cc/150?img=1"}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-darkGray">
                          {otherPerson?.fullName || "Unknown User"}
                        </h3>
                        <p className="text-sm text-brandGray">
                          {otherPerson?.role || "User"}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="flex items-center">
                <MessageCircle className="w-10 h-10 text-gray-400" />
                <div className="ml-3">
                  <h3 className="font-medium text-darkGray">Select a conversation</h3>
                  <p className="text-sm text-brandGray">Choose a channel to view messages</p>
                </div>
              </div>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!selectedChannel ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">No conversation selected</h3>
                  <p className="text-gray-400">Choose a channel from the sidebar to view messages</p>
                </div>
              </div>
            ) : messagesLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
                  <p className="text-gray-500">Loading messages...</p>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">No messages yet</h3>
                  <p className="text-gray-400">This conversation doesn't have any messages</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-center">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                    {new Date(messages[0]?.createdAt).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {messages.map((message, index) => {
                  const isAdminMessage = message.senderId === currentAdminId;
                  
                  return (
                    <div
                      key={message.id}
                      className={`flex ${
                        isAdminMessage ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className={`max-w-xs lg:max-w-md`}>
                        <div className="flex items-end space-x-2">
                          {!isAdminMessage && (
                            <img
                              src={message.sender?.profileImage || "https://i.pravatar.cc/150?img=1"}
                              alt={message.sender?.fullName || "User"}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          )}
                          <div
                            className={`px-4 py-2 rounded-2xl ${
                              isAdminMessage
                                ? "bg-orangePrimary text-darkGray"
                                : "bg-white text-gray-800 border border-gray-200"
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            {message.files && message.files.length > 0 && (
                              <div className="mt-2 text-xs text-gray-500">
                                📎 {message.files.length} file(s) attached
                              </div>
                            )}
                          </div>
                        </div>
                        <p
                          className={`text-xs text-brandGray mt-1 ${
                            isAdminMessage ? "text-right" : "text-left"
                          }`}
                        >
                          {new Date(message.createdAt).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* Message Input - Hidden for admin view */}
          <div className="bg-white p-4 border-t border-gray-200 hidden">
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-500">Admin view - Message sending disabled</p>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default AllMessage;
