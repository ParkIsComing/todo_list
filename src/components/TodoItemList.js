//TodoItem 컴포넌트 여러개를 렌더링해주는 역할
import React, { Component } from "react";
import TodoItem from "./TodoItem";


class TodoItemList extends Component {//컴포넌트 성능 최적화를 위해 함수형이 아닌 클래스형 컴포넌트로 작성
    render() {
        const { todos, onToggle, onRemove } = this.props;
        //todos: todo 객체들이 들어있는 배열
        //onToggle: 체크박스를 끄고 켜는 함수
        //onRemove: 아이템 삭제 하는 함수

        return (
            <div>
                <TodoItem text="안녕"/>
                <TodoItem text="리액트"/>
                <TodoItem text="반가워"/>
            </div>
        );
        
     }
     
}

export default TodoItemList;