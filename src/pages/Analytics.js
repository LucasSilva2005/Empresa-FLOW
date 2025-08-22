import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar, Download } from 'lucide-react';

const Analytics = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Relatórios
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Análises detalhadas do seu negócio
          </motion.p>
        </div>

        <motion.button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          Exportar Relatório
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Vendas Mensais', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
          { title: 'Análise de Produtos', icon: BarChart3, color: 'from-blue-500 to-purple-600' },
          { title: 'Relatório Anual', icon: Calendar, color: 'from-orange-500 to-red-600' }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">Clique para visualizar relatório detalhado</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <BarChart3 className="w-8 h-8 text-purple-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Relatórios Avançados</h3>
        <p className="text-gray-600 mb-4">
          Gráficos interativos e análises detalhadas serão implementados aqui.
        </p>
        <p className="text-sm text-gray-500">
          Esta seção incluirá dashboards com gráficos de vendas, performance de produtos e muito mais.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;