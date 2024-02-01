import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector((state) => state.history);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game History</Text>
            {history.map((result, index) => (
                <Text key={index} style={styles.subTitle}>
                    Game {index + 1}: {result.playerWon ? 'Player won' : 'AI won'}
                </Text>
            ))}
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
    },
})