//체크값이 활성화되어있으면 체크 표시를 보여주고, 마우스가 위에 있을 때는 좌측에 엑스마크를 보여주는 컴포넌트

import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => { //엑스마크
                    e.stopPropagation();//이벤트의 확산은 멈춰줌. onToggle은 실행되지 않고 onRemove만 실행되게
                    onRemove(id)}
                }>&times;</div> 
                <div className={`todo-text ${checked && 'checked'}`}>  {/*템플릿 리터럴-표현식 삽입법*/}
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;