import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";

const TimeDateScreen = () => {

    const [currentTime, setCurrentTime] = useState(moment().format('LTS'));
    const [currentDate, setCurrentDate] = useState(moment().format('dddd, MMMM Do YYYY'));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('LTS'));
            setCurrentDate(moment().format('dddd, MMMM Do YYYY'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.time}>{currentTime}</Text>
            <Text style={styles.date}>{currentDate}</Text>
        </View>
    );
};

export default TimeDateScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        marginTop: 10,
    },
});
