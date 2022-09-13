import { useMemo } from 'react';
import { FieldInputProps, FormikProps, getIn } from 'formik';
import classNames from 'classnames';
import './components.css';
import { InputError } from '../assets';

interface InputProps {
  field: FieldInputProps<string>;
  form: FormikProps<string>;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ field, form, placeholder }) => {
  const labelClass = classNames(
    'absolute pointer-events-none top-6 left-4 transition-all',
    { 'text-xs transform-input-label text-2xs': !!field.value }
  );

  const error = useMemo(
    (): string => getIn(form.errors, field.name),
    [form.errors, field.name]
  );
  const showError = useMemo(
    (): boolean => getIn(form.touched, field.name),
    [form.touched, field.name]
  );

  return (
    <section className="relative text-base [&:first-child>input]:rounded-t-sm [&:last-child>input]:rounded-b-sm text-left">
      <input
        {...field}
        {...form}
        className="w-full pt-6 pb-2 pl-4 pr-6 sm:rounded-sm bg-black/20 focus:outline-none"
      />
      <label htmlFor={field.name} className={labelClass}>
        {placeholder}
      </label>
      <hr className="absolute bottom-0 left-0 right-0 w-11/12 m-auto border-white/20" />
      {showError && error && (
        <mark className="flex px-2 bg-white/80 text-violet-700 gap-x-1">
          <img src={InputError} />
          {error}
        </mark>
      )}
    </section>
  );
};
