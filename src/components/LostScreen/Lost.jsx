import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateGameState, recordGameResult } from '../../redux/action';

const LostScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { isPlayerTurn } = useSelector((state) => state.game);
    const handlePlayAgain = () => {
        dispatch(recordGameResult({ playerWon: !isPlayerTurn }));
        dispatch(updateGameState({ coins: 21, isPlayerTurn: true }));
        navigation.navigate('GamePlay');
    };
    const handleNavigateToHistory = () => {
        navigation.navigate('History');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>You lost the game!</Text>

            <TouchableOpacity onPress={handlePlayAgain} style={styles.pickBtn}>
                <Text style={styles.pickText}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToHistory} style={styles.pickBtn}>
                <Text style={styles.pickText}>Go To History</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect()(LostScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "red"
    },
    resultText: {
        fontSize: 18,
        marginBottom: 16,
    },
    pickBtn: {
        paddingVertical: 10,
        borderWidth: 0.8,
        width: 180,
        alignItems: "center",
        backgroundColor: "#40A2E3",
        borderRadius: 5,
        marginBottom: 20,
    },
    pickText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})
