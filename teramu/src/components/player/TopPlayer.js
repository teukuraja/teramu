import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const TopPlayer = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
    
    <View style={styles.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Image style={styles.button} source={require('../../assets/icon/ic_keyboard_arrow_down_white.png')} />
        </TouchableOpacity>
        
        <Text onPress={onMessagePress} style={styles.message}>{message.toUpperCase()}</Text>

        <TouchableOpacity onPress={onQueuePress}>
            <Image style={styles.button} source={require('../../assets/icon/ic_queue_music_white.png')} />
        </TouchableOpacity>
    </View>
);

export default TopPlayer;

const styles = StyleSheet.create({
    container: {
        height: 72,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
        paddingTop: 10
    },
    button: {
        opacity: 0.72
    }
});