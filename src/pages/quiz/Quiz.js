import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";

//style
import "./Quiz.css";
export default function Quiz() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  let [score, setScore] = useState(0);
  let [disable, setDisable] = useState(false);
  let [show, setShow] = useState(true);
  const { documents } = useCollection("quiz");

  function toggle(source) {
    const name = source?.target?.name;
    const checkboxes = document.getElementsByName(name);
    for(var i=0, n=checkboxes.length;i<n;i++) {
        if(source?.target?.value === checkboxes[i].value){
            checkboxes[i].checked = true;
        }else{
            checkboxes[i].checked = false;
        }
    }
  }
  return (
    <div className="quiz-page">
      <h1>QUIZ</h1>
      <span>online assesment</span>
      <h2>score: {score} </h2>
      {showFinalResults ? (
        <div className="final-result">
          <h2>Result</h2>
          <h3>{score}</h3>
          {score > 5 ? <h3 className="pass-status">Passed</h3> : <h3 className="pass-status">Failed</h3>}
          <button className="close-btn" >Close</button>
        </div>
      ) : (
        documents &&
        documents.map((document) => {
          return (
            //question template

            <div key={document.id}>
              <h4>{document.question}</h4>

              {document.options.map((option, index) => {
                return (
                  <div className="option-style" key={index}>
                    <input
                      type="radio"
                      value={option}
                      name={document.id}

                      onChange={(e) =>{
                        if(document.answer === option){
                           setScore(score+1)
                           setDisable(true)
                           toggle(e) 
                        }
                        else setScore(score)
                        // toggle(e);
                      }
                      }
                    />
                    <p key={document.id}>{option}</p>
                    
                    {/* {console.log(document.question)} */}
                    
                    {/* {score+=1 ? document.answer === option: score} */}
                  </div>
                );
              })}
            </div>
          );
        })
        )}
        {show &&
        <button className="mark-btn" onClick={()=>setShowFinalResults(true)?setShow(false):setShow(true)}>Mark as done</button>
        }
    </div>
  );
}
