import React, { FC, ReactElement, useRef, useState } from 'react';
import { Colors } from '../../assets/Colors';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleProp,
  Image,
  ViewStyle
} from 'react-native';

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
  children?: React.ReactNode;
  dropDownStyle?: StyleProp<ViewStyle>,
  viewStyle?: StyleProp<ViewStyle>,
}

const Picker: FC<Props> = ({ label, data, onSelect, children, dropDownStyle, viewStyle }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setVisible(false);
    setSelected(item);
    onSelect(item);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      {item.icon?<Image ssource={item?.icon}/>:null}<Text style={[{color:item.color,fontSize:14}]}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, styles.shadow, { top: dropdownTop }, dropDownStyle]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => (
                <View
                  style={[
                    styles.line,
                    {
                      marginHorizontal: 5,
                    },
                  ]}
                />
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={[styles.button, viewStyle]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    alignSelf: 'baseline',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical:4,
  },
  overlay: {
    width: '100%',
    height: '100%',
    top:0
  },
  item: {
    padding: 5,
    minWidth:100
  },
  shadow: {
    backgroundColor: '#fff',
    shadowColor: Colors.LightGray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  line: {
    height: 0.4,
    backgroundColor: Colors.LightGray,
  }
});

export default Picker;