import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Products from './pages/Products';

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const getSectionTitle = (section) => {
    const titles = {
      dashboard: 'Dashboard',
      orders: 'Pedidos',
      customers: 'Clientes',
      products: 'Produtos',
      analytics: 'Análises',
      reports: 'Relatórios',
      settings: 'Configurações'
    };
    return titles[section] || 'Dashboard';
  };

  const getSectionSubtitle = (section) => {
    const subtitles = {
      dashboard: 'Visão geral do seu negócio',
      orders: 'Gerencie todos os pedidos',
      customers: 'Base de clientes',
      products: 'Catálogo de produtos',
      analytics: 'Métricas e insights',
      reports: 'Relatórios detalhados',
      settings: 'Configurações do sistema'
    };
    return subtitles[section] || '';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'customers':
        return <Customers />;
      case 'products':
        return <Products />;
      case 'analytics':
        return (
          <motion.div 
            className="p-6 flex items-center justify-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Análises</h3>
              <p className="text-gray-500">Seção em desenvolvimento...</p>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div 
            className="p-6 flex items-center justify-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Relatórios</h3>
              <p className="text-gray-500">Seção em desenvolvimento...</p>
            </div>
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div 
            className="p-6 flex items-center justify-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configurações</h3>
              <p className="text-gray-500">Seção em desenvolvimento...</p>
            </div>
          </motion.div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="ml-64">
        <Header 
          title={getSectionTitle(activeSection)}
          subtitle={getSectionSubtitle(activeSection)}
        />
        
        <main className="min-h-screen">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;