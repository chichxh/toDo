import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: "", 
            isCompleted: false,
        }
    }

    render(){
        return (
            <div className="form">
                <form ref={(el) => this.newForm = el}>
                    <input className="nameInput" placeholder="Введеите задачу" onChange={(e) => this.setState({taskName: e.target.value})}></input>
                    <button className="buttonSubmit" type="button" onClick={() => {
                        this.newForm.reset()
                        this.props.onAdd({
                            taskName: this.state.taskName,
                            })
                        }}>
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default Form