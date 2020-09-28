import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const StyledHeaderTitle = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 32px;
  letter-spacing: 0;
  line-height: 48px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const HeaderTitle: React.FC = ({children}) => (
  <StyledHeaderTitle>{children}</StyledHeaderTitle>
);

export default HeaderTitle;
