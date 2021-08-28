import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Icon } from 'components/Icons';
import { useAuth } from 'hooks/useAuth';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Flex
      as="header"
      top={0}
      css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
      width="full"
      zIndex="docked"
      position="sticky"
      borderBottom="1px solid gray"
      bgColor="black.400"
    >
      <Flex
        maxW="1250px"
        w="full"
        margin="0 auto"
        align="center"
        justify="space-between"
        px="4"
        py="2"
      >
        <Icon name="logo" width="50" height="50" />
        <Flex>
          <Menu>
            <MenuButton
              as={Avatar}
              src={user?.photoUrl}
              alt={user?.name}
              size="sm"
              cursor="pointer"
            />
            <MenuList bgColor="black.300">
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={signOut}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}
