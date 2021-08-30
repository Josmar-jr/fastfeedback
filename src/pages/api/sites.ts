import { auth } from 'services/admin/firebase';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserSites } from 'services/admin/db';
import { parseCookies } from 'nookies';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { ['fastFeedback.token']: token } = parseCookies({ req });
  const { uid } = await auth.verifyIdToken(token);

  const { sites, error } = await getUserSites(uid);

  if (error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ sites });
};
