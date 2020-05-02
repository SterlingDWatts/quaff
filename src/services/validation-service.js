const NAME_REGEX = /[A-z-']+/;
const USERNAME_REGEX = /([A-Za-z0-9.\-_]+)/;
const EMAIL_REGEX = /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;
const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;

const ValidationService = {
  validateFirstName(firstName) {
    if (!!firstName && firstName.length === 0) {
      return "First Name is required";
    } else if (!!firstName && firstName.startsWith(" ")) {
      return "Cannot start with a space";
    } else if (!!firstName && firstName.endsWith(" ")) {
      return "Cannot end with a space";
    } else if (!NAME_REGEX.test(firstName)) {
      return "Requires only letters, -, and '";
    }
  },
  validateNameLabel(name, touched) {
    if (name.length === 0 && touched) {
      return "Missing ";
    } else if (
      (name.startsWith(" ") || name.endsWith(" ") || !NAME_REGEX.test(name)) &&
      touched
    ) {
      return "Invalid ";
    }
  },
  validateLastName(lastName) {
    if (lastName.length === 0) {
      return "Last Name is required";
    } else if (lastName.startsWith(" ")) {
      return "Cannot start with a space";
    } else if (lastName.endsWith(" ")) {
      return "Cannot end with a space";
    } else if (!NAME_REGEX.test(lastName)) {
      return "Requires only letters, ', and -";
    }
  },
  validateUsername(username) {
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 6) {
      return "Requires at least 6 characters";
    } else if (username.length > 32) {
      return "Requires less than 33 characters";
    } else if (username.startsWith(" ")) {
      return "Cannot start with a space";
    } else if (username.endsWith(" ")) {
      return "Cannot end with a space";
    } else if (username.includes(" ")) {
      return "Cannot include a space";
    } else if (!USERNAME_REGEX.test(username)) {
      return "Letters, numbers, ., -, and _ only";
    }
  },
  validateUsernameLabel(username, touched) {
    if (username.length === 0 && touched) {
      return "Missing ";
    } else if (
      touched &&
      (username.length < 6 ||
        username.lenght > 72 ||
        username.startsWith(" ") ||
        username.endsWith(" ") ||
        username.includes(" ") ||
        !USERNAME_REGEX.test(username))
    ) {
      return "Invalid ";
    }
  },
  validateEmail(email) {
    if (email.length === 0) {
      return "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      return "Requires valid email";
    }
  },
  validateEmailLabel(email, touched) {
    if (touched && email.length === 0) {
      return "Missing ";
    } else if (touched && !EMAIL_REGEX.test(email)) {
      return "Invalid ";
    }
  },
  validateConfirmEmail(confirmEmail, email) {
    if (confirmEmail !== email) {
      return "Emails must match";
    }
  },
  validateConfirmEmailLabel(confirmEmail, email, touched) {
    if (touched && confirmEmail !== email) {
      return "Invalid ";
    }
  },
  validatePassword(password) {
    if (password.length === 0) {
      return "Password is required";
    } else if (password.startsWith(" ")) {
      return "Cannot start with a space";
    } else if (password.endsWith(" ")) {
      return "Cannot end with a space";
    } else if (password.includes(" ")) {
      return "Cannot include a space";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return "Requires an upper case character";
    } else if (!/(?=.*[a-z])/.test(password)) {
      return "Requires a lower case character";
    } else if (!/(?=.*[0-9])/.test(password)) {
      return "Requires a number";
    } else if (!/(?=.*[!@#$%^&])/.test(password)) {
      return "Requires a special character";
    } else if (password.length < 8) {
      return "Requires at least 8 characters";
    } else if (password.length > 72) {
      return "Requires less than 73 characters";
    }
  },
  validatePasswordLabel(password, touched) {
    if (touched && password.length === 0) {
      return "Missing ";
    } else if (
      touched &&
      (password.length < 8 ||
        password.length > 72 ||
        password.startsWith(" ") ||
        password.endsWith(" ") ||
        password.includes(" ") ||
        !PASSWORD_REGEX.test(password))
    ) {
      return "Invalid ";
    }
  },
  validateConfirmPassword(confirmPassword, password) {
    if (confirmPassword !== password) {
      return "Passwords must match";
    }
  },
  validateConfirmPasswordLabel(confirmPassword, password, touched) {
    if (touched && confirmPassword !== password) {
      return "Invalid ";
    }
  },
  validateMissingPassword(password, touched) {
    if (touched && password.length === 0) {
      return "invalid";
    } else if (touched && password.length > 0) {
      return "valid";
    }
  },
  validatePasswordSpace(password, touched) {
    if (password.includes(" ") && touched) {
      return "invalid";
    } else if (!password.includes(" ") && touched) {
      return "valid";
    }
  },
  validatePasswordUpperCase(password, touched) {
    if (!/(?=.*[A-Z])/.test(password) && touched) {
      return "invalid";
    } else if (/(?=.*[A-Z])/.test(password) && touched) {
      return "valid";
    }
  },
  validatePasswordLowerCase(password, touched) {
    if (!/(?=.*[a-z])/.test(password) && touched) {
      return "invalid";
    } else if (/(?=.*[a-z])/.test(password) && touched) {
      return "valid";
    }
  },
  validatePasswordNumber(password, touched) {
    if (!/(?=.*[0-9])/.test(password) && touched) {
      return "invalid";
    } else if (/(?=.*[0-9])/.test(password) && touched) {
      return "valid";
    }
  },
  validatePasswordSpecialChar(password, touched) {
    if (!/(?=.*[!@#$%^&])/.test(password) && touched) {
      return "invalid";
    } else if (/(?=.*[!@#$%^&])/.test(password) && touched) {
      return "valid";
    }
  },
  validatePasswordLength(password, touched) {
    if ((password.length < 8 || password.length > 72) && touched) {
      return "invalid";
    } else if (password.length >= 8 && password.length <= 72 && touched) {
      return "valid";
    }
  },
};

export default ValidationService;
