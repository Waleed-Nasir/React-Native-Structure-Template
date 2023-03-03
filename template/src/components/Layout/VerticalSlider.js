/**
 * Sample React Native VerticalSlider
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { FlatList, Heading } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../theme';
// import {ArrowSquareRight} from '../../assets/Images';
import ICON from '../UI/Icon';
import Text from '../UI/Text';

const { colors } = theme
const ArrowSquareRight = null
const VerticalSlider = ({
  showViewAll = false,
  title = '',
  data = [],
  row = 0,
  Component = () => { },
  style = {},
  listStyle = {},
}) => {
  return (
    <View style={[styles.VerticalList, style]}>
      {title ? (
        <View style={styles.VerticalHeadingList}>
          <Heading fontSize={14} bold>
            {title}
          </Heading>
          {showViewAll ? (
            <View style={styles.VerticalViewAll}>
              <Text style={styles.VerticalViewAllText}>View All</Text>
              <ICON icon={ArrowSquareRight} p={0} />
            </View>
          ) : null}
        </View>
      ) : null}
      <View>
        <FlatList
          {...listStyle}
          data={data}
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 10 }}
          ListHeaderComponent={() => (
            <View
              style={{
                padding: 5,
              }}
            />
          )}
          ListFooterComponent={() => (
            <View
              style={{
                padding: 5,
              }}
            />
          )}
          renderItem={({ item, index }) => (
            <Component {...{ ...item, index: index, row: row }} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  VerticalList: {
    width: '100%',
  },
  VerticalHeadingList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  VerticalViewAll: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  VerticalViewAllText: {
    fontSize: 12,
    color: colors.white,
    paddingHorizontal: 5,
  },
});

export default VerticalSlider;
