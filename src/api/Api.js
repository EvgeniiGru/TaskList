import * as axios from 'axios'

const instance = axios.create({
    baseURL:"https://uxcandy.com/~shapoval/test-task-backend/v2"
    // headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Access-Control-Allow-Headers': 'x-access-token',
    //     'x-access-token': localStorage.getItem('key')
    //   }
    
})

export const getTaskList = (data) =>{
    return instance.get(`/?developer=Zhenya&page=${data.pageNow}${data.sort!=""?"&sort_field="+ data.sort:""}${"&sort_direction="+ data.sortOrder}`).then(res => res.data);
}


export const auAdmin = (infoAU) =>{
    let bodyFormData = new FormData();
    bodyFormData.append("username", infoAU.login);
    bodyFormData.append("password", infoAU.password);
    return axios({
        method: 'post',
        url: "https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Zhenya",
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'}
        }).then(res =>res.data);
}


export const addTaskApi = (taskSms) => {
    let bodyFormData = new FormData();
    bodyFormData.append("username", taskSms.username);
    bodyFormData.append("email", taskSms.email);
    bodyFormData.append("text", taskSms.text);
    return  axios({
        method: 'post',
        url: "https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Zhenya",
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
        }).then(res => res.data)
}


export const changeTaskStatusServer = (newStatusTask) => {
    
    let bodyFormData = new FormData();
    bodyFormData.append("body", newStatusTask.email);
    bodyFormData.append("status", newStatusTask.status);
    bodyFormData.append("token", localStorage.getItem("key"));
    
    return  axios({
        method: 'post',
        url: `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${newStatusTask.id}?developer=Zhenya`,
        data: bodyFormData,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
        }).then(res => res.data)
}
// sort_field (id | username | email | status) - поле, по которому выполняется сортировка
// sort_direction (asc | desc) - направление сортировки