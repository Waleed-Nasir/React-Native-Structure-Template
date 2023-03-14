import React, { useEffect, useRef } from 'react';

import {
    Button,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Dimensions,
    Pressable
} from 'react-native';

import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    mediaDevices,
} from 'react-native-webrtc';
import { useState } from 'react';
import { checkCameraPermission } from '../../helpers/permisions'
import firestore from '@react-native-firebase/firestore';
import { Layout } from '../../components';
import ButtonTab from './buttonTab';
import { Box, PresenceTransition } from 'native-base';
const { width, height } = Dimensions.get('screen')
const VideoCallScreen = () => {
    const [remoteStream, setRemoteStream] = useState(null);
    const [webcamStarted, setWebcamStarted] = useState(false);
    const [localStream, setLocalStream] = useState(null);
    const [channelId, setChannelId] = useState(null);
    console.log(channelId)
    const pc = useRef();
    const servers = {
        iceServers: [
            {
                urls: [
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302',
                ],
            },
        ],
        iceCandidatePoolSize: 10,
    };

    const startWebcam = async () => {
        checkCameraPermission()
        pc.current = new RTCPeerConnection(servers);

        const local = await mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        pc.current.addStream(local);
        setLocalStream(local);
        // const remote = new MediaStream();
        // setRemoteStream(remote);

        // Push tracks from local stream to peer connection
        local.getTracks().forEach(track => {
            console.log(pc.current.getLocalStreams());
            pc.current.getLocalStreams()[0].addTrack(track);
        });

        // Pull tracks from remote stream, add to video stream
        pc.current.ontrack = event => {
            event.streams[0].getTracks().forEach(track => {
                remote.addTrack(track);
            });
        };

        pc.current.onaddstream = event => {
            setRemoteStream(event.stream);
        };
        setWebcamStarted(true);
    };

    const startCall = async () => {
        const channelDoc = firestore().collection('channels').doc();
        const offerCandidates = channelDoc.collection('offerCandidates');
        const answerCandidates = channelDoc.collection('answerCandidates');

        setChannelId(channelDoc.id);

        pc.current.onicecandidate = async event => {
            if (event.candidate) {
                await offerCandidates.add(event.candidate.toJSON());
            }
        };

        //create offer
        const offerDescription = await pc.current.createOffer();
        await pc.current.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        await channelDoc.set({ offer });

        // Listen for remote answer
        channelDoc.onSnapshot(snapshot => {
            const data = snapshot.data();
            if (!pc.current.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pc.current.setRemoteDescription(answerDescription);
            }
        });

        // When answered, add candidate to peer connection
        answerCandidates.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    const data = change.doc.data();
                    pc.current.addIceCandidate(new RTCIceCandidate(data));
                }
            });
        });
    };

    const joinCall = async () => {
        const channelDoc = firestore().collection('channels').doc(channelId);
        const offerCandidates = channelDoc.collection('offerCandidates');
        const answerCandidates = channelDoc.collection('answerCandidates');

        pc.current.onicecandidate = async event => {
            if (event.candidate) {
                await answerCandidates.add(event.candidate.toJSON());
            }
        };

        const channelDocument = await channelDoc.get();
        const channelData = channelDocument.data();

        const offerDescription = channelData.offer;

        await pc.current.setRemoteDescription(
            new RTCSessionDescription(offerDescription),
        );

        const answerDescription = await pc.current.createAnswer();
        await pc.current.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        };

        await channelDoc.update({ answer });

        offerCandidates.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    const data = change.doc.data();
                    pc.current.addIceCandidate(new RTCIceCandidate(data));
                }
            });
        });
    };
    const [isOpen, setIsOpen] = React.useState(true);
    useEffect(() => {
        startWebcam()
    }, [])
    return (
        <>
            <Pressable style={{ flex: 1 }} onPress={() => setIsOpen(!isOpen)}>

                {localStream && (
                    <RTCView
                        streamURL={localStream?.toURL()}
                        style={styles.stream}
                        objectFit="cover"
                        mirror
                    />
                )}
                {remoteStream && (
                    <View style={[styles.stream2, { bottom: isOpen ? 100 : 20 }]}>
                        <RTCView
                            streamURL={remoteStream?.toURL()}
                            style={[styles.streamBox]}
                            objectFit="cover"
                            mirror
                        />
                    </View>
                )}
                <View style={styles.buttons}>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <Button title="Join call" onPress={joinCall} />
                        <TextInput
                            value={channelId}
                            placeholder="callId"
                            minLength={45}
                            style={{ borderWidth: 1, padding: 5 }}
                            onChangeText={newText => setChannelId(newText)}
                        />
                    </View> */}
                    <PresenceTransition visible={isOpen} initial={{
                        opacity: 0,
                        // scale: 0,
                        translateY: 34
                    }} animate={{
                        opacity: 1,
                        translateY: 0,
                        transition: {
                            duration: 250
                        }
                    }}>
                        <ButtonTab
                            onStartWebcam={startWebcam}
                            onStartCall={startCall}
                            onJoinCall={joinCall}
                            onEndCall={startWebcam}
                            webcamStarted={webcamStarted}
                            remoteStream={remoteStream}
                            value={channelId}
                            onChangeText={newText => setChannelId(newText)}
                        />

                    </PresenceTransition>
                    {/* {!webcamStarted && (
                    <Button title="Start webcam" onPress={startWebcam} />
                )}
                {webcamStarted && <Button title="Start call" onPress={startCall} />}
                {webcamStarted && (
                    <View style={{ flexDirection: 'row' }}>
                        <Button title="Join call" onPress={joinCall} />
                        <TextInput
                            value={channelId}
                            placeholder="callId"
                            minLength={45}
                            style={{ borderWidth: 1, padding: 5 }}
                            onChangeText={newText => setChannelId(newText)}
                        />
                    </View>
                )} */}
                </View>

            </Pressable>

        </>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',

        justifyContent: 'center',
        alignItems: 'center',
        ...StyleSheet.absoluteFill,
    },
    stream: {
        flex: 1,
        width: width,
        height: height,
    },
    stream2: {
        width: width / 3,
        height: height / 5,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 100000,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'red'
    },
    streamBox: {
        width: '100%',
        height: '100%'
    },
    buttons: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
});

export default VideoCallScreen;
