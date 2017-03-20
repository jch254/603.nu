import React from 'react';
import { Box } from 'reflexbox';
import moment from 'moment';
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass';

const Footer = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="white">
      <Space auto />
      <NavItem color="black" href="https://jch254.com" style={{ fontWeight: 'normal', fontSize: '12px' }}>
        {`© Jordan Hornblow ${moment().year()}`}
      </NavItem>
    </Toolbar>
  </Box>
);

export default Footer;
