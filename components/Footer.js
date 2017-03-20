import React from 'react';
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass';
import { Box } from 'reflexbox';

const Footer = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="white">
      <Space auto />
      <NavItem color="black" href="https://jch254.com" style={{ fontWeight: 'normal', fontSize: '12px' }}>
        © Jordan Hornblow 2016
      </NavItem>
    </Toolbar>
  </Box>
);

export default Footer;
