import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react';

import { Layout } from 'components/Layout';
import { AddSiteModal } from 'components/Modals';
import { ReactNode } from 'react';

type DashboardTemplateProps = {
  children: ReactNode;
};

export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <Layout>
      <Flex
        margin="0 auto"
        direction="column"
        w="full"
        maxW="1060px"
        m="0 auto"
        px={8}
        py={20}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>
        {children}
      </Flex>
    </Layout>
  );
}
