import React from 'react';

interface DashboardProps {
  user: {
    name: string;
    id: string;
    role: string;
  } | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500">Student Name</h3>
                <p className="font-semibold">{user?.name}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Father's Name</h3>
                <p className="font-semibold">Mr. Robert Doe</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">College ID</h3>
                <p className="font-semibold">{user?.id}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Branch</h3>
                <p className="font-semibold">Computer Science Engineering</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Year of Passing</h3>
                <p className="font-semibold">2025</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Current Semester</h3>
                <p className="font-semibold">6th Semester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;