import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Download } from 'lucide-react';
import OrdersTable from '../components/OrdersTable';
import { recentOrders } from '../mock/data';

const Orders = () => {
  const [orders] = useState(recentOrders);
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Pedidos</h2>
          <p className="text-gray-500">Visualize e gerencie todos os pedidos</p>
        </div>

        <div className="flex items-center gap-3">
          <motion.select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.02 }}
          >
            <option value="all">Todos os Status</option>
            <option value="pending">Pendente</option>
            <option value="processing">Processando</option>
            <option value="completed">Concluído</option>
          </motion.select>

          <motion.button 
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Exportar
          </motion.button>

          <motion.button 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            Novo Pedido
          </motion.button>
        </div>
      </div>

      <OrdersTable orders={filteredOrders} />
    </motion.div>
  );
};

export default Orders;