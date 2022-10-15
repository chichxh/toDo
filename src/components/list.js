import React from "react"
import ListElem from './listElem'

class List extends React.Component {

    render(){
        if (this.props.taskList.length > 0) {
            return(
                <div className="list">
                    <h2>Твой список задач:</h2>
                    {this.props.taskList.map((elements) => (
                        <ListElem onDelete={this.props.onDelete} key={elements.id} task={elements}/>
                    ))}
                </div>
            )
        }
        else {
            return (
                <div className="list">
                    <h2>Пока задач нет</h2>
                </div>
            )
        }
    }
}

export default List