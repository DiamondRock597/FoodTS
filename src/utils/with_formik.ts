import {FormikValues, withFormik as oWithFormik, WithFormikConfig} from 'formik';

export const withFormik = <OuterProps, Values extends FormikValues, Payload = Values>(config: WithFormikConfig<OuterProps, Values, Payload>) => <T>(
  component: T,
  // tslint:disable-next-line:ban-ts-ignore
  // @ts-ignore
) => oWithFormik(config)(component) as T;
