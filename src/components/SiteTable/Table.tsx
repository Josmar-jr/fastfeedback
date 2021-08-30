import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const Th = (props: any) => (
  <Text
    as="th"
    textTransform="uppercase"
    fontSize="xs"
    bgColor="blue.700"
    fontWeight="medium"
    px={4}
    {...props}
  />
);

export const Td = (props: any) => (
  <Box
    as="td"
    color="white"
    p={4}
    borderBottom="1px solid"
    borderBottomColor="black.400"
    {...props}
  />
);

export const Tr = (props: any) => (
  <Box
    as="tr"
    backgroundColor="gray.50"
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
);

export const Table = (props: any) => {
  return (
    <Box
      as="table"
      textAlign="left"
      backgroundColor="blue.700"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  );
};
