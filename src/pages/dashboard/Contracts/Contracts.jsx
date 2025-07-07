import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  MoreHorizontal, 
  X,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AdminProfile from '../components/AdminProfile';
import { useNavigate } from 'react-router-dom';

const Contracts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const navigate = useNavigate();

  // Mock data for contracts
  const contracts = [
    {
      id: '1981812312',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '19814565787',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    },
    {
      id: '1981849262',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum mauris est in commodo.',
      category: 'Sureman',
      user: 'John Doe',
      startingDate: '12 Dec 2023',
      finishingDate: '04 Jan 2024',
      milestones: '01 of 06',
      allAmount: '$260',
      current: '$60',
      status: 'Active'
    }
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
<div className='px-6 bg-gray-50 min-h-screen font-sans'>
    <AdminProfile headingText={`Contracts`} ></AdminProfile>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-6">Contracts</h1>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4">
              {/* Filter Tags */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  <span>All time</span>
                  <X className="w-4 h-4 ml-2 cursor-pointer" />
                </div>
                <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  <span>US, AU +4</span>
                  <X className="w-4 h-4 ml-2 cursor-pointer" />
                </div>
              </div>

              {/* More Filters Button */}
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                More filters
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">1</span>
              </button>

              {/* Sort By */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600">Sort By :</span>
                <button className="flex items-center gap-1 text-sm text-gray-700">
                  Deadline
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Starting Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Finishing Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Milestones
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    All Amount
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contracts.map((contract, index) => (
                  <tr
                  onClick={()=>{
                    navigate(`${contract.id}`);
                  }}
                  key={index} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.id}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500 max-w-xs">{contract.description}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.startingDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.finishingDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contract.milestones}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {contract.allAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {contract.current}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-sm text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {contract.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
              </div>

              <div className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
</div>
  );
};

export default Contracts;