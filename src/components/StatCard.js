import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, previousValue, icon: Icon, index = 0 }) => {
  const growth = previousValue ? ((value - previousValue) / previousValue * 100) : 0;
  const isPositive = growth >= 0;

  const formatValue = (val) => {
    if (typeof val === 'number' && val >= 1000) {
      return `R$ ${(val / 1000).toFixed(1)}k`;
    }
    return typeof val === 'number' && title.includes('R$') ? `R$ ${val.toLocaleString()}` : val.toLocaleString();
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(growth).toFixed(1)}%
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{formatValue(value)}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;