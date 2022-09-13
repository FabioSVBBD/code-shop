import { Field, Form, Formik, FormikErrors } from 'formik';
import { Background, Input } from '../components';
import { Button } from '../components/Button';
import { FormLayout } from '../layout/FormLayout';
import {
  isValidPhoneNumber,
  isValidPostalCode,
  isValidStreet,
} from '../validation/address-validation';

interface DeliveryDetailsForm {
  street: string;
  city: string;
  suburb: string;
  postalCode: string;
  contact: string;
  number: string;
}

export const DeliveryDetails = () => {
  const initialValues = (): DeliveryDetailsForm => ({
    street: '',
    city: '',
    suburb: '',
    postalCode: '',
    contact: '',
    number: '',
  });

  const validate = ({
    street,
    city,
    suburb,
    postalCode,
    contact,
    number,
  }: DeliveryDetailsForm): FormikErrors<DeliveryDetailsForm> => {
    const errors: FormikErrors<DeliveryDetailsForm> = {};

    if (!street || !isValidStreet(street)) {
      errors.street = 'Please enter a street address';
    }

    if (!city) {
      errors.city = 'Please enter a city';
    }

    if (!suburb) {
      errors.suburb = 'Please enter a suburb';
    }

    if (!postalCode || !isValidPostalCode(postalCode)) {
      errors.postalCode = 'Please enter a postal code';
    }

    if (!contact) {
      errors.contact = 'Please enter a contact Person';
    }

    if (!number || !isValidPhoneNumber(number)) {
      errors.number = "Please enter the contact's phone number";
    }

    return errors;
  };

  const submit = (form: DeliveryDetailsForm) => {
    console.log('submit');
  };

  return (
    <Background orientation="column">
      <article className="flex flex-col items-center justify-between w-full min-h-screen p-4 text-base text-center">
        <header className="text-4xl">
          <h1 className="text-4xl font-bold uppercase text-violet-700 drop-shadow-lg">
            Delivery Details
          </h1>
          <h2 className="mt-4 text-sm ">just a few details</h2>
        </header>

        <Formik<DeliveryDetailsForm>
          initialValues={initialValues()}
          validate={validate}
          onSubmit={submit}
          validateOnChange
        >
          <Form>
            <FormLayout>
              <Field
                name="street"
                placeholder="Street Address"
                component={Input}
              />
              <Field name="city" placeholder="City" component={Input} />
              <Field name="suburb" placeholder="Suburb" component={Input} />
              <Field
                name="postalCode"
                placeholder="Postal Code"
                component={Input}
              />
            </FormLayout>

            <FormLayout className="mt-2">
              <Field
                name="contact"
                placeholder="Contact person"
                component={Input}
              />
              <Field
                name="number"
                placeholder="Contact phone number"
                component={Input}
              />
            </FormLayout>
          </Form>
        </Formik>

        <footer className="flex w-full">
          <Button size="expanding" onClick={() => {}}>
            Continue
          </Button>
        </footer>
      </article>
    </Background>
  );
};
