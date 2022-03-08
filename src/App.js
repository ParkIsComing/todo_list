import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from './components/Form';
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3
  
  state = {
    input: '',
    todos: [
      { id:0, text: ' 해야할 것들을 작성하세요', checked: false},
      { id:1, text: ' 한 것들은 체크하세요', checked: true},
      { id:2, text: ' x를 누르면 지울 수 있습니다', checked: false}
    ]
  }

//handleChange()는 텍스트 내용이 바뀌면 sate를 업데이트
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

//handleCreate()는 버튼이 클릭되면 새로운 todo 생성하고 todos 업데이트(todos 배열에 추가)
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ //리액트에서 배열을 다룰 때는 push말고 concat
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

//handleKeyPress()는 input에서 엔터키 누르면 버튼를 누른것과 같이 동작하도록 함
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);//파라미터로 받은 id로 몇번째 아이템인지 찾음
    const selected = todos[index];
    const nextTodos = [...todos];//배열을 복사함

    nextTodos[index] = {//기존값 복사, checked 값 덮어쓰기
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {//비구조화 할당
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return(
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          />
        )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>  
     ); 
  }
}

export default App;
