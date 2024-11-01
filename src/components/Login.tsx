import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: (credentials: { id: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isOriginalERP, setIsOriginalERP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    id: '',
    password: '',
    originalErpId: '',
    originalErpPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOriginalERP) {
      // Handle original ERP login
      console.log('Original ERP login:', {
        id: credentials.originalErpId,
        password: credentials.originalErpPassword
      });
      // You would typically make an API call to the actual ERP system here
    } else {
      onLogin({
        id: credentials.id,
        password: credentials.password
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-red-800 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://www.skit.ac.in/images/SKIT_Logo.jpg"
            alt="SKIT Logo"
            className="h-20 w-20"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-800">SKIT ERP Portal</h1>
          <p className="text-gray-600 mt-2">Swami Keshvanand Institute of Technology, Jaipur</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                !isOriginalERP ? 'bg-red-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsOriginalERP(false)}
            >
              Demo Login
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                isOriginalERP ? 'bg-red-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsOriginalERP(true)}
            >
              Original ERP
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isOriginalERP ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Original ERP ID
                </label>
                <input
                  type="text"
                  value={credentials.originalErpId}
                  onChange={(e) => setCredentials({ ...credentials, originalErpId: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Enter your original ERP ID"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Original ERP Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.originalErpPassword}
                    onChange={(e) => setCredentials({ ...credentials, originalErpPassword: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    placeholder="Enter your original ERP password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <input
                  type="text"
                  value={credentials.id}
                  onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Enter your student ID"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in
          </button>
        </form>

        {!isOriginalERP && (
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Use these credentials for demo:</p>
            <p>ID: student123 | Password: password</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;