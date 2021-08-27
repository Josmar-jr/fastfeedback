import { useAuth } from 'hooks/useAuth';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { signOut, signInWithGithub, user } = useAuth();

  return (
    <div>
      <h1>Login application: </h1>
      <button onClick={signInWithGithub}>Login</button>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
};

export default Home;
