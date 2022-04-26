import React from 'react'
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
const RegisterCodeConfirm = () => {

    const confirmCodeValidation = yup.object().shape({
        confirmCode: yup
            .string()
            .email("Please enter valid confirmCode")
            .required('ConfirmCode is Required')
    })

    return (
   
        <Formik
            validationSchema={confirmCodeValidation}
            initialValues={{ confirmCode: '' }}
            onSubmit={values => console.log(values)}
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
