import Feedback from 'components/Feedback';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getAllFeedbacks, getAllSites } from 'services/admin/db';
import { TemplateSiteFeedback } from 'templates/DynamicSiteId';

type Feedback = {
  author: string | undefined;
  authorId: string | undefined;
  createAt: string;
  id?: string;
  provider: string | undefined;
  rating?: number;
  siteId: string | string[] | undefined;
  status: string;
  text: string;
};

export type SiteFeedbackProps = {
  feedback: Feedback[];
};

const SiteFeedback: NextPage<SiteFeedbackProps> = ({ feedback }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>carregando ....</p>;
  }

  return <TemplateSiteFeedback feedback={feedback} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { sites } = await getAllSites();
  const paths = sites.map((site: any) => ({
    params: { siteId: site.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { feedback } = await getAllFeedbacks(params?.siteId);

  if (!feedback) {
    return { notFound: true };
  }

  return {
    props: {
      feedback: feedback,
    },
    revalidate: 1,
  };
};

export default SiteFeedback;
