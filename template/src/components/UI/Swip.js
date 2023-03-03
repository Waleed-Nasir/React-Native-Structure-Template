import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Colors } from "../../assets/Colors";
import { Heart, HeartFill } from "../../assets/Images";
export class Swipe extends Component {
  renderLeftActions = (props) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.makeItFav()}
        style={{
          backgroundColor: Colors.LightGray,
          left: 25,
          width: 80,
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          marginVertical: 5,
          borderBottomRightRadius: 14,
          borderTopRightRadius: 14,
          zIndex: 100000,
        }}
      >
        {/* <Heart color={"white"} /> */}
        <Image
          source={this.props.is_fav === 1?HeartFill:Heart}
          // style={{height:34,width:34}}
          resizeMode={"center"}
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <Swipeable
        renderRightActions={this.renderLeftActions}
        {...this.props}
        ref={this.ref}
      />
    );
  }
}
