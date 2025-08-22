export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('pt-BR').format(value);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
};

export const formatPercentage = (value) => {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const getStatusColor = (status) => {
  const colors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getStatusLabel = (status) => {
  const labels = {
    completed: 'Concluído',
    pending: 'Pendente',
    processing: 'Processando',
    cancelled: 'Cancelado',
    active: 'Ativo',
    inactive: 'Inativo'
  };
  return labels[status] || status;
};