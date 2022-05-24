import React, {useState} from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';
const Home = () => {

    const [todo, setTodo] = useState("")

    const [listTodo, setListTodo] = useState([
        {id: "todo1", name: "watching youtube"},
        {id: "todo2", name: "using facebook"},
        {id: "todo3", name: "reading book"} 
    ])

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) +min)
    }

    const handleOnClickBtn = () => {
        if(!todo){
            alert("Todo name's not empty");
            return;
        }
        let todoId = randomIntFromInterval(4, 9999999999999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo//String template
        }
        let currentTodoList  = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList)
        setTodo("");
        //setListTodo([...listTodo, todoItem])
    }

    const myInfor = {channel: "hoi dan it", age:25};
    const handleDeleteTodo = (id) => {
        let currentTodoList  = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList)
    }
    //props, state: object (key: value)
    return (
        <div>
            <AddTodo
                todo = {todo}
                setTodo = {setTodo}
                handleOnClickBtn = {handleOnClickBtn}
            />
            <DisplayTodo
                childData = {listTodo} // x = y   x <- y
                name = {"Eric"}
                myInfor = {myInfor}
                deleteTodoInParent = {handleDeleteTodo}
            />
                 
                 
        </div>
    );
}

// class Home extends React.Component {
//     //khai báo state
//     state = {
//         name: ''
//     }

//     //gán lại giá trị cho state
//     render() {
//         return(
//             <div>
                
//                 <label>Your name:</label>
//                 <input type="text" onChange={(event) => this.setState({name : event.target.value})}></input>
//                 <br></br>
//                 <br></br>
//                 Hello todo list with name = {this.state.name} 
//             </div>
//         )
//     }
// }

export default Home;