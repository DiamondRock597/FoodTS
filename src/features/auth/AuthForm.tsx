import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {FormikProps, Field} from 'formik';
import * as Yup from 'yup';

import {CustomButton} from '@components/custom_button';
import {withFormik} from '@utils/with_formik';
import {CustomInput} from './CustomInput';

import {styles} from './styles/auth_form';

const MIN_SYMBOLS_PASSWORD = 6;
const MAX_SYMBOLS_PASSWORD = 16;

interface Props {
  onSubmit: (email: string, password: string) => void;
}

export enum Fields {
  Email = 'email',
  Password = 'password',
}

export interface FormValues {
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.form} contentContainerStyle={styles.contentContainer}>
        <Field component={CustomInput} name={Fields.Email} />
        <Field component={CustomInput} name={Fields.Password} />

        <View style={styles.submitBlock}>
          <Text style={styles.forgotPassword}>Forgot passcode?</Text>
          <CustomButton onPress={this.props.handleSubmit} title="Login" color="white" backgroundColor="#FF460A" />
        </View>
      </ScrollView>
    );
  }
}
