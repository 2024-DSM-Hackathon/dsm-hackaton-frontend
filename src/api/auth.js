const { AuthInstance } = require(".")

const signUpApi = async({registration_number, name, info, id, pw, image}) =>{
    console.log("image",registration_number,  image)
    const response = await AuthInstance.post("/signup", {
        registration_number,
        name,
        info,
        id,
        pw,
        image
    })
    return response.data
}

const loginApi = async() => {
    const response = await AuthInstance.post("/signin", {
            id,
            pw
    })
    return response.data
}

export { signUpApi, loginApi } 