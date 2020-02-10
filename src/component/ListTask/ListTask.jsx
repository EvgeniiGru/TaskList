import React from 'react'
import classes from './ListTask.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import ReactPaginate from 'react-paginate'
import FormAddRedux from './addTask'
import { NavLink } from 'react-router-dom'

const AddForm = (props) => {
    const onSubmit  = (formDate) => {
        props.addMessage(formDate);
    }

    return  <div className={classes.blur}>
                 <FormAddRedux onSubmit ={onSubmit} 
                 getFormAdd = {props.getFormAdd}
                 editingForm = {props.editingForm}
                 itemsEditing={props.itemsEditing}
                 />
             </div>
}

const ListTask = (props) => {
    
    let ListTaskMap = props.listTask.map(item=> {
        return (
            <li className={item.status==0?classes.item_task:classes.item_task_active} key={item.id} id={item.id} onClick={props.AU? () => props.changeStatusTask(item):()=>{alert("Для смены статуса задачи требуются права администратора")}}>
                <TextareaAutosize readOnly="readonly" minRows={4} maxRows={4} className={item.status==0?classes.item_name:classes.item_name_active} value={item.username} />
                <TextareaAutosize readOnly="readonly" minRows={4} maxRows={4} className={item.status==0?classes.item_mail:classes.item_mail_active} value={item.email}/>
                <TextareaAutosize readOnly="readonly" minRows={4} maxRows={4} className={item.status==0?classes.item_text:classes.item_text_active} value={item.text}/>
                {   item.status==0?
                    <input type="button" className={classes.item_status_item_red} value=""/>:
                    <input type="button" className={classes.item_status_item_green} value=""/>
                }

            </li>
    )});

    return <div className={classes.app}  >
        {!props.AU?<NavLink to="/login" className={classes.login}>Авторизироваться</NavLink>:
        <span className={classes.login} onClick={props.unLogin}>Разлогиниться</span>}
       {props.formAdd?<AddForm getFormAdd = {props.getFormAdd} 
            addMessage={props.addMessage}
            editingForm = {props.editingForm}
            itemsEditing={props.itemsEditing}/>:null}

    <div className={classes.body} onSubmit={props.handleSubmit} action="">
        <div className={classes.head_panel}>
            <div className= {classes.block_add}>
                <button className= {classes.bt_add}  onClick={() => props.getFormAdd(true,false,"")}>Добавить задачу</button> 
            </div>
            <div className={classes.block_filter}>
                <b className={classes.bt_label}>Cортировка:</b>  
                <button className={props.sort === "username"? classes.bt_name + " " + classes.bt_action: classes.bt_name}
                 onClick={()=>props.setFilter("username")}>Имя Пользователя</button>
                <button className={props.sort === "email"? classes.bt_mail + " " + classes.bt_action: classes.bt_mail}
                onClick={()=>props.setFilter("email")}>Mail</button>
                <button className={props.sort === "status"? classes.bt_status + " " + classes.bt_action: classes.bt_status}
                 onClick={()=>props.setFilter("status")}>Статус</button>
                 {props.sortOrder==="asc"?
                <button className={classes.sort_order} onClick={()=>props.changeOrder("desc")} >Возр.</button>:
                <button className={classes.sort_order} onClick={()=>props.changeOrder("asc")}>Убыв.</button>
                }
            </div>    
        </div>
        <ul className={classes.list_task}>
            <li className={classes.item_task + ' ' + classes.header}>
                <TextareaAutosize readOnly="readonly" minRows={2}  className={classes.item_name+ ' ' + classes.header} value="Имя Пользователя"/>
                <TextareaAutosize readOnly="readonly" minRows={2}  className={classes.item_mail+ ' ' + classes.header} value="Маил"/>
                <TextareaAutosize readOnly="readonly" minRows={2}  className={classes.item_text+ ' ' + classes.header} value="Текст задачи"/>
                <TextareaAutosize readOnly="readonly" minRows={2}  className={classes.item_status+ ' ' + classes.header} value="Статус"/>
            </li>
            {ListTaskMap}
        </ul>
        
        <ReactPaginate containerClassName={classes.block_pages} 
        nextLabel={">"}
        previousLabel={"<"}
        pageCount={props.pages} 
        pageRangeDisplayed={10} 
        marginPagesDisplayed={1}
        containerClassName = {classes.container}
        pageClassName={classes.page}
        activeClassName={classes.page_active}
        pageLinkClassName={classes.a_style}   
        onPageChange = {props.getPageNow}
        nextClassName={classes.page_next}
        previousClassName={classes.page_next}
        previousLinkClassName={classes.a_style}
        nextLinkClassName={classes.a_style}/>
        
        
    </div>
 </div>
}


export default ListTask;