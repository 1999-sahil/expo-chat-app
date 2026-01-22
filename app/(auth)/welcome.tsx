import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typography from '@/components/Typography'
import { colors } from '@/constants/theme'
import Animated, { FadeIn } from 'react-native-reanimated'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Animated.Image
                    source={require('../../assets/images/welcomeScreen.png')}
                    entering={FadeIn.duration(700).springify()}
                    style={styles.logo}
                    resizeMode={'contain'}
                />

                <View style={styles.content}>
                    <Typography color={colors.white} size={30} fontWeight={"600"} style={{ paddingBottom: 16 }}>
                        Stay Connected
                    </Typography>
                    <Typography color={colors.white} size={16} fontWeight={"300"}>
                        Join Millions of Squads From Around
                    </Typography>
                    <Typography color={colors.white} size={16} fontWeight={"300"}>
                        World, Connecting On Echo!
                    </Typography>
                </View>
                <Button style={{ backgroundColor: '#BADFDC', width: '55%' }} onPress={() => router.push('/(auth)/register')}>
                    <Typography size={18} fontWeight={"600"}>
                        Get Started
                    </Typography>
                </Button>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral950,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: "20%",
        aspectRatio: 1,
        marginBottom: 40
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 3,
        paddingBottom: 80
    },
})