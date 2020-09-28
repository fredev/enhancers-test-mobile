import React from 'react';
import {FlatList, Text, View} from "react-native";
import DropShadow from "react-native-drop-shadow";
import formatDate from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";
import WeatherIcon from "../WeatherIcon";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const FlatListHourlyView = styled(View)`
  width: 100%;
  z-index: 3;
  margin-bottom: 20px;
`;

interface FlatListItemProps {
  isFirst: boolean;
  isLast: boolean;
}

const FlatListItem = styled(View)<FlatListItemProps>`
  width: 148px;
  align-items: center;
  margin: 0 ${(props) => props.isLast ? '16px' : '8px'} 0 ${(props) => props.isFirst ? '16px' : '8px'};
  padding-top: 16px;
  padding-bottom: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  overflow: hidden;
`;

const DayText = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 22px;
  letter-spacing: 0;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const TemperatureText = styled(Text)`
  margin-top: 5px;
  margin-bottom: 18px;
  font-family: 'Poppins-SemiBold';
  font-size: 36px;
  letter-spacing: 0;
  line-height: 55px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const WeatherDaily: React.FC = () => {
  const {weather} = useSelector(
    (state: RootState) => state.weather.cities[state.weather.selected],
  );

  return (
    <FlatListHourlyView>
      <FlatList
        horizontal
        data={weather.daily}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          const isLast = index === weather.daily.length - 1;

          return (
            <FlatListItem
              isFirst={isFirst}
              isLast={isLast}
              key={item.id}
            >
              <DropShadow
                style={{
                  shadowColor: 'rgba(0, 0, 0, 0.17)',
                  shadowOffset: {
                    width: 5,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                }}>
                <DayText>
                  {formatDate(fromUnixTime(item.datetime), 'eeee')}
                </DayText>
                <TemperatureText>{item.temp}°</TemperatureText>
                <WeatherIcon id={item.id} />
              </DropShadow>
            </FlatListItem>
          );
        }}
      />
    </FlatListHourlyView>
  )
}

export default WeatherDaily;
