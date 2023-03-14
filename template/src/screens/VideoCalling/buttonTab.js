import React, { useState } from 'react';
import { Box, useDisclose, IconButton, Stagger, HStack, Center, NativeBaseProvider, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import {
    AppButton, Input,
} from '../../components';

import {
    TextInput,
    View,
} from 'react-native';
const ButtonTab = ({ onStartWebcam, onStartCall, onJoinCall, onEndCall, webcamStarted, remoteStream, value, onChangeText }) => {
    const [joinCall, setJoinCall] = useState(false)
    return (<Box bg={'theme.bacground'}>
        <HStack justifyContent='space-evenly' flex={1} alignItems={'center'} width={'100%'} paddingY={4} paddingX={3} bg={'theme.dark'}>
            {/* {!webcamStarted ? <AppButton onPress={onStartWebcam}>Start Call</AppButton> : null} */}
            {!remoteStream && webcamStarted ?
                <View style={{ flexDirection: 'row' }}>
                    {webcamStarted && !value && !joinCall ? <AppButton onPress={onStartCall} {...{ style: { marginRight: 10, width: "48%", height: 35 }, size: 'sm' }} >Start New Call</AppButton> : null}
                    {webcamStarted && !value && !joinCall ? <AppButton onPress={() => { setJoinCall(true) }} {...{ style: { width: "48%", height: 35 }, size: 'sm' }} >Join a Call</AppButton> : null}
                    {joinCall ? <IconButton variant="solid" onPress={onJoinCall} borderRadius="full" size="lg" bg="theme.button" icon={<Icon size={24} color={'white'} name="phone" />} /> : null}
                    {joinCall || value ? <TextInput
                        value={value}
                        placeholder="callId"
                        style={{ borderWidth: 1, padding: 5, flex: 1 }}
                        onChangeText={onChangeText}
                    /> : null}
                </View>
                : null}
            {remoteStream ? <IconButton variant="solid" onPress={onStartCall} borderRadius="full" size="lg" bg="theme.button" icon={<Icon size={24} color={'white'} name="videocam" />} /> : null}
            {remoteStream ? <IconButton variant="solid" onPress={onStartCall} borderRadius="full" size="lg" bg="theme.button" icon={<Icon size={24} color={'white'} name="mic" />} /> : null}
            {remoteStream ? <IconButton variant="solid" onPress={onStartCall} borderRadius="full" size="lg" bg="theme.button" icon={<Icon size={24} color={'white'} name="call-end" />} /> : null}
        </HStack>
    </Box>)
};


export default ButtonTab;