import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const SalesChart = ({ data = [] }) => {
  const maxValue = Math.max(...data.map(item => item.sales));
  
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Vendas Mensais</h3>
          <p className="text-gray-500">Últimos 6 meses</p>
        </div>
        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.sales / maxValue) * 100;
          
          return (
            <div key={item.month} className="flex items-center gap-4">
              <div className="w-12 text-sm font-medium text-gray-600">
                {item.month}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                />
              </div>
              <div className="w-20 text-sm font-medium text-gray-900 text-right">
                R$ {(item.sales / 1000).toFixed(0)}k
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SalesChart;