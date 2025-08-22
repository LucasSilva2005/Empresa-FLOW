import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import StatCard from '../components/StatCard';
import OrdersTable from '../components/OrdersTable';
import SalesChart from '../components/SalesChart';
import TopProducts from '../components/TopProducts';
import { dashboardData, recentOrders, topProducts, salesData } from '../mock/data';

const Dashboard = () => {
  const stats = [
    {
      title: 'Receita Total',
      value: dashboardData.revenue.current,
      previousValue: dashboardData.revenue.previous,
      icon: DollarSign
    },
    {
      title: 'Pedidos',
      value: dashboardData.orders.current,
      previousValue: dashboardData.orders.previous,
      icon: ShoppingCart
    },
    {
      title: 'Clientes',
      value: dashboardData.customers.current,
      previousValue: dashboardData.customers.previous,
      icon: Users
    },
    {
      title: 'Produtos',
      value: dashboardData.products.current,
      previousValue: dashboardData.products.previous,
      icon: Package
    }
  ];

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            previousValue={stat.previousValue}
            icon={stat.icon}
            index={index}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart data={salesData} />
        <TopProducts products={topProducts} />
      </div>

      {/* Orders Table */}
      <OrdersTable orders={recentOrders} />
    </motion.div>
  );
};

export default Dashboard;