import React from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, TrendingDown } from 'lucide-react';

const TopProducts = ({ products = [] }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Top Produtos</h3>
          <p className="text-gray-500">Mais vendidos este mês</p>
        </div>
        <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
          <Package className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => {
          const isPositiveGrowth = product.growth >= 0;
          
          return (
            <motion.div 
              key={product.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.sales} vendas</p>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  R$ {(product.revenue / 1000).toFixed(1)}k
                </p>
                <div className={`flex items-center gap-1 text-sm ${
                  isPositiveGrowth ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositiveGrowth ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  {Math.abs(product.growth).toFixed(1)}%
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TopProducts;