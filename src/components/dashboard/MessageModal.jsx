import { Modal, Spin, Alert, Avatar, Empty } from "antd";
import { MessageCircle, User, Clock } from "lucide-react";
import { useGetMessagesByChannelNameQuery } from "../../redux/api/chat/getAllMSGApi";

const MessageModal = ({ isOpen, onClose, channelName, receiverUser }) => {
  const { 
    data: messagesData, 
    isLoading, 
    error 
  } = useGetMessagesByChannelNameQuery(channelName, {
    skip: !channelName || !isOpen
  });

  const messages = messagesData?.data?.[0]?.messages || [];

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center py-8">
          <Spin size="large" tip="Loading messages..." />
        </div>
      );
    }

    if (error) {
      return (
        <Alert
          message="Error"
          description={error?.data?.message || "Failed to load messages"}
          type="error"
          showIcon
        />
      );
    }

    if (messages.length === 0) {
      return (
        <Empty
          image={<MessageCircle className="w-16 h-16 text-gray-400 mx-auto" />}
          description={
            <span className="text-gray-500">
              No messages found in this conversation
            </span>
          }
        />
      );
    }

    return (
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <Avatar
              size={32}
              src={message.sender?.profileImage}
              icon={<User />}
              className="flex-shrink-0"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-darkGray">
                  {message.sender?.fullName || 'Unknown User'}
                </span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {formatTime(message.createdAt)}
                </span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-darkGray">{message.message}</p>
                
                {message.files && message.files.length > 0 && (
                  <div className="mt-2">
                    <span className="text-xs text-gray-500">
                      {message.files.length} file(s) attached
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Modal
      title={
        <div className="flex items-center space-x-3">
          <Avatar
            size={40}
            src={receiverUser?.profileImage}
            icon={<User />}
          />
          <div>
            <h3 className="text-lg font-medium text-darkGray">
              Conversation with {receiverUser?.fullName || 'Unknown User'}
            </h3>
            <p className="text-sm text-gray-500">
              {messages.length} message{messages.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      className="message-modal"
    >
      {renderContent()}
    </Modal>
  );
};

export default MessageModal;
