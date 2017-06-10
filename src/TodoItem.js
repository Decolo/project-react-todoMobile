import React, { Component } from 'react';
import './TodoItem.css'
export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            editable: false 
        }
    }
    render() {
        return ( 
            <div>
                <input type="checkbox" id={this.props.index}
                checked={ this.props.todo.status === "completed" }
                onChange={ this.toggle.bind(this) }/> 
                <label htmlFor={this.props.index} className="check-box">
                </label>
                {this.state.editable ? 
                    <div className="edit-wrapper">
                        <div className="edit-container">
                                <textarea className="edit-box" value={this.props.todo.itemContent}
                                onKeyPress={this.submit.bind(this)}
                                onChange={this.changeContent.bind(this)}
                                ></textarea>
                                <a href="#" onClick={this.clickFinish.bind(this)} className="edit-btn-finish">Finish</a>
                        </div>
                        <div onClick={this.closeEdit.bind(this)} className="edit-bp"></div>
                    </div>
                : null}
                <div className="item-content">
                    {!this.state.editable ? <p>{this.props.todo.itemContent}</p> : null}
                </div>
                <div className="btn-edit-delete">
                    <div onClick={ this.showEdit.bind(this) }
                                className="btn-edit"><i className="iconfont icon-bianji"></i>
                    </div>
                    <div onClick={ this.delete.bind(this) }
                            className="btn-delete"><i className="iconfont icon-shanchu"></i>
                    </div>
                </div>
            </div>
            )
        }
        submit(e){
            if(e.key === 'Enter'){
                this.setState({
                    editable: false
                })
            }
        }
        changeContent(e){
            this.props.onEdite(e, this.props.todo)
        }  

        showEdit(){
            this.setState({
                editable: true
            })
        }
        clickFinish(){
            this.setState({
                editable: false
            })
        }
        closeEdit(){
            this.setState({
                editable: false
            })
        }
        delete(e) {
            this.props.onDelete(e, this.props.todo)
        }
        toggle(e) {
            this.props.onToggle(e, this.props.todo)
        }
    }

