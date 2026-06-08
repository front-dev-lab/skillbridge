export const validateName = name => {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return 'Name is required';
  }

  if (trimmedName.length < 2) {
    return 'Name must be at least 2 characters';
  }

  if (trimmedName.length > 50) {
    return 'Name must be no more than 50 characters';
  }

  const namePattern = /^[\p{L}\p{M}\s'-]+$/u;
  if (!namePattern.test(trimmedName)) {
    return 'Name can contain only letters, spaces, hyphens and apostrophes';
  }

  return true;
};

export const validateEmail = email => {
  const value = email?.trim();

  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(value)) {
    return 'Please enter a valid email address';
  }

  return true;
};

export const validatePhone = phone => {
  const value = phone?.trim();

  if (!value) {
    return 'Phone number is required';
  }

  const phonePattern = /^(?:\+?380|0)\s?\(?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  if (!phonePattern.test(value)) {
    return 'Please enter a valid phone number';
  }

  return true;
};

export const validatePassword = password => {
  const value = password?.trim();

  if (!value) {
    return 'Password is required';
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters';
  }

  if (value.length > 100) {
    return 'Password must be no more than 100 characters';
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-[\]{};':"\\|,.<>/?]).+$/;
  if (!passwordPattern.test(value)) {
    return 'Password must include uppercase, lowercase, number, and special character';
  }

  return true;
};
