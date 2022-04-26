import React from 'react'
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'

const RegisterScreen = ({navigation}) => {

    const registerValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        name: yup
            .string()
            .required('Name is required'),
        surname: yup
            .string()
            .required('Surname is required'),
    });

    const register = (values) => {

        //API işlemleri

        navigation.navigate("RegisterCodeConfirm")
    }

    return (

        <Formik
            validationSchema={registerValidationSchema}
            initialValues={{ email: '', name: '', surname: '' }}
            onSubmit={values => register(values)}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        value={values.email}
                        placeholder='EMail'
                        autoCapitalize='none'
                    />
                    {errors.email &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                    }
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        value={values.name}
                        placeholder='Name'

                    />
                    {errors.name &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                    }
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('surname')}
                        value={values.surname}
                        placeholder='Surname'

                    />
                    {errors.name &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
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

export default RegisterScreen
