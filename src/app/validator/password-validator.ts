import { FormControl } from '@angular/forms';

const symbols = new RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
const leters = new RegExp(/[a-zA-Z]/);
const numbers = new RegExp(/[0-9]/);
const strong = ['#59c420', '#59c420', '#59c420'];
const medium = ['#ffe900', '#ffe900', '#c2c2c2'];
const easy = ['red', '#c2c2c2', '#c2c2c2'];
const epmty = ['#c2c2c2', '#c2c2c2', '#c2c2c2'];
const invalid = ['red', 'red', 'red'];
const cyrillic = new RegExp(/[а-яА-Я]/);

export function PasswordValidate(control: FormControl): { [key: string]: any } | null {
  let lengthCheck: boolean = control.value.length > 7;
  let symbolCheck = symbols.test(control.value);
  let numbersCheck = numbers.test(control.value);
  let letersCheck = leters.test(control.value);
  let cyrilliCheck = cyrillic.test(control.value);

  try {
    if (cyrilliCheck) {
      return { strengthArray: invalid, message: 'Please, use only latin letters!' };
    }

    if (symbolCheck && numbersCheck && letersCheck && lengthCheck) {
      return { strengthArray: strong, require: true, message: 'Your password really strong!' };
    }

    else if (symbolCheck && letersCheck && lengthCheck) {
      return { strengthArray: medium, message: 'Please, add number!' };
    }
    else if (letersCheck && numbersCheck && lengthCheck) {
      return { strengthArray: medium, message: 'Please, add symbol!' };
    }
    else if (symbolCheck && numbersCheck && lengthCheck) {
      return { strengthArray: medium, message: 'Please, add leter!' };
    }

    else if (letersCheck && lengthCheck) {
      return { strengthArray: easy, message: 'Please, add number and symbol!' };
    }
    else if (numbersCheck && lengthCheck) {
      return { strengthArray: easy, message: 'Please, add symbol and leter!' };
    }
    else if (symbolCheck && lengthCheck) {
      return { strengthArray: easy, message: 'Please, add number and leter!' };
    }

    else if (!control.value) {
      return { strengthArray: epmty, message: 'Please, add password!' }
    }
    else if (!lengthCheck) {
      return { strengthArray: invalid, message: 'Your password must have at least 8 characters!' }
    }

    return null;
  }
  catch (error) {
    return { require: false };
  }
} 