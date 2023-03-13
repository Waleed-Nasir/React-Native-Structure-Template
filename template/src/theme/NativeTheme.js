import { extendTheme, NativeBaseProvider } from 'native-base';
import React, { Children, useContext, useState } from 'react'
import { useSelector } from 'react-redux';

const NativeTheme = ({ children }) => {
    const { themeColor } = useSelector((State) => State.Settings)
    // const colorScheme = Appearance.getColorScheme();
    const Light = {
        theme: {
            primary: '#007AFF',
            secondary: '#6C757D',
            success: '#28A745',
            danger: '#DC3545',
            warning: '#FFC107',
            info: '#17A2B8',
            light: '#F8F9FA',
            icon: '#17A2B8',
            dark: '#343A40',
            disabled: '#6C757D',
            placeholder: '#6C757D',
            background: '#FFFFFF',
            borderColor: '#CED4DA',
            layout: ["#ff2fff70", "#23dcad70", "#13d8ff70", '#ffe00970', '#ff640c70'],
            card: '#FFFFFF',
            text: '#495057',
            textSecondary: '#6C757D',
            buttonText: '#FFFFFF',
            button: '#007AFF',
            0: "transparent",
            50: "#F6609C",
            100: "#008ffC",
            200: 'black',
            300: "red"
        },

    };
    const DARK = {
        colors: {
            0: "transparent",
            100: 'black',
            200: 'white',
            300: "yellow"
        },
        text: {
            0: 'black',
            100: 'white',
            200: "yellow"
        },
        theme: {
            primary: '#007AFF',
            secondary: '#6C757D',
            success: '#28A745',
            danger: '#DC3545',
            warning: '#FFC107',
            info: '#17A2B8',
            light: '#F8F9FA',
            icon: '#17A2B8',
            dark: '#343A40',
            disabled: '#6C757D',
            placeholder: '#6C757D',
            background: '#343A40',
            borderColor: '#CED4DA',
            layout: ["#00000050","#00000090","#000"],
            card: '#495057',
            text: '#F8F9FA',
            textSecondary: '#CED4DA',
            buttonText: '#F8F9FA',
            button: 'gray',
            0: "black",
            50: "#F66fff",
            100: "#F64fff",
            200: 'white',
            300: "yellow"
        },
    };
    const YELLOW = {
        theme: {
            primary: '#007AFF',
            secondary: '#6C757D',
            success: '#28A745',
            danger: '#DC3545',
            warning: '#FFC107',
            info: '#17A2B8',
            light: '#F8F9FA',
            icon: '#FFF9C4',
            dark: '#343A40',
            disabled: '#6C757D',
            placeholder: '#6C757D',
            background: '#f9c74f',
            borderColor: '#CED4DA',
            layout: ["#f9c74f70",  '#ffe00970','#00000070', '#000000'],
            card: '#495057',
            text: '#fff',
            textSecondary: '#CED4DA',
            buttonText: '#F8F9FA',
            button: '#f9c74f',
        },
    };

    //     Primary Blue: #2196F3
    // Light Blue: #BBDEFB
    // Dark Blue: #0D47A1
    // Accent Color: #FF9800
    // White: #FFFFFF
    // Black: #000000
    // Gray: #9E9E9E
    // Light Gray: #E0E0E0

    const BLUE = {
        theme: {
            primary: '#007AFF',
            secondary: '#6C757D',
            success: '#28A745',
            danger: '#DC3545',
            warning: '#FFC107',
            info: '#17A2B8',
            light: '#F8F9FA',
            icon: '#89ecda',
            dark: '#343A40',
            disabled: '#6C757D',
            placeholder: '#6C757D',
            background: '#3bd6c6',
            borderColor: '#CED4DA',
            layout: ["#89ecda70",'#89ecda70', "#3bd6c690",],
            card: '#495057',
            text: '#000',
            textSecondary: '#CED4DA',
            buttonText: '#F8F9FA',
            button: '#89ecda',
        },
    };



    const themeList = {
        Light: Light,
        Dark: DARK,
        Yellow: YELLOW,
        Blue: BLUE
    }
    const theme = extendTheme({ colors: themeList[themeColor] });

    return (
        <NativeBaseProvider theme={theme}>
            {children}
        </NativeBaseProvider>
    )
}
export default NativeTheme