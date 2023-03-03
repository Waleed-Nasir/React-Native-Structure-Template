import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { screens } from '../../config';
import styles from './walkthrough.styles';

const WalkThrough = (props) => {
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  const slides = [
    {
      key: 'screen1',
      title: i18('Intro.title1'),
      text: i18('Intro.description1'),
      backgroundColor: 'white',
      backgroundImage:'https://i.pinimg.com/originals/9f/30/25/9f302537afba5ec7f879230344435fb6.jpg'
    },
    {
      key: 'screen2',
      title: i18('Intro.title2'),
      text: i18('Intro.description2'),
      backgroundColor: 'white',
      backgroundImage:'https://i.pinimg.com/originals/71/3b/f5/713bf58c9fa3d2518bcefcc1aa8408c6.png'
    },
    {
      key: 'screen3',
      title: i18('Intro.title3'),
      text: i18('Intro.description3'),
      backgroundColor: 'white',
      backgroundImage:'https://i.pinimg.com/originals/df/39/19/df3919e74d5d84c12927d4edcb33794a.jpg'
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <ImageBackground source={{uri:item.backgroundImage}} style={styles.itemContainer}>
        {index < 2 && (
          <TouchableOpacity style={styles.skip} onPress={() => props.navigation.navigate(screens.drawerStack)}>
            <Text
              style={{
                color: 'yellow',
              }}
              >
              {i18('Intro.skip')}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </ImageBackground>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
       <Icon name="rocket" size={24} color="#fff" />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => props.navigation.navigate(screens.drawerStack)}>
      <Icon name="rocket" size={24} color="#fff" />
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      showNextButton={true}
      showDoneButton={true}
      onSkip={() => props.navigation.navigate(screens.home)}
      activeDotStyle={{ backgroundColor: 'yellow' }}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
    />
  );
};
export default (WalkThrough);
