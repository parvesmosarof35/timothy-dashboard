import React, { useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { IoIosArrowDown } from 'react-icons/io'
import { useGetUserDemographicsQuery } from '../../redux/api/statistics/getuserDemographics'

export default function UserDemographics() {
  // Time filter like previously done
  const timeOptions = ['Today', 'This Week', 'This Month', 'This Year']
  const [selectedTime, setSelectedTime] = useState('This Year')
  const [isOpen, setIsOpen] = useState(false)
  const timeParamMap = {
    'Today': 'TODAY',
    'This Week': 'THIS_WEEK',
    'This Month': 'THIS_MONTH',
    'This Year': 'THIS_YEAR',
  }

  // Fetch data
  const { data: apiData, isLoading, error } = useGetUserDemographicsQuery(timeParamMap[selectedTime])

  const data = apiData?.data?.userMonthsData?.map((m) => ({
    name: m.month.substring(0, 3),
    users: m.userCount,
    partners: m.partnerCount,
  })) || []

  const totalUsers = apiData?.data?.totalUsers ?? 0
  const totalPartners = apiData?.data?.totalPartners ?? 0

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const usersVal = payload.find(p => p.dataKey === 'users')?.value ?? 0
      const partnersVal = payload.find(p => p.dataKey === 'partners')?.value ?? 0
      return (
        <div className="bg-amber-100 text-gray-900 text-xs font-semibold px-2 py-1 rounded shadow">
          <div>{label}</div>
          <div>Users: {usersVal}</div>
          <div>Partners: {partnersVal}</div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">User Demographics</h2>
        <div className="relative inline-block text-left">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border cursor-pointer"
          >
            {selectedTime}
            <IoIosArrowDown className="ml-1" size={12} />
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-36 bg-white border rounded-md shadow-lg right-0">
              {timeOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => { setSelectedTime(option); setIsOpen(false) }}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content: Chart + Right tabs */}
      <div className="grid grid-cols-12 gap-4 items-stretch">
        {/* Chart */}
        <div className="col-span-12 md:col-span-9">
          <div className="h-60 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffb13a" />
                    <stop offset="100%" stopColor="#ff8a00" />
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c3720b" />
                    <stop offset="100%" stopColor="#8a5408" />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical={false} strokeDasharray="6 4" stroke="#F3F4F6" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v / 1000}k`}
                  domain={[0, 50000]}
                />
                <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />

                <Bar
                  dataKey="users"
                  fill="url(#barGradient)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={22}
                  background={{ fill: '#FFF2E0', radius: 6 }}
                />
                <Bar
                  dataKey="partners"
                  fill="url(#barGradient2)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={22}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right-side Tabs */}
        <div className="col-span-12 md:col-span-3 md:border-l md:pl-6 pl-0">
          <ul className="space-y-3 md:space-y-4 text-sm">
            {/* <li className="text-orange-500 font-medium">Total Users: {totalUsers}</li>
            <li className="text-gray-600">Total Partners: {totalPartners}</li> */}
            <li className="text-gray-400">Country</li>
            <li className="text-gray-400">Age</li>
            <li className="text-gray-400">Profession</li>
            <li className="text-gray-400">Gender</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
