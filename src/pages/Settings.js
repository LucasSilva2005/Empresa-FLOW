import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe } from 'lucide-react';

const Settings = () => {
  const settingsCategories = [
    {
      title: 'Perfil da Empresa',
      description: 'Informações básicas da empresa',
      icon: User,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Notificações',
      description: 'Configurar alertas e notificações',
      icon: Bell,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Segurança',
      description: 'Configurações de segurança e privacidade',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Aparência',
      description: 'Personalizar tema e layout',
      icon: Palette,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Idioma e Região',
      description: 'Configurações de localização',
      icon: Globe,
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.h1 
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Configurações
        </motion.h1>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Personalize seu sistema de gestão
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <SettingsIcon className="w-8 h-8 text-gray-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Configurações Avançadas</h3>
        <p className="text-gray-600 mb-4">
          Painéis de configuração detalhados serão implementados aqui.
        </p>
        <p className="text-sm text-gray-500">
          Cada categoria acima terá sua própria página com opções específicas de configuração.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Settings;