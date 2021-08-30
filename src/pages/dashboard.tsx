import { NextPage } from 'next';

import { useAuth } from 'hooks/useAuth';
import { useFetch } from 'hooks/useFetch';

import { DashboardTemplate } from 'templates/Dashboard';

import { SiteTableSkeleton } from 'components/SiteTable/Skeleton';
import { EmptyState } from 'components/EmptyState';
import { SiteTable } from 'components/SiteTable';
import { parseCookies } from 'nookies';

type Data = {
  id: string;
  authorId: string;
  author: string;
  createdAt: string;
  name: string;
  url: string;
};

export interface SiteData {
  sites: Data[] | undefined;
}

const Dashboard: NextPage = () => {
  const { user } = useAuth();
  // const { data } = useFetch<SiteData>('sites', user?.token);

  const { data } = useFetch<SiteData>('sites');

  if (!data) {
    return (
      <DashboardTemplate>
        <SiteTableSkeleton />
      </DashboardTemplate>
    );
  }

  return (
    <>
      <DashboardTemplate>
        {data?.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
      </DashboardTemplate>
    </>
  );
};

export default Dashboard;
