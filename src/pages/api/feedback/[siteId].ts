import { NextApiRequest, NextApiResponse } from 'next';
import { getAllFeedbacks } from 'services/admin/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedbacks(siteId);

  if (error) {
    return res.status(500).json({ error: error });
  }

  return res.status(200).json({ feedback });
};
