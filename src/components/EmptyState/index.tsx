import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AddSiteModal } from '../Modals';

export function EmptyState() {
  return (
    <Flex
      w="full"
      bgColor="#10254C"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven’t added any sites.
      </Heading>
      <Text mb={4}>Let’s get started.</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  );
}
