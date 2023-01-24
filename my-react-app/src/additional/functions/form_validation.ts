function formValidation(login: string, pass: string) {
  if (login === 'admin') {
    if (Number(pass) === 123) {
      return true;
    }
    return false;
  }
  return false;
}

export { formValidation };
