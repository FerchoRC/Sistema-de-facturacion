export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email es requerido";
    if (!emailRegex.test(email)) return "Ingresa un email valido";
    return "";
};

export const validatePassword = (password) => {
    if (!password) return "Contraseña requerida";
    if (password.lenght < 6) return "La contraseña debe tener al menos 6 caracteres";
    return "";
};