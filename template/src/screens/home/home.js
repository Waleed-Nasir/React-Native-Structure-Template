import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import {
  FacebookButton, GoogleButton,
  HorizontalSlider,
  Layout,
  VerticalSlider,
  AppButton,
  Chips,
  Header,
  ICON,
  Input,
  Item,
  Product,
  SingleProduct,
  Text,
  Card,
  CardSwiper,
  NewsFeedCard,
} from '../../components';

import styles from './home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { screens } from '../../config';

const Home = (props) => {
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <>
      <Header
        LeftText={<Icon name={'bars'} size={24} color={'black'} />}
        PressLeft={() => props.navigation.toggleDrawer()}
        CenterText={i18('Home.title')} {...props} />

      <Layout height={0}>
        <View style={styles.container}>
          <AppButton onPress={() => props.navigation.navigate(screens.MainNoBottomTabNavigator)}>Try VideoCalling</AppButton>
          <NewsFeedCard />
          <View style={[styles.View, styles.ViewColumn]}>
            <Text>Buttons Area</Text>
            <Chips image={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} title={'Chips'} />
          </View>
          <View style={[styles.ViewColumn]}>
            <Text>Icons Buttons Area</Text>
            <View style={[styles.View, { width: '100%', justifyContent: 'flex-start' }]}>
              <ICON icon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} />
              <ICON icon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} />
              <ICON icon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} />
              <ICON icon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} />
            </View>
          </View>
          <View style={[styles.View, styles.ViewColumn]}>
            <Text>Buttons Area</Text>
            <AppButton>Button</AppButton>
            <View style={[styles.ViewColumn, { width: '100%' }]}>
              <AppButton  {...{ style: { width: "100%", height: 40 }, size: 'md' }} >100% height:40</AppButton>
              <AppButton   {...{ style: { width: "75%", height: 40 }, size: 'md' }}>75% height:40</AppButton>
              <View style={[styles.View,]}>
                <AppButton   {...{ style: { width: "50%", height: 40 }, size: 'sm' }}>50% height:40</AppButton>
                <AppButton   {...{ style: { width: "25%", height: 40 }, size: 'xs' }}>25% height:40</AppButton>
              </View>
            </View>
            <View style={[styles.View, { justifyContent: 'space-between', width: '100%' }]}>
              <AppButton
                {...{
                  bg: `theme.danger`,
                  _hover: {
                    bg: `theme.danger:alpha.80`,
                  },
                  _pressed: {
                    bg: `theme.danger:alpha.80`,
                  },
                  style: { width: "45%" },
                }}
              >
                NO
              </AppButton>
              <AppButton
                {...{
                  bg: `theme.success`,
                  _hover: {
                    bg: `theme.success:alpha.80`,
                  },
                  _pressed: {
                    bg: `theme.success:alpha.80`,
                  },
                  style: { width: "45%" },
                }}
                {...{ style: { width: "45%" } }}
              >
                YES
              </AppButton>
            </View>
          </View>

          <View style={[styles.ViewColumn]}>
            <Text>Inputs Area</Text>
            <Input label='Email' placeholder='ENTER EMAIL' leftIcon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }}
              rightIcon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }}
            />
            <Input label='PASSWORD' placeholder='ENTER PASSWORD'
              InputProps={{

                secureTextEntry: true,
                placeholder: "********",
              }}
              rightIcon={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }}
            />
          </View>
          <View style={[styles.ViewColumn, { marginVertical: 20 }]}>
            <CardSwiper />
          </View>
          <View style={[styles.ViewColumn, { marginVertical: 20 }]}>
            <Card />
          </View>
          <View style={styles.View}>
            <SingleProduct
              title={'Product Sample'}
              subTitle={'Subtitle'}
              image={{ uri: 'https://i.pinimg.com/750x/81/8c/be/818cbe84101a8b0d8a9c87d6dafc9b81.jpg' }}
              index={0}
              id='33'
            />
          </View>
          <View style={styles.View}>
            <HorizontalSlider

              data={[1, 2, 3,]}
              Component={() => <Product
                title={'Product Sample'}
                image={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }}
                index={0}
                id='33'
              />}
            />


          </View>
          <View style={styles.View}>
            <Item
              title={'Product Sample'}
              image={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }}
              index={0}
              id='33'
            />
          </View>

          <GoogleButton />
          <FacebookButton />
          {/* <View style={styles.buttonContainer}>
      </View> */}
        </View>
      </Layout>
    </>
  );
};

export default (Home);
