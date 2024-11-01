import React from 'react';
import { PieChart } from 'lucide-react';

const Attendance: React.FC = () => {
  const subjects = [
    { name: 'Data Structures', attendance: 85 },
    { name: 'Web Development', attendance: 92 },
    { name: 'Database Systems', attendance: 78 },
    { name: 'Computer Networks', attendance: 88 },
    { name: 'Operating Systems', attendance: 82 }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Attendance Overview</h2>
      <div className="grid gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{subject.name}</h3>
              <PieChart className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">{subject.attendance}%</div>
            <div className="mt-4 h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-red-600 rounded"
                style={{ width: `${subject.attendance}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;