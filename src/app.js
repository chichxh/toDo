import React from "react"
import Form from './components/form'
import Header from './components/header'
import List from './components/list'

class App extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            taskList: [
                
            ]
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    render(){
        return (
            <div className="mainDiv">
                <Header />
                <Form onAdd={this.addTask}/>
                <List taskList={this.state.taskList} onDelete={this.deleteTask}/>
            </div>
        )
    }

    addTask(task) {
        const id = this.state.taskList.length + 1
        this.setState({taskList: [...this.state.taskList, {id, ...task}]})
    }

    deleteTask(id) {
        this.setState({
            taskList: this.state.taskList.filter((element) => element.id !== id)
        })
    }
}

export default App