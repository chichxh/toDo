import React from "react"

class ListElem extends React.Component {
    render() {
        return(
            <div className="listElem">
                <h3>{this.props.task.taskName} {this.props.task.isCompleted}</h3> 
                <label className="delete">
                    <input type="checkbox" onClick={() => this.props.onDelete(this.props.task.id)}/>
                    <span className="check"></span>
                </label>
            </div>
        )
    }  
}

export default ListElem