export const CheckValdation = (email , phone )=>{
    const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    // const ispasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isphoneValid = /^(\+91-|\+91|0)?\d{10}$/.test(phone)
    if(!isemailValid) return "Email is not Valid"
    if(!isphoneValid) return "number is not Valid"
   


    return null;
}