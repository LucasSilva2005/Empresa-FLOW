import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Phone } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
      orders: 12,
      totalSpent: 15600
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(11) 88888-8888',
      orders: 8,
      totalSpent: 8900
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      phone: '(11) 77777-7777',
      orders: 15,
      totalSpent: 23400
    }
  ];

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Clientes</h2>
          <p className="text-gray-500">Gerencie sua base de clientes</p>
        </div>

        <motion.button 
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <UserPlus className="w-4 h-4" />
          Novo Cliente
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer, index) => (
          <motion.div
            key={customer.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                <p className="text-sm text-gray-500">Cliente #{customer.id}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                {customer.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                {customer.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pedidos:</span>
                <span className="font-medium">{customer.orders}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Total Gasto:</span>
                <span className="font-medium text-green-600">
                  R$ {customer.totalSpent.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Customers;