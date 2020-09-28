import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

interface HeaderProps {
  left?: ReactNode;
  center: string | ReactNode;
  right?: ReactNode;
}

const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

const CenterContainer = styled(View)`
  flex-grow: 1;
  justify-content: center;
`;

const Header: React.FC<HeaderProps> = ({left, center, right}) => {
  return (
    <HeaderContainer>
      {left}
      <CenterContainer>{center}</CenterContainer>
      {right}
    </HeaderContainer>
  );
};

export default Header;
