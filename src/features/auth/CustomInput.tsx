import React from 'react';
import {FieldProps} from 'formik';
import {Text, TextInput, View} from 'react-native';

import {Fields, FormValues} from './AuthForm';

import {styles} from './styles/custom_input';

export const CustomInput: React.FC<FieldProps<Fields, FormValues>> = ({field, form}) => (
  <View style={styles.inputBlock}>
    <Text style={styles.title}>{field.name}</Text>
    <TextInput
      numberOfLines={1}
      scrollEnabled={true}
      secureTextEntry={field.name === Fields.Password}
      style={styles.input}
      value={field.value}
      onChangeText={form.handleChange(field.name)}
    />
    {form.errors[field.name] && form.touched[field.name] && <Text style={styles.errorMessage}>{form.errors[field.name]}</Text>}
  </View>
);
