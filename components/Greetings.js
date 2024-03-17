

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greetings = () => {
    const [greeting, setGreeting] = useState('');
    const updateGreeting = () => {
        const currentHour = new Date().getHours();
        const currentDay = new Date().getDay();

        let newGreeting = '';

        if (currentHour >= 6 && currentHour < 12) {
            newGreeting = 'Good morning,';
        } else if (currentHour >= 12 && currentHour < 18) {
            newGreeting = 'Good afternoon,';
        } else {
            newGreeting = 'Good evening,';
        }



        setGreeting(newGreeting);
    };
    useEffect(() => {
        updateGreeting();
        // Update greeting every minute
        const intervalId = setInterval(updateGreeting, 6000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: -10

        }}>
            <Text style={styles.headerStyle}>
                {greeting}
            </Text>
            <Text style={styles.headerStyle}>Ike Owusu</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#000",

    },

});

export default Greetings;
