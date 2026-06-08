import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { validateName, validateEmail, validatePassword } from '../../utils/validation';

// Styles
import './AuthForm.scss';

// Components
import { InputField } from '../InputField';
import { ButtonLink } from '../ButtonLink';
import { ErrorMessage } from '../ErrorMessage';

export const AuthForm = ({ isLogin }) => {
  const buttonText = isLogin ? 'Login' : 'Sign Up';
  const { register, handleSubmit, setValues, formState: { errors } } = useForm({
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    console.log(data);

    setValues({
      name: '',
      email: '',
      password: '',
      remember: false,
      agree: false,
    })
  };

  return (
    <form className="AuthForm" onSubmit={handleSubmit(onSubmit)}>
      {isLogin || (
        <InputField
          name="name"
          type="text"
          register={register}
          validation={validateName}
          errorMessage={errors.name?.message}
        />
      )}

      <InputField
        name="email"
        type="text"
        register={register}
        validation={validateEmail}
        errorMessage={errors.email?.message}
      />

      <InputField
        name="password"
        type="password"
        isLogin={isLogin}
        register={register}
        validation={validatePassword}
        errorMessage={errors.password?.message}
      />

      <label className="AuthForm__Label">
        <input
          key={isLogin ? 'remember' : 'agree'}
          className="AuthForm__CheckBox"
          type="checkbox"
          {...register(
            isLogin ? 'remember' : 'agree',
            {
              required: {
                value: !isLogin,
                message: 'Please agree with Terms of Use and Privacy Policy',
              }
            }
          )}
        />

        {isLogin ? (
          "Remember me"
        ) : (
          <span>
            {"I agree with "}
            <Link to="/" className="AuthForm__Link">
              Terms of Use
            </Link>
            {" and "}
            <Link to="/" className="AuthForm__Link">
              Privacy Policy
            </Link>
          </span>
        )}
      </label>

      {errors.agree?.message && (
        <ErrorMessage message={errors.agree?.message} />
      )}

      <ButtonLink
        width="wide"
        text={buttonText}
        isButton
        disabled={!errors}
      />
    </form>
  );
};
