import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Package } from 'lucide-react';
import { formatCurrency, formatNumber, formatPercentage } from '../utils/formatters';

const ProductsGrid = ({ products = [] }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Produtos Mais Vendidos</h2>
        <p className="text-gray-600 mt-1">Top produtos por receita</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => {
          const isPositive = product.growth > 0;
          
          return (
            <motion.div
              key={product.id}
              className="p-4 border border-gray-200/50 rounded-xl hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
                
                <motion.div 
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                    isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {formatPercentage(product.growth)}
                </motion.div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Vendas</p>
                  <p className="font-bold text-gray-900">{formatNumber(product.sales)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receita</p>
                  <p className="font-bold text-gray-900">{formatCurrency(product.revenue)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProductsGrid;