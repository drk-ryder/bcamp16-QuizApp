import { RawType, RefinedType } from './../types/quiz_types';
import { ShuffleArray } from './ShuffleArray';

const FetchAPI = async (number: number, level: string): Promise<RefinedType[]> => {
    let fetchAPI = await fetch(`https://opentdb.com/api.php?amount=${number}&category=19&difficulty=${level}`);
    let { results } = await fetchAPI.json();

    const dataArray: RefinedType[] = results.map((mapObj: RawType) => {
        return {
            answer: mapObj.correct_answer,
            question: mapObj.question,
            option: ShuffleArray(mapObj.incorrect_answers.concat(mapObj.correct_answer))
        }
    })

    return dataArray;
}

export default FetchAPI;