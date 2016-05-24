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
      <NavItem color="black" href="https://jch254.com" children="© Jordan Hornblow 2016" />
    </Toolbar>
  </Box>
);

export default Footer;
