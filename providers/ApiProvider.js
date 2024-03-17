import axios from "axios";
import { baseApiUrl } from "../const/values";
import { storeData } from "../const/util";

export const doSendOTP = async (phoneNumber) => {
    try {
        const response = await axios.post(baseApiUrl + "/api/v1/otp", {
            "userPhoneNumber": phoneNumber
        }).then(response => {
            return response.data;
        }).catch(error => console.log("Error: ", error));
    } catch (error) {
        console.log("Error: ", error);
    }
    finally {

    }
}

export const doUserRegistration = async (email, pass, PhoneNo, PSI, OTP) => {
    console.log(email, pass, PhoneNo, PSI, OTP)
    try {
        const response = await axios.put(baseApiUrl + "/api/v1/user/register", {
            "email": email,
            "password": pass,
            "phoneNumber": PhoneNo,
            "psi": PSI,
            "otp": OTP
        });
        // .then(response => {
        //     console.log(response.data);
        //     return response.data;
        // })
        // .catch(error => console.log("Errors: ", error));
        if (response.data.statusCode == "201") {
            console.log(response.data);
            storeData(response.data.data, "userProfileData");
            return true;
        }

    } catch (error) {
        // console.log("Error: ", error);
        if (error.response) {
            alert(error.response.data.message);
        } else if (error.request) {
            console.log("No response received from server:", error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.log("Error setting up request:", error.message);
        }
        throw error; // Rethrow the error to be handled by the caller
    }
    finally {
    }
}