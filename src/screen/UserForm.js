import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Button, Text, TouchableOpacity } from "react-native";
import  {COLORS} from "../utils/color";
import DateTimePicker from "@react-native-community/datetimepicker"
import { STRINGS } from "../utils/strings";


const UserForm = () => {

    const [userName, setUserName] = useState("Ayushi")
    const [userEmail, setUserEmail] = useState("")
    const [errorStatus, seterrorStatus] = useState("")
    const [date, setDate] = useState("");
    const [showDatePicker, setDatePicker] = useState(false)


    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());


    const showUserDetails = () => {

        if (date == "" || userName == "" || userEmail == "") {
            seterrorStatus(STRINGS.ALL_DETAILS)

        } else {
            seterrorStatus("")

            Alert.alert(STRINGS.USER_DETAILS, (userName + " " + userEmail + " " + date), [
                {
                    text: STRINGS.CANCEL,
                    onPress: () => console.log(STRINGS.CANCEL_PRESSED),
                    style: STRINGS.CANCEL,
                },
                { text: STRINGS.OK, onPress: () => console.log(STRINGS.OK_PRESSED) },
            ]);
        }


    }

    const allLetter = (inputtxt) => {
        var letters = /^[A-Za-z]+$/;
        setUserName(inputtxt)

        if (inputtxt.match(letters)) {
            seterrorStatus("")
            return true;
        }
        else {
            seterrorStatus(STRINGS.LETTER_ONLY)
            return false;
        }
    }

    ValidateEmail = (text) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        setUserEmail(text)
        if (text.trim().match(reg)) {
            seterrorStatus("")

            return true;
        }
        else {
            seterrorStatus(STRINGS.VALIDATE_EMAIL)
            return false;
        }
    }

    const showCalender = () => {

        setDatePicker(true)

    }

    const selectDate = (event, date1) => {

        if (event.type == STRINGS.DISMISSED) {
            setDatePicker(false)
            return false;
        }
        setDatePicker(false)
        seterrorStatus("")


        var date = Date.parse(date1.toDateString());


        function format(date) {
            date = new Date(date);
            var day = ('0' + date.getDate()).slice(-2);
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var year = date.getFullYear();

            return day + '-' + month + '-' + year;
        }

        var finaalDate = format(date)

        setDate(finaalDate)

    }


    return (

        <View style={styles.mainContainer}>
            <View style={styles.SectionStyle}>
                <TextInput style={styles.inputttcontainer}
                    placeholder={STRINGS.USER_NAME}
                    onChangeText={(value) => allLetter(value)}
                    value={userName}
                    maxLength={50}

                />
            </View>

            <View style={styles.SectionStyle}>
                <TextInput style={styles.inputttcontainer}
                    placeholder={STRINGS.EMAIL}
                    onChangeText={(value) => ValidateEmail(value)}


                />
            </View>


            <TouchableOpacity
                onPress={showCalender}
            >

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    marginTop: 5,
                    width: '95%',
                    height: 40,
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    backgroundColor: COLORS.white
                }}>

                    <Text style={{
                        width: '98%',
                        height: 40,
                        textAlignVertical: 'center',
                        fontFamily: 'DMSans-Regular',
                        color: COLORS.textColor
                    }}>{date}</Text>



                </View>

            </TouchableOpacity>

            {showDatePicker ?

                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    maximumDate={tomorrow}
                    minimumDate={new Date('1900-01-11')}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={selectDate}
                />

                : null}

            <Text style={{ color: COLORS.errorColor }}>{errorStatus}</Text>

            <Button title={STRINGS.SUBMIT}
                onPress={showUserDetails} />

        </View>
    )

}

export default UserForm;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputttcontainer: {

        fontSize: 16,
        width: '100%',
        height: 40,
        flex: 1,
        color: COLORS.textColor

    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 2,
        marginTop: 10

    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
})