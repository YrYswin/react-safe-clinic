const REQUIRED_FIELD = "Обязательно для заполнения";
const MIN_LENGTH = "Недостоточно символов";

export const usernameValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 3,
    message: MIN_LENGTH,
  },
};

export const firstNameValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 3,
    message: MIN_LENGTH,
  },
};

export const lastNameValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 3,
    message: MIN_LENGTH,
  },
};

export const emailValidation = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^\S+@\S+$/i,
    message: "Invalid email address",
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 6,
    message: MIN_LENGTH,
  },
};

export const password2Validation = (getValues: any) => ({
  required: REQUIRED_FIELD,
  validate: (value: any) =>
    value === getValues("password") || "Ваш пароль не совподает с предыдущим",
});
