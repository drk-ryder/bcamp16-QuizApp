import React, {useState} from 'react';
import { PropsQuiz } from '../types/quiz_types';

const QuestionCard: React.FC<PropsQuiz> = ({ question, option, callback }) => {

    let [selection, setSelection] = useState("")

    const handleSelection = (ev: any) => {
        setSelection(ev.target.value)
    }

    return (
        <div>
            <div>
                {question}
            </div>
            <form onSubmit={(e)=>callback(e, selection)}>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                            <label>
                                <input type="radio" name="opt" value={opt} required={true} checked={ selection === opt } onChange={handleSelection} />
                                <>{opt}</>
                            </label>
                            </div>
                        )
                    })
                }
                <input type="Submit" />
            </form>
        </div>
    )
}

export default QuestionCard;