export const headerFontSize = 28;
export const subHheaderFontSize = 22;
export const normalFontSize = 14;
export const buttonTextFontSize = 16;
export const baseApiUrl = "https://attendant-dev-api.azurewebsites.net";

export const formatPhoneNumberToGhana = (phoneNumber) => {
    console.log(phoneNumber)
    // Remove any non-digit characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number starts with "0" (local format)
    if (cleanedPhoneNumber.startsWith('0')) {
        // Remove the leading "0" and add the country code "+233"
        return '+233' + cleanedPhoneNumber.slice(1);
    } else {
        // If the phone number already starts with "+233" (international format), return it as is
        if (cleanedPhoneNumber.startsWith('+233')) {
            return cleanedPhoneNumber;
        }
        // Otherwise, the phone number is already in a different format, so return it unchanged
        return phoneNumber;
    }
};
