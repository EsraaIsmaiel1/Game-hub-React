import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by
      </MenuButton>
      <MenuList>
        <MenuItem>12</MenuItem>
        <MenuItem>12</MenuItem>
        <MenuItem>12</MenuItem>
        <MenuItem>12</MenuItem>
        <MenuItem>12</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
