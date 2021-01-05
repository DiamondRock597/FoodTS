import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {withFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

import {CustomButton} from '@components/custom_button';

import {styles} from './styles/auth_form';

const MIN_SYMBOLS_PASSWORD = 6;
const MAX_SYMBOLS_PASSWORD = 16;

interface Props {
  onSubmit: (email: string, password: string) => void;
}

enum Fields {
  Email = 'email',
  Password = 'password',
}

interface FormValues {
  [Fields.Email]: string;
  [Fields.Password]: string;
}

const validationSchema = Yup.object().shape({
  [Fields.Email]: Yup.string().email('Invalid email').required('Username is required'),
  [Fields.Password]: Yup.string().min(MIN_SYMBOLS_PASSWORD, 'Too short').max(MAX_SYMBOLS_PASSWORD, 'Too long').required('Password is required'),
});

const InnerForm: React.FC<FormikProps<FormValues> & Props> = (props: FormikProps<FormValues> & Props) => {
  const {handleSubmit, handleChange, values, errors, touched} = props;
  return (
    <ScrollView style={styles.form} contentContainerStyle={styles.contentContainer}>
      <View style={styles.inputBlock}>
        <Text style={styles.title}>Email address</Text>
        <TextInput style={styles.input} value={values[Fields.Email]} onChangeText={handleChange(Fields.Email)} autoCompleteType="email" />
        {errors[Fields.Email] && touched[Fields.Email] && <Text style={styles.errorMessage}>{errors[Fields.Email]}</Text>}
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.title}>password</Text>
        <TextInput
          secureTextEntry
          value={values[Fields.Password]}
          onChangeText={handleChange(Fields.Password)}
          style={styles.input}
          autoCompleteType="password"
        />
        {errors[Fields.Password] && touched[Fields.Password] && <Text style={styles.errorMessage}>{errors[Fields.Password]}</Text>}
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.forgotpassword}>Forgot passcode?</Text>
        <CustomButton onPress={handleSubmit} title="Login" color="white" backgroundColor="#FF460A" />
      </View>
    </ScrollView>
  );
};

export const AuthForm = withFormik<Props, FormValues>({
  validationSchema,
  mapPropsToValues: () => ({
    [Fields.Email]: '',
    [Fields.Password]: '',
  }),
  handleSubmit: (values: FormValues, {props}) => props.onSubmit(values[Fields.Email], values[Fields.Password]),
})(InnerForm);
