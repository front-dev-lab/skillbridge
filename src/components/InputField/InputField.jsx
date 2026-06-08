import { useState } from 'react';
import { Link } from 'react-router-dom';
import { normalizeText } from '../../utils/normalizeText';
import { toCamelCase } from '../../utils/toCamelCase';

// Styles
import './InputField.scss';

// Components
import '../ErrorMessage';
import { ErrorMessage } from '../ErrorMessage';

export const InputField = ({
  name,
  type,
  register,
  validation,
  errorMessage,
  isLogin = false,
}) => {
  const [canSeePassword, setCanSeePassword] = useState(false);
  const normalizedName = normalizeText(name);
  const placeholder = `Enter your ${normalizedName}`;
  const isPasswordField = type === 'password';
  const properType = canSeePassword ? 'text' : type;

  return (
    <label className="InputField" >
      {normalizedName}

      <div className="InputField__InputWrapper">
        <input
          className="InputField__Input"
          type={properType}
          placeholder={placeholder}
          { ...register(toCamelCase(name), { validate: validation }) }
        />

        {isPasswordField && (
          <button
            type="button"
            className={canSeePassword ? 'InputField__EyeButton InputField__EyeButton--Active' : 'InputField__EyeButton'}
            onClick={() => setCanSeePassword(!canSeePassword)}
          />
        )}
      </div>

      {(isPasswordField && isLogin) && (
        <Link className="InputField__Link">
          Forgot Password? 
        </Link>
      )}
      
      {errorMessage && (
        <ErrorMessage message={errorMessage} />
      )}
    </label>
  );
};
