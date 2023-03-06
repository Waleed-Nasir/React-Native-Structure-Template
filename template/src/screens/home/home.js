import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import HorizontalSlider from '../../components/Layout/HorizontalSlider';
import Layout from '../../components/Layout/Layout';
import VerticalSlider from '../../components/Layout/VerticalSlider';
import AppButton from '../../components/UI/Button';
import Chips from '../../components/UI/Chips';
import Header from '../../components/UI/Header';
import ICON from '../../components/UI/Icon';
import Input from '../../components/UI/Input';
import Item from '../../components/UI/Item';
import Product from '../../components/UI/Product';
import SingleProduct from '../../components/UI/SingleProduct';
import Text from '../../components/UI/Text';
import { FacebookButton, GoogleButton, MenuHeader } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './home.styles';

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


          <View style={[styles.View, styles.ViewColumn]}>
            <Text>Buttons Area</Text>
            <Chips image={{ uri: 'https://i.pinimg.com/750x/a7/fe/14/a7fe14f37ae69ce4680d3d654f069185.jpg' }} title={'Chips'} />
          </View>
          <View style={[styles.ViewColumn]}>
            <Text>Icons Buttons Area</Text>
            <View style={[styles.View, { width: '100%', justifyContent: 'flex-start' }]}>
              <ICON icon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }} />
              <ICON icon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }} />
              <ICON icon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }} />
              <ICON icon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }} />
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
                  bg: `theme.200`,
                  _hover: {
                    bg: `theme.200:alpha.80`,
                  },
                  _pressed: {
                    bg: `theme.200:alpha.80`,
                  },
                  style: { width: "45%" },
                }}
              >
                NO
              </AppButton>
              <AppButton
                {...{
                  bg: `theme.100`,
                  _hover: {
                    bg: `theme.100:alpha.80`,
                  },
                  _pressed: {
                    bg: `theme.100:alpha.80`,
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
            <Input label='Email' placeholder='ENTER EMAIL' leftIcon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }}
              rightIcon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }}
            />
            <Input label='PASSWORD' placeholder='ENTER PASSWORD'
              InputProps={{

                secureTextEntry: true,
                placeholder: "********",
              }}
              rightIcon={{ uri: 'https://thenounproject.com/api/private/icons/1581155/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkALLRh6U0dDMPZ1X28BizcN-wOG3nyX-G4-_HTcRH95tMGyVqfq9QbFAUmg_oampGlVfl_NuBChcRzt3TRJC055VQkw%3D%3D' }}
            />
          </View>
          <View style={styles.View}>
            <SingleProduct
              title={'Product Sample'}
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
          {/* <View style={styles.buttonContainer}>
        <FacebookButton />
      </View> */}
        </View>
      </Layout>
    </>
  );
};

export default (Home);
