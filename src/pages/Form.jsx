// import necessary dependencies //
import { useState, useRef } from 'react'; 
// import styling //
import styles from "./Form.module.scss"
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbClockHour3 } from 'react-icons/tb'
// import necessary media //
import audio_1 from '../media/audio/audio_1.mp3'
// import necessary components //
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'

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

    const handleOptionChange = (event, index) => {
        const newQuestions = [...questions]
        newQuestions[index-1] = {
            no: index,
            question: questions[index-1]['question'],
            options: questions[index-1]['options'],
            answer: `${event.target.value}`
        }
        setQuestions(newQuestions)
    };

    const cancelAnswerChange = (event, index) => {
        const newQuestions = [...questions]
        newQuestions[index-1] = {
            no: index,
            question: questions[index-1]['question'],
            options: questions[index-1]['options'],
            answer: ``
        }
        setQuestions(newQuestions)
    }

    const validation = (event) => {
        //console.log("test handle")
        const input = event.target.value;
        const regex = /^(?!.*\d)(\w+\s*){1,3}$/;

        setIsValid(regex.test(input));
        if(!isValid){
            setIsMoreThan3(true)
        } else if(isValid){
            setIsMoreThan3(false)
        }
        return isValid
    }

    const handleAnswerChange = (event, index) => {
        if(!validation(event)){  
            cancelAnswerChange(event, index)
        }
        if(validation(event)) {
            try {
                //setIsValid(true)
                handleOptionChange(event, index)
            } catch(e){
                console.log("error", e)
            }
        } 
    }

    const handleAnswerChange2 = (event, index) => {
        const input = event.target.value;
        const regex = /^(?!.*\d)(\w+\s*){1,3}$/;

        setIsValid2(regex.test(input));

        if(!isValid2){
            cancelAnswerChange(event, index)
            setHasMoreThan3(true)
        }
        else if(isValid2) {
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
                                
                            <Part1 questions={questions} isValid={isValid} handlePlay={handlePlay} isMoreThan3={isMoreThan3} handleAnswerChange={handleAnswerChange} handleOptionChange={handleOptionChange}/>
                            <Part2 questions={questions} isValid2={isValid2} handlePlay={handlePlay} hasMoreThan3={hasMoreThan3} handleAnswerChange2={handleAnswerChange2} handleOptionChange={handleOptionChange}/>
                            <button type="submit" className={styles.submit}>Submit</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className={styles.kobi_container_hero_wrapper__questionsstatus}>
                        <h5>Question Status</h5>
                        <p>Lorem ipsum dolor sit amet</p>
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