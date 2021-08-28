import { useAuth } from 'hooks/useAuth';
import { NextPage } from 'next';
import { DashboardTemplate } from 'templates/Dashboard';

const Dashboard: NextPage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return <DashboardTemplate />;
};

export default Dashboard;
