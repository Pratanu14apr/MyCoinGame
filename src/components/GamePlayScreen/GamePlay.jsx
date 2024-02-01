
import React, { useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateGameState, resetGameState, recordGameResult } from '../../redux/action';
import { useNavigation } from '@react-navigation/native';

const GamePlayScreen = ({ coins, isPlayerTurn, updateGameState, resetGameState, recordGameResult }) => {
    const navigation = useNavigation();
    const handlePlayerPick = (pickedCoins) => {

        if (pickedCoins < 1 || pickedCoins > 4 || pickedCoins > coins) {
            alert('Invalid move. Pick 1 to 4 coins.');
            return;
        }

        const remainingCoins = coins - pickedCoins;

        updateGameState({
            coins: remainingCoins,
            isPlayerTurn: false,
        });

        checkGameStatus(remainingCoins);
    };

    const handleAITurn = () => {
        const aiPickedCoins = (coins - 1) % 4 || Math.floor(Math.random() * 3) + 1;

        const remainingCoins = coins - aiPickedCoins;

        updateGameState({
            coins: remainingCoins,
            isPlayerTurn: true,
        });

        checkGameStatus(remainingCoins);
    };

    const checkGameStatus = (remainingCoins) => {
        if (remainingCoins <= 0) {
            if (isPlayerTurn) {
                Alert.alert('Game Over', 'AI won!', [
                    {
                        text: 'OK',
                        onPress: () => handleGameEnd('AI'),
                    },
                ]);
            } else {
                Alert.alert('Game Over', 'Player won!', [
                    {
                        text: 'OK',
                        onPress: () => handleGameEnd('Player'),
                    },
                ]);
            }
        }
    };

    const handleGameEnd = (winner) => {
        recordGameResult({ playerWon: winner === 'Player' });
        navigation.navigate('Lost');
    };

    useEffect(() => {
        if (!isPlayerTurn) {
            setTimeout(() => handleAITurn(), 500);
        }
    }, [isPlayerTurn]);
    useEffect(() => {

        resetGameState();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Remaining Coins: {Math.max(coins, 0)}</Text>
            {isPlayerTurn && (
                <View style={styles.playerTurnContainer}>
                    <Text style={styles.playerTurnText}>Player's Turn</Text>
                    <TouchableOpacity style={styles.pickBtn}>
                        <Text style={styles.pickText} onPress={() => handlePlayerPick(1)}>Pick 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pickBtn}>
                        <Text style={styles.pickText} onPress={() => handlePlayerPick(2)}>Pick 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pickBtn}>
                        <Text style={styles.pickText} onPress={() => handlePlayerPick(3)}>Pick 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pickBtn}>
                        <Text style={styles.pickText} onPress={() => handlePlayerPick(4)}>Pick 4</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const mapStateToProps = (state) => ({
    coins: state.game.coins,
    isPlayerTurn: state.game.isPlayerTurn,
});

const mapDispatchToProps = {
    updateGameState,
    resetGameState,
    recordGameResult
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayScreen);

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
    },
    remainingCoins: {
        fontSize: 18,
        marginBottom: 16,
    },
    playerTurnContainer: {
        alignItems: 'center',
    },
    playerTurnText: {
        fontSize: 16,
        marginBottom: 8,
    },
    pickBtn: {
        paddingVertical: 10,
        borderWidth: 0.8,
        // borderColor: "blue",
        width: 100,
        alignItems: "center",
        backgroundColor: "#40A2E3",
        borderRadius: 5,
        marginBottom: 7
    },
    pickText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    }
})