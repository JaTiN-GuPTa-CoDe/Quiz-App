import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tittle from '../components/tittle'

const Home = () => {
    return (
        <View>
            <Tittle />
            <View style={styles.bannerConatainer}>
                <Image source={{ uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=900' }}
                    style={styles.banner}
                    resizeMode="contain" />
            </View>
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerConatainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})