import { auAdmin } from "../api/Api";
const SET_STATUS_AU = "SET_STATUS_AU"

let initialization = {
    valueAutorization:false
};

const LoginReduser = (state = initialization, action) => {
    switch (action.type) { 
        case  SET_STATUS_AU:
            return{
                ...state,
                valueAutorization:action.statusAU
            }
        default:
            return state;
    }
};

const setAuStatus = (statusAU) => ({type:SET_STATUS_AU, statusAU})

export const Autorization = (infoAU) => (dispatch) => { 
    auAdmin(infoAU).then(res => {
        debugger
        if(res.status === "ok"){
            dispatch(setAuStatus(true))
            localStorage.setItem("key", res.message.token);
            localStorage.setItem("AU", true);
            alert("Регистрация прошла успешна!")}
        else if(res.status === "error"){
            alert("Неверный логин или пароль")
        }
    })
}

export default LoginReduser;

