import React from 'react'
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

export default function UserDemographics() {
  // Mock data to visualize months (can be replaced by API data later)
  const data = [
    { name: 'Jan', users: 12000 },
    { name: 'Feb', users: 8000 },
    { name: 'Mar', users: 23000 },
    { name: 'Apr', users: 9000 },
    { name: 'May', users: 7000 },
    { name: 'Jun', users: 22000 },
    { name: 'Jul', users: 6000 },
    { name: 'Aug', users: 4000 },
    { name: 'Sep', users: 15000 },
    { name: 'Oct', users: 5000 },
    { name: 'Nov', users: 14000 },
    { name: 'Dec', users: 21000 },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-amber-100 text-gray-900 text-xs font-semibold px-2 py-1 rounded shadow">
          {label}: {Math.round(payload[0].value / 1000)}k
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
        <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border">
          Today
          <IoIosArrowDown className="ml-1" size={12} />
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
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right-side Tabs */}
        <div className="col-span-12 md:col-span-3 border-l md:pl-6 pl-0">
          <ul className="space-y-3 md:space-y-4 text-sm">
            <li className="text-orange-500 font-medium">Country</li>
            <li className="text-gray-400">Age</li>
            <li className="text-gray-400">Profession</li>
            <li className="text-gray-400">Gender</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
