import React from 'react';
import Image from 'next/image';

import { MainHeader, HomeLink } from './styles';

import UOLLogo from '../../../public/uol-logo-white.svg';

const Header: React.FC = () => {
  return (
    <MainHeader>
      <HomeLink href="/">
        <Image src={UOLLogo} alt="UOL Logo" width={100} />
      </HomeLink>
    </MainHeader>
  );
};

export default Header;
