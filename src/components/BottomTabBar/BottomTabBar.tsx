import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components';
import Home from '../Icon/Home';
import Search from '../Icon/Search';
import Location from '../Icon/Location';

const BottomNavigatorContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  bottom: 5%;
  margin: 0 5%;
  border-radius: 25px;
  background-color: #ffffff;
`;

const BottomNavigatorItem = styled(TouchableOpacity)`
  flex: 1;
`;

const BottomNavigatorIconContainer = styled(View)`
  display: flex;
  align-items: center;
`;

interface BottomNavigatorIconProps {
  isFocused: boolean;
}

const BottomNavigatorIcon = styled(View)<BottomNavigatorIconProps>`
  padding: 26px;
  border-bottom-width: ${(props) => (props.isFocused ? '2px' : '0')};
  border-bottom-color: #000066;
`;

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BottomNavigatorContainer
      style={{
        shadowColor: 'rgba(0,0,0,0.17)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon;

        switch (index) {
          case 0:
            icon = <Home />;
            break;
          case 1:
            icon = <Search />;
            break;
          case 2:
            icon = <Location />;
        }

        return (
          <BottomNavigatorItem
            accessibilityRole="button"
            accessibilityState={
              isFocused ? {selected: true} : {selected: false}
            }
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}>
            <BottomNavigatorIconContainer>
              <BottomNavigatorIcon isFocused={isFocused}>
                {icon && icon}
              </BottomNavigatorIcon>
            </BottomNavigatorIconContainer>
          </BottomNavigatorItem>
        );
      })}
    </BottomNavigatorContainer>
  );
};

export default BottomTabBar;
