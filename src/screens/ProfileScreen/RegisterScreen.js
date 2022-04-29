import React from 'react'
import { Button, StyleSheet, TextInput, View, Text, Image, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import baseManager from '../../api/baseManager';


const RegisterScreen = ({ navigation }) => {

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

        baseManager.add("/api/register", values)
            .then((data) => {
                navigation.navigate("RegisterCodeConfirm", { email: values.email })
            })
            .catch(() => {
                alert("İşlem sırasında bir hata meydana geldi!")
            })

    }

    return (
        <>
            <View style={styles.index}>
                <Image
                    source={require('../../../assets/data/img/logoRegister.png')}
                    style={styles.logo}
                >
                </Image>
                <Formik
                    validationSchema={registerValidationSchema}
                    initialValues={{ email: '', name: '', surname: '' }}
                    onSubmit={values => register(values)}

                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <View flex={1}>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                placeholder='Email (e.g: abc@abc.com)'
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

                            {errors.surname &&
                                <Text style={{ fontSize: 10, color: 'red', paddingBottom: 10 }}>{errors.surname}</Text>
                            }
                            <Button onPress={handleSubmit} title="Submit" color="#04541d" />
                        </View>
                    )}
                </Formik>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    index: {
        flex: 1,
        backgroundColor: '#fff4de',
    },
    input: {
        height: 40,
        width: 370,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    logo: {
        height: 200,
        width: 400,
    }
});

export default RegisterScreen
