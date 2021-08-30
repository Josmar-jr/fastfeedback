import React from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Divider, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';

const Feedback = ({ author, text, createdAt }: any) => (
  <Box borderRadius={4} maxWidth="700px" w="full">
    <Text color="#CBD8F9" mb={4}>
      {text}
    </Text>
    <Heading display="flex" size="sm" as="h3" mb={0} fontWeight="medium">
      <FiUser style={{ marginRight: '6px' }} />
      {author}
    </Heading>
    <Text color="#98a8d3" fontSize="xs">
      {format(parseISO(createdAt), 'PPpp')}
    </Text>
    <Divider borderColor="gray.200" backgroundColor="gray.200" mt={8} mb={8} />
  </Box>
);

export default Feedback;
