import { NextApiRequest, NextApiResponse } from 'next';
import db from 'services/firebase-admin';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await db.collection('sites').get();
  let sites: object[] = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return res.status(200).json({ sites });
};
