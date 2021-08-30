import { compareDesc, parseISO } from 'date-fns';
import { database } from './firebase';

export async function getAllFeedbacks(siteId: any) {
  try {
    const snapshot = await database
      .collection('feedbacks')
      .where('siteId', '==', siteId)
      .get();

    const feedback: any = [];

    snapshot.forEach((opinion) => {
      feedback.push({ id: opinion.id, ...opinion.data() });
    });

    feedback.sort((a: any, b: any) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await database.collection('sites').get();
    const sites: any = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}
export async function getUserSites(userId: string) {
  try {
    const snapshot = await database
      .collection('sites')
      .where('authorId', '==', userId)
      .get();
    const sites: any = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}
