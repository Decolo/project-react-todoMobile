import React, {Component} from 'react';
import './TodoInput.css';
class TodoInput extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         inputValue :''
    //     }
    // }
    render(){
        return(
            <div className="input-box">
                <textarea className="input"
                    value={this.props.content} 
                    onChange={this.changeTitle.bind(this)}
                    onKeyPress={this.submit.bind(this)}>
                </textarea>
                <a href="#" onClick={this.clickAdd.bind(this)} className="input-btn-add">Add</a>
            </div>
        )
    }//监听了按键事件，用value无效，改用defaultValue
    submit(e){
        if(Number(e.target.value) !== 0){
                if(e.key === 'Enter'){
                this.props.onSubmit(e.target.value) 
            }
        }
    } //监听了回车这个事件
    changeTitle(e){
        this.props.onChange(e)
    }
    clickAdd(){
        if(Number(this.props.content) !== 0){
            this.props.onSubmit.call(null,this.props.content)
        }
    }
}

export default TodoInput;