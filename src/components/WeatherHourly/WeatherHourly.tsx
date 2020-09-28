import React, {useState} from 'react';
import {FlatList, Text, View} from "react-native";
import formatDate from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";


const FlatListDailyView = styled(View)`
  width: 100%;
  z-index: 3;
  margin-bottom: 20px;
`;

interface TextProps {
  first: boolean;
}

const TimeText = styled(Text)<TextProps>`
  padding: 6px 0;
  font-family: ${(props) => (props.first ? 'Poppins-Bold' : 'Poppins-Light')};
  font-size: ${(props) => (props.first ? '18px' : '12px')};
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const TempText = styled(Text)<TextProps>`
  font-family: ${(props) => (props.first ? 'Poppins-Bold' : 'Poppins-Light')};
  font-size: ${(props) => (props.first ? '25px' : '20px')};
  letter-spacing: 0;
  line-height: 38px;
  text-align: right;
  color: ${(props) => props.theme.colors.secondary};
`;

const WeatherHourly: React.FC = () => {
  const {weather} = useSelector(
    (state: RootState) => state.weather.cities[state.weather.selected],
  );

  const [firstIndex, setFirstIndex] = useState(0);
  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems && viewableItems.viewableItems.length > 0) {
      setFirstIndex(viewableItems.viewableItems[0].index);
    }
  });

  const viewConfigRef = React.useRef({itemVisiblePercentThreshold: 25});

  return (
    <FlatListDailyView>
      <FlatList
        contentContainerStyle={{paddingRight: 300}}
        horizontal
        data={weather.hourly}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          const isLast = index === weather.daily.length - 1;

          let time =
            index > 0
              ? formatDate(fromUnixTime(item.datetime), 'h aaaa')
              : 'NOW';

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 20,
                width: 70,
                marginLeft: isFirst ? 16 : 8,
                marginRight: isLast ? 16 : 8,
              }}
              key={item.id}>
              <TimeText first={index === firstIndex}>{time}</TimeText>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  borderWidth: index === firstIndex ? 12 : 8,
                  borderRadius: 100,
                  borderColor: 'white',
                }}
              />
              <TempText first={index === firstIndex}>{item.temp}°</TempText>
            </View>
          );
        }}
      />
    </FlatListDailyView>
  )
}

export default WeatherHourly;
