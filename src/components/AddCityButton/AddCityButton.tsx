import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import PlusBlue from '../Icon/PlusBlue';

const AddCityButtonContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const AddCityButtonText = styled(Text)`
  font-family: 'Poppins-Medium';
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
`;

const AddCityButtonImage = styled(View)`
  padding-right: 15px;
`;

const AddCityButton: React.FC = () => {
  const onPress = () => {
    console.warn('Add City!');
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      onLongPress={onPress}>
      <AddCityButtonContainer>
        <AddCityButtonImage>
          <PlusBlue />
        </AddCityButtonImage>
        <AddCityButtonText>Aggiungi città</AddCityButtonText>
      </AddCityButtonContainer>
    </TouchableOpacity>
  );
};

export default AddCityButton;
