import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { EmptyState } from 'components/EmptyState';
import { Layout } from 'components/Layout';
import { AddSiteModal } from 'components/Modals';

export function DashboardTemplate() {
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
        {/* {children} */}
        <EmptyState />
      </Flex>
    </Layout>
  );
}
