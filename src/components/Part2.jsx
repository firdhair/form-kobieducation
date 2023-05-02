// import styling //
import styles from "../pages/Form.module.scss"
import { MdHeadsetMic } from 'react-icons/md'
// import necessary media //
import img from '../media/img/no-image.png'

const Part2 = ({questions, isValid2, handlePlay, hasMoreThan3, handleAnswerChange2, handleOptionChange}) => {
    return(
        <>
        <div  className={styles.kobi_questions__part2}>
            <div className={styles.questions__part2__title}>
                <h5>Part 2</h5> 
                <p>(Question 11-24)</p>
            </div>
            <div className={`${styles.questions__part2__question1}`}>
                <div className={styles.questions__part2__question1__info}>
                    <p>Question 11-13</p>
                    <button className={styles.button_1} onClick={handlePlay}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                </div>
                <div className={styles.diagram}>
                    <p><i>Label the diagram/plan below</i></p>
                    <p><i>Write the correct letter, A-G next to question 11-13</i></p>
                </div>
                <div className={styles.questions__part2__question1__image}>
                    <img src={img}/>
                </div>
                <div className={styles.questions__part2__questions}>
                    {questions.slice(10, 13).map((question, index) => (
                        <div className={styles.num_question}>
                        <p className={styles.num}>{question['no']}</p>
                        <label>
                            {question['question']}
                            <input type="text" placeholder=' ..................................' onChange={(event) => handleOptionChange(event, question['no'])}/>
                        </label>
                    </div>
                    ))}
                </div>
                    <div className={styles.questions__part2__question2}>
                        <div className={styles.questions__part2__question2__info}>
                            <p>Question 14-20</p>
                            <button className={styles.button_1} onClick={handlePlay}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                        </div>
                        <p><i>Answer the following questions using NO MORE THAN THREE WORDS AND/OR NUMBER for each answer.</i></p>

                    {questions.slice(13, 16).map((question, index) => (
                        <div className={styles.questions__part2__question2__num}>
                            <div className={styles.num_question}>
                                <p className={styles.num}>{question['no']}</p>
                                <p>{question['question']}</p>
                            </div>
                            <div>
                                <label>
                                    <i>answer</i>
                                    <input type="text" placeholder=' ..................................' onChange={(event) => handleAnswerChange2(event, question['no'])}/>
                                </label>
                            </div>
                        </div>
                    ))}
                       {!isValid2 && hasMoreThan3 && <p style={{ color: '#bd6a7a' }} className={styles.warning}>Please enter no more than three words and/or numbers for each question.</p>}

                    </div>
            </div>
        </div>
        </>
    )
}

export default Part2