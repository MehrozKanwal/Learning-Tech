import { useState, useRef, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

import "../../components/SideNav";
import "./CreateQuiz.css";
import SideNav from "../../components/SideNav";
import Spinner from "../../components/Spinner";
import { useCollection } from "../../hooks/useCollection";

export default function CreateQuiz() {
  const [ loading, setLoading ] = useState(null);
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("quiz");
  const [question, setQuestion] = useState("");
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);

  let [questionCollection, setQuestionCollection] = useState([]);
  // let [quizCollection, setQuizCollection] = useState([])
  const [answer, setAnswer] = useState("");
  const [newOption, setNewOption] = useState("");
  const [options, setOptions] = useState([]);
  const optionInput = useRef(null);
  const {courses} = useCollection('course');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuestion("");
    setAnswer("");
    questionCollection = [question, options, answer];
 
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
     


    const quizCollection = {
      question,
      options: options,
      answer,
      createdBy,
    };
    


    await addDocument(quizCollection);
    if (!response.error) {
      // navigate("/courses");
      window.location.reload();
    }

    
    // console.log(quizCollection);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const opt = newOption.trim();

    if (opt && !options.includes(opt)) {
      setOptions((prevOptions) => [...prevOptions, opt]);
    }
    setNewOption("");
    optionInput.current.focus();
    
  };
  const handleComplete = (e) => {
    e.preventDefault();
    navigate("/courses");
  };


  return (
    <div>
      <SideNav />
      <div className="create-form-container create-quiz-container ">
        <form onSubmit={handleSubmit}>
          <h1>Create New Quiz </h1>
          <h2 className="question-heading">Question</h2>
          
          {/* taking question */}
          <input
            required
            type="text"
            placeholder="Enter question"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />

          {/* taking options */}
          <h2 className="options-heading">Options</h2>
          <div className="option-container">
            <input
              className="options"
              type="text"
              placeholder="Enter Option"
              onChange={(e) => setNewOption(e.target.value)}
              value={newOption}
              ref={optionInput}

            />
            <button onClick={handleAdd} className="option-add-btn">
              Add
            </button>
          </div>
          <p>
            Options:{" "}
            {options.map((o) => (
              <em key={o}>{o},</em>
            ))}
          </p>

          {/* taking answer */}
          <h2 className=" answer-heading">Answer</h2>
          <input
            required
            className="answer"
            type="text"
            placeholder="Enter Answer"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />

          {/* insert question 1 */}
          {!loading && <button className="quiz-submit-btn">Insert</button>}
          {loading && <Spinner />}

          <button
            onClick={handleComplete}
            className="quiz-submit-btn complete-btn"
          >
            Complete
          </button>
        </form>
      </div>
    </div>
  );
}
