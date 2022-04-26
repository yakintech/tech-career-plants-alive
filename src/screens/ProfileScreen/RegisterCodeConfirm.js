import React from 'react'
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import baseManager from '../../api/baseManager';
import { setUserToStorage } from '../../helper/StorageHelper';
const RegisterCodeConfirm = ({ navigation, route }) => {

    const { email } = route.params;

    const confirmCodeValidation = yup.object().shape({
        confirmCode: yup
            .string()
            .required('ConfirmCode is Required')
    });

    const confirm = (values) => {
        //apiye code ve email gönderilecek

        baseManager.add('/api/confirm', {email:email, confirmCode : values.confirmCode })
        .then((data) => {
            alert("Üye kaydınız başarıyla tamamlanmıştır!");

            setUserToStorage({email:email}).then((res) => {

                navigation.navigate("home");
            })

        })
        .catch((err) => {
            alert("Girdiğiniz kod hatalıdır. Lütfen tekrar deneyiniz!")
        })
    }

    return (

        <Formik
            validationSchema={confirmCodeValidation}
            initialValues={{ confirmCode: '' }}
            onSubmit={values => confirm(values)}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('confirmCode')}
                        value={values.confirmCode}
                        placeholder='confirmCode'
                        keyboardType='number-pad'
                    />
                    {errors.confirmCode &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmCode}</Text>
                    }


                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>


    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default RegisterCodeConfirm
