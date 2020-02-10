import { getTaskList, addTaskApi, changeTaskStatusServer } from "../api/Api";

const SET_TASK_LIST = "SET_TASK_LIST";
const GET_COUNT_PAGE = "GET_COUNT_PAGE";
const SET_FILTER = "SET_FILTER";
const GET_PAGE_NOW = "GET_PAGE_NOW";
const TAKE_FORM_ADD = "TAKE_FORM_ADD";
const CHANGE_ORDER = "CHANGE_ORDER";
const CHANGE_STATUS = "CHANGE_STATUS";
const UNLOGIN = "UNLOGIN";


let initialization = {
    listTask:[],
    countPage:3,
    pageNow:1,
    pages:1,
    sort:"",
    formAdd: false,
    taskSms:{},
    sortOrder:"asc",
    editingForm:false,
    itemsEditing:""
}

const LoginReduser = (state = initialization, action) => {
    switch (action.type) {
        case SET_TASK_LIST:
         return {
             ...state,
            listTask:[...action.task]
         }
        case GET_COUNT_PAGE:
            let count = Math.ceil(Number(action.countPage)/state.countPage)
            return {
                ...state,
                pages:count
            }
        case SET_FILTER:
            return{
                ...state,
                sort:action.nameSort === state.sort?"":action.nameSort
        }
        case GET_PAGE_NOW:
            return{
                ...state,
                pageNow:action.data.selected + 1
        }
        case TAKE_FORM_ADD:
            return{
                ...state,
                formAdd:action.addForm,
                editingForm:action.editingForm,
                itemsEditing:{...action.itemsEdit}
        }
        case CHANGE_ORDER:
            return{
                ...state,
                sortOrder:action.orderValue
        }
        case CHANGE_STATUS:
            let NewState = state.listTask.map(items => 
               { if(items.id === action.obj.id){
                items.status = action.obj.status;
                return items;
               }
               return items
            }
                
                )
            return{
                ...state,
                listTask:NewState
        }
        case UNLOGIN:
            localStorage.setItem("AU", "")
            localStorage.setItem("key", "")
        default:
            return state;
    }
};

export default LoginReduser;

export const setTaskList = (task) => ({ type: SET_TASK_LIST, task })
export const setPages = (countPage) => ({type: GET_COUNT_PAGE, countPage})
export const setFilter = (nameSort) => ({type: SET_FILTER, nameSort})
export const getPageNow = (data) => ({type: GET_PAGE_NOW, data})
export const getFormAdd = (addForm, editingForm, itemsEdit ) => ({type: TAKE_FORM_ADD, addForm, editingForm, itemsEdit})
export const changeOrder = (orderValue) => ({type: CHANGE_ORDER, orderValue})
export const changeStatusCreater = (obj) => ({type: CHANGE_STATUS, obj})
export const unLogin = () => ({type: UNLOGIN})
 

export const getTaskListMap = (data) => (dispatch) => {
    getTaskList(data).then(res => {
        dispatch(setTaskList(res.message.tasks))
        dispatch(setPages(res.message.total_task_count))
    })
}

export const addMessage = (taskSms) => (dispatch) => { 
    addTaskApi(taskSms).then(res => {
        if(res.status === "ok"){
         dispatch(getFormAdd(false))
         alert("Ваша задача добавлена")}
        else if(res.status === "error"){
            alert("Ошибка операции")
        }
    })
}

export const changeStatusTask = (newStatusTask) => (dispatch) => {
    changeTaskStatusServer(
        {
            ...newStatusTask,
            status: newStatusTask.status === 0 ? 10 : 0
        }).then(res => {
            debugger
            if (res.status === "ok") {
                dispatch(changeStatusCreater({...newStatusTask,
                    status: newStatusTask.status === 0 ? 10 : 0
                }))
                alert(`Статус изменен на ${newStatusTask.status === 0 ? "Невыполнено" : "Выполнено"}`)
            }
            else if (res.status === "error") {
                alert("Для смены статуса задачи требуются права администратора")
            }
        })
}