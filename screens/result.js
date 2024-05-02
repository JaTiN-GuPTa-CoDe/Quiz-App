import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = () => {
    return (
        <View >
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerConatainer}>
                <Image source={{ uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=900' }}
                    style={styles.banner}
                    resizeMode="contain" />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

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