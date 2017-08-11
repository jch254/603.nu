import React from 'react';
import {
  Banner,
  Heading,
} from 'rebass';

const Header = () => (
  <div className="color-change-5x">
    <Banner
      style={{ minHeight: '66vh', background: 'none' }}
      m={0}
    >
      <Heading size={1} big>
        603.nu
      </Heading>
      <Heading size={2}>
        Web Experiments
      </Heading>
    </Banner>
  </div>
);

export default Header;
