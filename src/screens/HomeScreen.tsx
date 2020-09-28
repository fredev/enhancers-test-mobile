import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Container from '../components/Container';
import AddCityButton from '../components/AddCityButton';
import WeatherListItem from '../components/WeatherListItem';
import {RootState} from '../store/rootReducer';
import {selectCity} from '../store/slices/weather';

const Title = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 28px;
  letter-spacing: 0;
  line-height: 42px;
  color: ${(props) => props.theme.colors.primary};
`;

const AddCityView = styled(View)`
  margin-top: 30px;
  padding: 18px;
`;

const FlatListView = styled(View)`
  width: 100%;
`;

const HomeScreen: React.FC = () => {
  const {cities} = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onCityPress = (index: number) => () => {
    dispatch(selectCity(index));
    navigation.navigate('Weather');
  };

  return (
    <Container>
      <Title>Good morning!</Title>
      <Title>Mario</Title>
      <AddCityView>
        <AddCityButton />
      </AddCityView>

      <FlatListView>
        <FlatList
          data={cities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <WeatherListItem
              item={item}
              key={index}
              onPress={onCityPress(index)}
            />
          )}
        />
      </FlatListView>
    </Container>
  );
};

export default HomeScreen;
