import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

const IconButtonContainer = styled(View)`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

interface IconButtonProps {
  icon: ReactNode;
  onPress(): void;
}

const IconButton: React.FC<IconButtonProps> = ({icon, onPress}) => {
  return (
    <IconButtonContainer>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onPress}
        onLongPress={onPress}>
        {icon}
      </TouchableOpacity>
    </IconButtonContainer>
  );
};

export default IconButton;
