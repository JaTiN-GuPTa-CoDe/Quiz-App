import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Quiz = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>This is a really cool Question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>Question No.1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Question No.2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Question No.3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Question No.4</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Question No.5</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttom}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%'
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    buttom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row'
    }

})