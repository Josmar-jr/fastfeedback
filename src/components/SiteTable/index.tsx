import { useMemo } from 'react';
import Link from 'next/link';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Box, Link as LinkChakra } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { SiteData } from 'pages/dashboard';

export const SiteTable = ({ sites }: SiteData) => {
  const formattedDataSites = useMemo(() => {
    const newData = sites?.map((site) => ({
      ...site,
      createdAt: format(new Date(site.createdAt), 'dd MM yyyy', {
        locale: ptBR,
      }),
    }));

    return newData;
  }, [sites]);

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </thead>
      <tbody>
        {formattedDataSites?.map((site) => (
          <Box as="tr" key={site.id}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link href="/feedback/[siteId]" as={`/feedback/${site.id}`}>
                <LinkChakra>View Feedback</LinkChakra>
              </Link>
            </Td>
            <Td>{site.createdAt}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
