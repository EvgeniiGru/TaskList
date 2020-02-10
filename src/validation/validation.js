export const required = value => {
    if(value) return undefined;
    return "Обязательно для заполнения";
}

export const emailValidation = value =>
{  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Неверный формат e-mail"
     return undefined}