import React, {Component} from 'react';
import './TodoInput.css';
class TodoInput extends Component{
    render(){
        return(
            <div className="input-box">
                <textarea className="input"
                    value={this.props.content} 
                    onChange={this.changeTitle.bind(this)}
                    onKeyPress={this.submit.bind(this)}>
                </textarea>
            </div>
        )
    }//监听了按键事件，用value无效，改用defaultValue
    submit(e){
        if(e.key === 'Enter'){
           if(e.target.value === ''){
               alert('输入不能为空')
           }else{
                this.props.onSubmit(e) 
           }
        }
    } //监听了回车这个事件
    changeTitle(e){
        this.props.onChange(e)
    }
}

export default TodoInput;