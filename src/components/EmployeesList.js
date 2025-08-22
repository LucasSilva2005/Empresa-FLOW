import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, User } from 'lucide-react';
import { formatDate, getStatusColor, getStatusLabel } from '../utils/formatters';

const EmployeesList = ({ employees = [] }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Funcionários</h2>
        <p className="text-gray-600 mt-1">Lista de funcionários da empresa</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            className="p-4 border border-gray-200/50 rounded-xl hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <User className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-lg ${getStatusColor(employee.status)}`}>
                    {getStatusLabel(employee.status)}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-gray-700 mb-1">{employee.position}</p>
                <p className="text-sm text-gray-500 mb-3">{employee.department}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Desde {formatDate(employee.joinDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EmployeesList;