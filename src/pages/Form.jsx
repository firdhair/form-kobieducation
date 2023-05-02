// import necessary dependencies //
import { useState, useRef } from 'react'; 
// import styling //
import styles from "./Form.module.scss"
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbClockHour3 } from 'react-icons/tb'
import { MdHeadsetMic } from 'react-icons/md'
// import necessary media //
import audio_1 from '../media/audio/audio_1.mp3'
import img from '../media/img/no-image.png'
// import necessary components //
import List from "../components/List"
import Modal from "../components/Modal"

const Form = () => { 
    const audioRef = useRef(null);
    const [isValid, setIsValid] = useState(true);
    const [isValid2, setIsValid2] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMoreThan3, setIsMoreThan3] = useState(false);
    const [hasMoreThan3, setHasMoreThan3] = useState(false);

    const [questions, setQuestions] = useState([
        {   no: 1, 
            question: 'Where is the woman from?',
            options: ['German', 'Russia', 'Australia', 'Indonesia'],
            answer: ''
        },
        {   no: 2, 
            question: 'The woman says that you can travel from Croatia to German in 2 hours by',
            options: ['German', 'Russia', 'Australia', 'Indonesia'],
            answer: ''
        },
        {   no: 3, 
            question: 'Where did the woman start her European adventure?',
            options: ['German', 'Russia', 'Australia', 'Indonesia'],
            answer: ''
        },
        {   no: 4, 
            question: 'What is the name of the famous museum Lina visited in Amsterdam?',
            options: ['The Louvre', 'The Van Gogh Museum', 'The British Museum', 'The Rijksmuseum'],
            answer: ''
        },
        {   no: 5, 
            question: 'What festival did the woman attend in Germany?',
            options: ['The Carnival of Venice', 'The Oktoberfest beer festival', 'The La Tomatina festival', 'The Running of the Bulls festival'],
            answer: ''
        },
        {   no: 6, 
            question: 'In which city did the woman try delicious gelato?',
            options: ['German', 'Russia', 'Australia', 'Indonesia'],
            answer: ''
        },
        {
            no: 7,
            question: '',
            options: [],
            answer: ''
        },
        {
            no: 8,
            question: '',
            options: [],
            answer: ''
        },
        {
            no: 9,
            question: '',
            options: [],
            answer: ''
        },
        {
            no: 10,
            question: '',
            options: [],
            answer: ''
        },
        {
            no: 11,
            question: 'traffic lights',
            options: [],
            answer: ''
        },
        {
            no: 12,
            question: 'petrol station',
            options: [],
            answer: ''
        },
        {
            no: 13,
            question: 'blue van',
            options: [],
            answer: ''
        },
        {
            no: 14,
            question: 'What end of the market are the properties?',
            options: [],
            answer: ''
        },
        {
            no: 15,
            question: 'What end of the market are the properties?',
            options: [],
            answer: ''
        },
        {
            no: 16,
            question: 'What end of the market are the properties?',
            options: [],
            answer: ''
        },
        {
            no: 17,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 18,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 19,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 20,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 21,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 22,
            question: '',
            options: [],
            answer: 'answer'
        },
        {
            no: 23,
            question: '',
            options: [],
            answer: ''
        },
        {
            no: 24,
            question: '',
            options: [],
            answer: ''
        },
    ])

    const handleOptionChange = (e, index) => {
        const newQuestions = [...questions]
        newQuestions[index-1] = {
            no: index,
            question: questions[index-1]['question'],
            options: questions[index-1]['options'],
            answer: `${e.target.value}`
        }
        setQuestions(newQuestions)
    };
    

    const validation = (event) => {
        //console.log("test handle")
        const input = event.target.value;
        const regex = /^(?!.*\d)(\w+\s*){1,3}$/;

        setIsValid(regex.test(input));
        console.log("apakah valid", isValid)
        if(!isValid){
            setIsMoreThan3(true)
        } else if(isValid){
            setIsMoreThan3(false)
        }
        return isValid
    }

    const handleAnswerChange = (event, index) => {
        const newQuestions = [...questions]
        console.log("handleAnswerChange")
        if(!validation(event)){
            console.log("salah")
            newQuestions[index-1] = {
                no: index,
                question: questions[index-1]['question'],
                options: questions[index-1]['options'],
                answer: ``
            }
            setQuestions(newQuestions)
        }
        if(validation(event)) {
            console.log("validation true")
            //setIsValid(true)
            try {
                //setIsValid(true)
                handleOptionChange(event, index)
            } catch(e){
                console.log("error", e)
            }
        } 
    }

    const handleAnswerChange2 = (event, index) => {
        console.log("handleAnswerChange2")
        const input = event.target.value;
        const regex = /^(?!.*\d)(\w+\s*){1,3}$/;
        const newQuestions = [...questions]

        setIsValid2(regex.test(input));

        if(!isValid2){
            console.log("salah2")
            newQuestions[index-1] = {
                no: index,
                question: questions[index-1]['question'],
                options: questions[index-1]['options'],
                answer: ``
            }
            setQuestions(newQuestions)
            setHasMoreThan3(true)
        }
        else if(isValid2) {
            console.log("validation2 true", event.target.value)
            setHasMoreThan3(false)
            //setIsValid2(true)
            try {
                handleOptionChange(event, index)
            } catch(e){
                console.log("error", e)
            }
        }
    }

    const handlePlay = (event) => {
        event.preventDefault()
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return(
        <div className={styles.kobi_wrapper}> 
            <div className={styles.header_dark}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
            <div className={styles.kobi_container}> 
                <div className={styles.kobi_container__header_wrapper}>
                    <div className={styles.kobi_container__header}>
                        <h3>Practise 1 - Listening Test</h3>
                        <div className={styles.kobi_container__header__buttons}>
                            <button className={styles.button_1}>Instruction</button>
                            <button className={styles.exit}><IoIosCloseCircleOutline style={{ top: '10px', fontWeight: '500'}}/> <span>Exit</span></button>
                        </div>
                    </div>
                </div>   
                <div className={styles.kobi_container_hero_wrapper}>
                    <div className={styles.kobi_container_hero_wrapper__questions}>
                        <div className={styles.kobi_questions}>
                            <div className={styles.kobi_questions__listening}>
                               <div className={styles.kobi_questions__listening__upper}>
                                    <h4>Listening Tip</h4>
                                    <button><TbClockHour3/> <span>Time Left 44.55</span></button>
                               </div>  
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel leo ipsum. Quisque nisl erat, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <audio controls className={styles.questions_audio} ref={audioRef}>
                                    <source src={audio_1} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <form>
                                
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
                            <div className={styles.kobi_questions__part2}>
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
                            <button type="submit" className={styles.submit}>Submit</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className={styles.kobi_container_hero_wrapper__questionsstatus}>
                        <h5>Question Status</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                        {/* <div className={styles.status}>
                            <div className={`${styles.status__answer} answer`} style={{ backgroundColor: 'yellow'}}><p>1</p></div>
                            <div className={`${styles.status__answer} answer`}><p>2</p></div>
                            <div className={`${styles.status__answer} answer`}><p>3</p></div>
                            <div className={`${styles.status__answer} answer`}><p>4</p></div>
                            <div className={`${styles.status__answer} answer`}><p>5</p></div>
                            <div className={`${styles.status__answer} answer`}><p>6</p></div>
                            <div className={`${styles.status__answer} answer`}><p>7</p></div>
                            <div className={`${styles.status__answer} answer`}><p>8</p></div>
                            <div className={`${styles.status__answer} answer`}><p>9</p></div>
                            <div className={`${styles.status__answer} answer`}><p>10</p></div>
                            <div className={`${styles.status__answer} answer`}><p>11</p></div>
                            <div className={`${styles.status__answer} answer`}><p>12</p></div>
                            <div className={`${styles.status__answer} answer`}><p>13</p></div>
                            <div className={`${styles.status__answer} answer`}><p>14</p></div>
                            <div className={`${styles.status__answer} answer`}><p>15</p></div>
                            <div className={`${styles.status__answer} answer`}><p>16</p></div>
                            <div className={`${styles.status__answer} answer`}><p>17</p></div>
                            <div className={`${styles.status__answer} answer`}><p>18</p></div>
                            <div className={`${styles.status__answer} answer`}><p>19</p></div>
                            <div className={`${styles.status__answer} answer`}><p>20</p></div>
                            <div className={`${styles.status__answer} answer`}><p>21</p></div>
                            <div className={`${styles.status__answer} answer`}><p>22</p></div>
                            <div className={`${styles.status__answer} answer`}><p>23</p></div>
                            <div className={`${styles.status__answer} answer`}><p>24</p></div>
                        </div> */}
                        <div className={styles.status}>
                            {questions.map((question, index) => (
                                <div className={`${styles.status__answer} answer`} style={{ backgroundColor: question['answer'] !== "" ? "#caf0ec" : "#fbd9de" }}><p>{question['no']}</p></div>
                            ))}
                        </div>
                        <div className={styles.ket}>
                            <h5>Ket</h5>
                            <div className={styles.ket_circle}>
                                <div className={styles.circle_blue}></div>
                                <p>Answered</p>
                            </div>
                            <div className={styles.ket_circle}>
                                <div className={styles.circle_red}></div>
                                <p>Unanswered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form