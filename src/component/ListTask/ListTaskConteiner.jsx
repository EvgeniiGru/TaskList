import React from 'react'
import ListTask from '../ListTask/ListTask'
import { connect } from 'react-redux'
import {getTaskListMap, setFilter, getPageNow, getFormAdd,
    addMessage, changeOrder, changeStatusTask,
    unLogin} from '../../redux/ListTaskReduser'

class ListTaskClass extends React.Component{

componentDidMount(){
     this.props.getTaskListMap(this.props);
}

componentDidUpdate(prevProps, prevState){
    if (JSON.stringify(prevProps)!==JSON.stringify( this.props))
    this.props.getTaskListMap(this.props);
}

render() {
        return(
            <ListTask {...this.props}/>  
        )
    }
}

let mapstate = (state) => {
    return{...state.listTask,
    AU:localStorage.getItem("AU") === "true"?true:false}
}

export default connect(mapstate,{
    unLogin,
    changeOrder,
    addMessage,
    getFormAdd,
    setFilter,
    getTaskListMap,
    getPageNow,
    changeStatusTask})(ListTaskClass)