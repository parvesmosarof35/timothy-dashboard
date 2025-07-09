import React, { useState } from 'react'
import { MoreHorizontal, User, DollarSign, MessageCircle } from 'lucide-react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    // Mock id for demonstration - in your actual app, use useParams()
    const {id} = useParams();
    const [activeTab, setActiveTab] = useState('profile');

    // Mock user data
    const userData = {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        status: 'Active',
        joinDate: '2023-01-15',
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        address: '123 Main St, City, State 12345',
        lastLogin: '2024-07-10 14:30:00',
        role: "Admin"
    };

    // Mock transaction data
    const transactions = [
        {
            id: 1,
            date: '12 Nov 2023',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum tenetur qui in commodo.',
            type: 'Gift box',
            code: 'GIFT001',
            amount: 240,
            status: 'completed'
        },
        {
            id: 2,
            date: '15 Nov 2023',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum tenetur qui in commodo.',
            type: 'Gift box',
            code: 'GIFT002',
            amount: 340,
            status: 'pending'
        },
        {
            id: 3,
            date: '18 Nov 2023',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum tenetur qui in commodo.',
            type: 'Gift box',
            code: 'GIFT003',
            amount: 520,
            status: 'completed'
        },
        {
            id: 4,
            date: '20 Nov 2023',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum tenetur qui in commodo.',
            type: 'Gift box',
            code: 'GIFT004',
            amount: 180,
            status: 'failed'
        },
        {
            id: 5,
            date: '22 Nov 2023',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum tenetur qui in commodo.',
            type: 'Gift box',
            code: 'GIFT005',
            amount: 420,
            status: 'completed'
        }
    ];

    // Mock finance data
    const financeData = {
        earnings: 2420,
        expenses: 1250,
        cleared: 1890,
        availableBalance: 2420
    };

    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'completed': return 'text-green-600';
            case 'pending': return 'text-yellow-600';
            case 'failed': return 'text-red-600';
            default: return 'text-gray-600';
        }
    };

    const renderProfileTab = () => (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-8">
                <img 
                    src={userData.profileImage} 
                    alt={userData.name}
                    className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                    <p className="text-gray-600">{userData.email}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                        userData.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {userData.status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="space-y-3">
                        <div>
                            <span className="text-gray-600">User ID:</span>
                            <span className="ml-2 text-gray-900">{userData.id}</span>
                        </div>
                        <div>
                            <span className="text-gray-600">User Role:</span>
                            <span className="ml-2 text-gray-900">{userData.role}</span>
                        </div>
                        <div>
                            <span className="text-gray-600">Phone:</span>
                            <span className="ml-2 text-gray-900">{userData.phone}</span>
                        </div>
                        <div>
                            <span className="text-gray-600">Join Date:</span>
                            <span className="ml-2 text-gray-900">{userData.joinDate}</span>
                        </div>
                        <div>
                            <span className="text-gray-600">Last Login:</span>
                            <span className="ml-2 text-gray-900">{userData.lastLogin}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                    <p className="text-gray-600">{userData.address}</p>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Description</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Code</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                                {/* <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-gray-600">{transaction.date}</td>
                                    <td className="py-3 px-4 text-gray-600 max-w-xs truncate">{transaction.description}</td>
                                    <td className="py-3 px-4 text-gray-600">{transaction.type}</td>
                                    <td className="py-3 px-4 text-gray-600">{transaction.code}</td>
                                    <td className={`py-3 px-4 font-semibold ${getStatusColor(transaction.status)}`}>
                                        ${transaction.amount}
                                    </td>
                                    <td className={`py-3 px-4 font-semibold ${getStatusColor(transaction.status)}`}>
                                        {transaction.status}
                                    </td>
                                    {/* <td className="py-3 px-4">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderFinanceTab = () => (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Finances</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-green-800">Earnings</h3>
                        <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-900">{financeData.earnings.toLocaleString()}</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-red-800">Expenses</h3>
                        <DollarSign className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-2xl font-bold text-red-900">{financeData.expenses.toLocaleString()}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-blue-800">Cleared</h3>
                        <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-900">{financeData.cleared.toLocaleString()}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-purple-800">Available Balance</h3>
                        <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold text-purple-900">{financeData.availableBalance.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );

    const renderMessagesTab = () => (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages</h2>
            <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">User ID: {userData.id}</h3>
                <p className="text-gray-600">Message functionality for user {userData.id}</p>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch(activeTab) {
            case 'profile':
                return renderProfileTab();
            case 'finance':
                return renderFinanceTab();
            case 'messages':
                return renderMessagesTab();
            default:
                return renderProfileTab();
        }
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            <div className="px-6 py-6 mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
                    <p className="text-gray-600">Managing user: {userData.name} (ID: {id})</p>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white rounded-lg shadow-sm mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`flex items-center px-6 py-4 text-sm font-medium ${
                                activeTab === 'profile'
                                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <User className="w-4 h-4 mr-2" />
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('finance')}
                            className={`flex items-center px-6 py-4 text-sm font-medium ${
                                activeTab === 'finance'
                                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <DollarSign className="w-4 h-4 mr-2" />
                            Finance
                        </button>
                        <button
                            onClick={() => setActiveTab('messages')}
                            className={`flex items-center px-6 py-4 text-sm font-medium ${
                                activeTab === 'messages'
                                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Messages
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}
            </div>
        </div>
    );
};

export default UserDetails;