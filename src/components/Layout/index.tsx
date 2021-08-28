import { Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minHeight="100vh" bgColor="black.400">
      <Header />
      <Container as="main" minW="full">
        {children}
      </Container>
    </Flex>
  );
}
