// import styling //
import styles from "../pages/Form.module.scss"
import { MdHeadsetMic } from 'react-icons/md'

const Part1 = ({questions, isValid, handlePlay, isMoreThan3, handleAnswerChange, handleOptionChange}) => {
    return(
        <>
        <div className={styles.kobi_questions__part1}>
                                <div className={styles.questions__part1__title}>
                                    <h5>Part 1</h5> 
                                    <p>(Question 1-10)</p>
                                </div>
                                <div className={`${styles.questions__part1__question1}`}>
                                    <div className={styles.questions__part1__question1__info}>
                                        <p>Question 1-6</p>
                                        <button className={styles.button_1} onClick={handlePlay}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                                    </div>
                                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
                                    {questions.slice(0,6).map((question, index) => (
                                        <div className={styles.questions__part1__question1__num} key={index}>
                                            <div className={styles.num_question}>
                                                <p className={styles.num}>{question['no']}</p>
                                                <p>{question['question']}</p>
                                            </div>
                                            <div className={styles.options}>
                                                    {question['options'].map((option) => (
                                                        <label>
                                                            <input type="radio" value={option} checked={option === question['answer']} onChange={(e) => handleOptionChange(e, question['no'])} />
                                                            {option}
                                                        </label>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`${styles.questions__part1__question2}`}>
                                    <div className={styles.questions__part1__question1__info}>
                                        <p>Question 7-10</p>
                                        <button className={styles.button_1} onClick={handlePlay}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                                    </div>
                                    <p><i>Complete the form below, using NO MORE THAN THREE WORDS AND/OR NUMBER for each answer.</i></p>
                                    <div className={styles.questions__part1__question2__form}>
                                            <p>Travel Safe</p>
                                           <form>
                                                <label>
                                                    Department: Motor Insurance
                                                </label>
                                                <br/>
                                                <label>
                                                    Client details:
                                                </label>
                                                <label>
                                                    Name: Elisabeth <span className={styles.num}>7</span>
                                                    <input type="text" placeholder='..................................' onChange={(event) => handleAnswerChange(event, 7)} />
                                                </label>
                                                <label>
                                                    Date of birth: 8.10.1975 <span className={styles.num}>8</span>
                                                    <input type="text" placeholder='..................................' onChange={(event) => handleAnswerChange(event, 8)} />
                                                </label>
                                                <label>
                                                    Address: <span className={styles.num}>9</span>
                                                    <input type="text" placeholder='....................................................................' onChange={(event) => handleAnswerChange(event, 9)} /> (street) Callington (town)
                                                </label>
                                                 <label>
                                                    Policy number: <span className={styles.num}>10</span>
                                                    <input type="text" placeholder='....................................................................' onChange={(event) => handleAnswerChange(event, 10)} /> 
                                                </label>
                                                {!isValid &&  isMoreThan3 && <span style={{ color: '#bd6a7a' }} className={styles.warning}>Please enter no more than three words and/or numbers for each question.</span>}
                                            </form>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default Part1