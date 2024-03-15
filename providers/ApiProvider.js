import axios from "axios";
import { baseApiUrl } from "../const/values";

export const doSendOTP = async (phoneNumber) => {
    try {
        const response = await axios.post(baseApiUrl + "/api/v1/otp", {
            "userPhoneNumber": phoneNumber
        })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => console.log("Error: ", error));

    } catch (error) {
        console.log("Error: ", error);
    }
    finally {
        console.log(baseApiUrl + "/api/v1/otp");
    }
}

export const doUserRegistration = async (email, pass, PhoneNo, PSI, OTP) => {
    console.log(email, pass, PhoneNo, PSI, OTP)
    try {
        const response = await axios.post(baseApiUrl + "/api/v1/user/register", {
            "email": email,
            "password": pass,
            "phoneNumber": PhoneNo,
            "psi": PSI,
            "otp": OTP
        })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => console.log("Errors: ", error));

    } catch (error) {
        console.log("Error: ", error);
    }
    finally {
    }
}