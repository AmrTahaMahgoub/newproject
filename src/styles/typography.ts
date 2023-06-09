import {
    I18nManager
} from 'react-native';
import {
    scale
} from './dimensions';

export type TextFontTypes =
    |"REGULARROBOTO"
    |"MEDIUMROBOTO"
    |"BOLDROBOTO"
    |"REGULARLATO"
    |"THINLATO"
    |"BOLDLATO"
    |"ITALICROBOTO"



// export type FontSizeNumericTypes=
// |H
// |H2
// |H3
// |H4
// |p
// |FS14
// |FS13
// |FS16
// |FS12
// |FS11
// |FS7
// |FS10
// |FS8




export type  FontFamilyTypes = {
    REGULARROBOTO: string,
    MEDIUMROBOTO: string,
    BOLDROBOTO: string,
    REGULARLATO: string,
    THINLATO: string,
    BOLDLATO: string,
    ITALICROBOTO: string
}


export type FontSizeTypes = {
    H1: number,
    H2: number,
    H3: number,
    H4: number,
    P: number,
    FS18: number,
    FS14: number,
    FS13: number,
    FS16: number,
    FS12: number,
    FS11: number,
    FS7: number
    FS10: number
    FS8: number
}


export const REGULARROBOTO = "Roboto-Regular"
export const MEDIUMROBOTO = "Roboto-Medium"
export const BOLDROBOTO = "Roboto-Bold"
export const REGULARLATO = "Lato-Regular"
export const THINLATO = "Lato-Thin"
export const BOLDLATO = "Lato-Bold"
export const ITALICROBOTO = "Roboto-Italic"


export const H1 = scale(22);
export const H2 = scale(16);
export const H3 = scale(12);
export const H4 = scale(9);
export const P = scale(12);
export const FS18 = scale(18);
export const FS14 = scale(14);
export const FS16 = scale(16);
export const FS11 = scale(11);
export const FS12 = scale(12);
export const FS7 = scale(7);
export const FS10 = scale(10);
export const FS13 = scale(13);
export const FS8 = scale(8);
// export type {
//     FontSizeTypes,
//     FontFamilyTypes
// }
