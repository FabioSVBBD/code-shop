import { FormikErrors } from 'formik';
import { Background } from '../components';

interface DeliveryDetailsForm {
  street: string;
  city: string;
  suburb: string;
  postalCode: string;
  contact: string;
}

export const DeliveryDetails = () => {
  const initialValues = (): DeliveryDetailsForm => ({
    street: '',
    city: '',
    suburb: '',
    postalCode: '',
    contact: '',
  });

  const validate = (
    form: DeliveryDetailsForm
  ): FormikErrors<DeliveryDetailsForm> => {
    const errors: FormikErrors<DeliveryDetailsForm> = {};

    return errors;
  };

  const submit = (form: DeliveryDetailsForm) => {
    console.log('submit');
  };

  return (
    <Background orientation="column">
      <article className="p-8 text-center">
        <h1>Delivery Details</h1>
        <h2 className="text-sm">just a few details</h2>
      </article>
    </Background>
  );
};
