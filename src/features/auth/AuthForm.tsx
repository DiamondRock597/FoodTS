import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {FormikProps} from 'formik';
import * as Yup from 'yup';

import {CustomButton} from '@components/custom_button';
import {withFormik} from '@utils/with_formik';

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

const formikEnhance = withFormik<Props, FormValues>({
  validationSchema,
  mapPropsToValues: () => ({
    [Fields.Email]: '',
    [Fields.Password]: '',
  }),
  handleSubmit: (values: FormValues, {props}: {props: Props}) => props.onSubmit(values[Fields.Email], values[Fields.Password]),
});

@formikEnhance
export class AuthForm extends React.Component<Props & FormikProps<FormValues>> {
  public render() {
    return (
      <ScrollView style={styles.form} contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputBlock}>
          <Text style={styles.title}>Email address</Text>
          <TextInput
            style={styles.input}
            value={this.props.values[Fields.Email]}
            onChangeText={this.props.handleChange(Fields.Email)}
            autoCompleteType="email"
          />
          {this.props.errors[Fields.Email] && this.props.touched[Fields.Email] && (
            <Text style={styles.errorMessage}>{this.props.errors[Fields.Email]}</Text>
          )}
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.title}>password</Text>
          <TextInput
            secureTextEntry
            value={this.props.values[Fields.Password]}
            onChangeText={this.props.handleChange(Fields.Password)}
            style={styles.input}
            autoCompleteType="password"
          />
          {this.props.errors[Fields.Password] && this.props.touched[Fields.Password] && (
            <Text style={styles.errorMessage}>{this.props.errors[Fields.Password]}</Text>
          )}
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.forgotpassword}>Forgot passcode?</Text>
          <CustomButton onPress={this.props.handleSubmit} title="Login" color="white" backgroundColor="#FF460A" />
        </View>
      </ScrollView>
    );
  }
}
