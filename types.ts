import { ReactNode } from "react";
import { Router } from "expo-router";
import { TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export type ScreenWrapperProps = {
    style?: ViewStyle;
    children: React.ReactNode;
    isModal?: boolean;
    showPattern?: boolean;
    bgOpacity?: number;
};

export type TypographyProps = {
    size?: number;
    color?: string;
    fontWeight?: TextStyle["fontWeight"];
    children: any | null;
    style?: TextStyle;
    textProps?: TextProps;
};

export interface ButtonProps extends TouchableOpacityProps {
    style?: ViewStyle;
    onPress?: () => void;
    loading?: boolean;
    children: React.ReactNode;
};