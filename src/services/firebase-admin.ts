import admin from 'firebase-admin';

const firebaseConfig = {
  credential: admin.credential.cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
};

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}
export default admin.firestore();
