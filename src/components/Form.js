import React from "react";
import './Form.css';

//value: 인풋 내용
//onCreate: 버튼이 클릭될 때 실행할 함수
//onChange: 인풋 내용이 변경될 때 실행되는 함수
//onKeyPress: 인풋에서 키를 입력할 때 실행되는 함수. 나중에 enter가 눌렸을 때 버튼을 누른(onCreate) 것과 같게 하기 위해.
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form;