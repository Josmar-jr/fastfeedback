import { RegisterSiteDataTypes } from 'components/Modals';
import { User } from 'contexts/authContext';
import { NewFeedback } from 'templates/DynamicSiteId';
import { firestore } from './firebase';

export type createUserType = {
  uid: string;
  name: string;
  email: string;
  provider: string;
  photoUrl: string;
};

export function createUser(uid: string, data: createUserType) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ ...data }, { merge: true });
}

export function registerNewSite(data: RegisterSiteDataTypes) {
  return firestore.collection('sites').add(data);
}

export function createFeedback(newFeedback: NewFeedback) {
  return firestore.collection('feedbacks').add(newFeedback);
}
