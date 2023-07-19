export const generateUserErrorInfo = user => {
    return `
    Una o más propiedades están incompletas o no son válidas.
    Lista de propiedades obligatorias:
        - first_name: Debe ser un string (${user.name})
        - last_name: Debe ser un string (${user.last_name})
        - email: Debe ser un string (${user.email})
    `
}
