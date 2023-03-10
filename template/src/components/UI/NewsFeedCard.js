import React, { Component } from "react";
import {
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, Flex, Image, View } from 'native-base';
import Text from "./Text";

const NewsFeedCard = () => {
    return (
        <Card bg={'theme.background'}>
            <Flex direction="row" mb="2.5" mt="1.5">
                <Image size={30} borderRadius={100} source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }} />
                <View flex={1} marginX={3}>
                    <Text>Varun </Text>
                    <Text note>Jan 15, 2018</Text>
                </View>
            </Flex>
            <Image height={200} width={'100%'} source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }} style={{ height: 200, width: null, flex: 1 }} />
            <Text>
                <Text style={{ fontWeight: "900" }}>varun{': '}</Text>
                Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
            </Text>
            <Flex direction="row" justifyContent={'space-between'} alignItems={'center'} pt={4}>
                <Text><Icon size={14} name="heart" /> Like</Text>
                <Text><Icon size={14} name="comments" /> Comments</Text>
                <Text><Icon size={14} name="share" /> Share</Text>
            </Flex>
        </Card>
    );
}
export default NewsFeedCard;
