import { RegisterSiteDataTypes } from 'components/Modals';
import { User } from 'contexts/authContext';
import { firestore } from './firebase';

export function createUser(uid: string, data: User) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ ...data }, { merge: true });
}

export function registerNewSite(data: RegisterSiteDataTypes) {
  return firestore.collection('sites').add(data);
}
