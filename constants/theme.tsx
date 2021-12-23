import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export const COLORS = {
    blue: '#0074B1',
    paper: '#E9E9E9',
    gray: '#B0B1B2',
    black: '#2C2C2C',
    white: '#FFFFFF',
    darkGray: '#5F6163',
    lightBlue: '#EEF3F8',
}

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    navTitle: 25,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    body6: 10,
    width,
    height
};

export const FONTS = {
    navTitle: { fontFamily: 'Roboto-Bold', fontSize: SIZES.navTitle },
    largeTitleBold: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2 },
    h1: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h1 },
    h2: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h2 },
    h3: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h3 },
    h4: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h4 },
    h5: { fontFamily: 'Roboto-Medium', fontSize: SIZES.h5 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4 },
    body5: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5 },
    body6: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;