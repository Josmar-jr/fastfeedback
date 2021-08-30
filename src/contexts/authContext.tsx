import Router from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { createUser } from 'services/db';

import { firebase, auth } from 'services/firebase';
import { destroyCookie, setCookie } from 'nookies';
import api from 'services/api';

export type User = {
  uid: string;
  name: string;
  email: string;
  token: string;
  provider: string;
  photoUrl: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => verifyUser(user));

    return () => unsubscribe();
  }, []);

  function verifyUser(rawUser: any) {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);

      setCookie(undefined, 'fastFeedback.token', token, {});
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(user);
      return user;
    } else {
      signOut();
    }
  }

  async function signInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();

    const result = await auth.signInWithPopup(provider);

    const { user: newUser } = result;

    verifyUser(newUser);
  }

  async function signOut() {
    await auth.signOut();
    destroyCookie(undefined, 'fastFeedback.token');

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGithub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const formatUser = (user: any): User => {
  return {
    uid: user?.uid,
    email: user?.email,
    token: user?._lat,
    name: user?.displayName,
    provider: user?.providerData[0].providerId,
    photoUrl: user?.photoURL,
  };
};
