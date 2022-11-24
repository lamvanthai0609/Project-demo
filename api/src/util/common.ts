export const checkFomat = (string: string): boolean => {
     const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

     if (format.test(string)) {
          return true;
     } else {
          return false;
     }
};

export const checkMail = (elementValue: string) => {
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(elementValue);
};
