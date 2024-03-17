import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value, storageName) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(storageName, jsonValue);
    } catch (e) {
        // saving error
    }
};

export const getData = async (storageName) => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageName);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};