import React, { useState } from 'react';
import './App.css';
import CustomSelect from './CustomSelect';
import NumberType from './NumberType';
import QuestionType from './questionType.json';
import TextareaType from './TextareaType';

function App() {
  const [questionTitle, setQuestionTitle] = useState('')
  const [submitDone, setSubmitDone] = useState(false)
  const [selectType, setSelectType] = useState('Answer Type')
  const [numberItems, setNumberItems] = useState([{ placeholder: "", min: "", max: "" }]);
  const [textareaItems, setTextareaItems] = useState([{ placeholder: "", min: "", max: "", rows: "" }]);

  const handleSubmit = () => {
    setSubmitDone(true)
    let result={
      questionTitle:questionTitle,
      selectType:selectType,
    }
    if(numberItems.length > 1)
    result.numberItems = numberItems;
    if(textareaItems.length > 1)
    result.textareaItems= textareaItems;
    console.log("Submit: ",result)
    setSelectType("Answer Type")
    setQuestionTitle("")
    setNumberItems([{ placeholder: "", min: "", max: "" }])
    setTextareaItems([{ placeholder: "", min: "", max: "", rows: "" }])
    setSubmitDone(false)
  }
  return (
    <div className="App">

      <div className="container">
        <h3>Add Question</h3>
        <input type="text" value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)} placeholder="Question Title" />

        <CustomSelect typeList={QuestionType} selectType={selectType} setSelectType={setSelectType} />
        {(selectType == "Number" && <NumberType numberItems={numberItems} setNumberItems={setNumberItems}/>)}
        {(selectType == "Textarea" && <TextareaType textareaItems={textareaItems} setTextareaItems={setTextareaItems} />)}
        {(submitDone && 
          <div style={{marginTop:5,marginBottom:5}}>
            <small style={{color:"green"}}>Add question successful</small>
          </div>
          )}
        <button onClick={() => handleSubmit()} className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
