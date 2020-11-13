import React, { useEffect, useState } from 'react';
import FetchAPI from './services/FetchAPI';
import './App.css';
import { RefinedType } from './types/quiz_types';
import QuestionCard from './components/QuestionCard';

function App() {

  let [quiz, setQuiz] = useState<RefinedType[]>([])
  let [clickState, setClickState] = useState(0);

  let [score, setScore] = useState(0)


// API Fetch
  useEffect(() => {
    let fetchData = async () => {
      const data: RefinedType[] = await FetchAPI(5, "hard")
      setQuiz(data)
    }
    fetchData();
  }, []);

  //Receiving data from Question Card
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentAnswer = quiz[clickState]
    console.log(currentAnswer.answer, "right Answer")
    console.log(userAns, "userAnswer");
    
    if( userAns === currentAnswer.answer){
      setScore(++score)
    }

    if (clickState !== quiz.length - 1)
      setClickState(++clickState);
    else{
      alert("You scored "+score+" out of "+quiz.length)
      setClickState(0)
      setScore(0)
    }    
  }

  
  if (!quiz.length)
    return <h3>Loading...</h3>

  return (
    <div>
      <QuestionCard option={quiz[clickState].option} question={quiz[clickState].question} callback={handleSubmit} />
    </div>
  );
}

export default App;
