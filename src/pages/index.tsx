import { Button, Flex, FormControl, Heading } from '@chakra-ui/react';
import { Icon } from 'components/Icons';
import { useAuth } from 'hooks/useAuth';
import type { NextPage } from 'next';
import Router from 'next/router';

const Home: NextPage = () => {
  const { signOut, signInWithGithub, user } = useAuth();

  async function LoginInSystem() {
    if (!user) await signInWithGithub();

    Router.push('/dashboard');
  }

  return (
    <Flex
      bgColor="black.400"
      direction="column"
      justify="center"
      align="center"
      minH="100vh"
    >
      <FormControl
        maxW="340px"
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
      >
        {/* <Icon name="logo" width={60} height={60} /> */}
        <Heading mb="4">Login application: </Heading>
        <Button onClick={LoginInSystem}>
          <Icon
            name="github"
            width={30}
            height={30}
            style={{ marginRight: '8px' }}
          />
          Login with Github
        </Button>
      </FormControl>
    </Flex>
  );
};

export default Home;
