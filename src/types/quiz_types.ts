import React from 'react';

export type RawType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type RefinedType = {
    answer: string,
    question: string,
    option: string[]
    // RawType.incorrect_answers.concat(RawType.correct_answer)
}

export type PropsQuiz ={
    question: string,
    option: string[],
    callback: (e:React.FormEvent<EventTarget>, ans: string)=>void
}