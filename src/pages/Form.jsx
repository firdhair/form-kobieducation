// import necessary dependencies //
import { useState, useEffect } from 'react'; 
import uniqid from "uniqid"
// import styling //
import styles from "./Form.module.scss"
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbClockHour3 } from 'react-icons/tb'
import { MdHeadsetMic } from 'react-icons/md'
import audio_1 from '../media/audio/audio_1.mp3'
import img from '../media/img/no-image.png'
// import necessary components //
import List from "../components/List"
import Modal from "../components/Modal"

const Form = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")
        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return []
        }
    })
    const [isAddNew, setIsAddNew] = useState(false)
    const [isMoreThan100, setIsMoreThan100] = useState(false)
    const [isLessThan0, setIsLessThan0] = useState(false)
    const [isSpecialChar, setIsSpecialChar] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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
                                <audio controls className={styles.questions_audio}>
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
                                        <button className={styles.button_1}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                                    </div>
                                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
                                    <div className={styles.questions__part1__question1__num}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>1</p>
                                            <p>Where is the woman from?</p>
                                        </div>
                                        <div className={styles.options}>
                                                <label>
                                                    <input type="radio" value="German" checked={selectedOption === "German"} onChange={handleOptionChange} />
                                                    German
                                                </label>
                                                <label>
                                                    <input type="radio" value="Russia" checked={selectedOption === "Russia"} onChange={handleOptionChange} />
                                                    Russia
                                                </label>
                                                <label>
                                                    <input type="radio" value="Australia" checked={selectedOption === "Australia"} onChange={handleOptionChange} />
                                                    Australia
                                                </label>
                                                <label>
                                                    <input type="radio" value="Indonesia" checked={selectedOption === "Indonesia"} onChange={handleOptionChange} />
                                                    Indonesia
                                                </label>
                                        </div>
                                    </div>
                                    <div className={styles.questions__part1__question1__num}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>2</p>
                                            <p>The woman says that you can travel from Croatia to German in 2 hours by</p>
                                        </div>
                                        <div className={styles.options}>
                                                <label>
                                                    <input type="radio" value="German" onChange={handleOptionChange}/>
                                                    German
                                                </label>
                                                <label>
                                                    <input type="radio" value="Russia" onChange={handleOptionChange}/>
                                                    Russia
                                                </label>
                                                <label>
                                                    <input type="radio" value="Australia" onChange={handleOptionChange} />
                                                    Australia
                                                </label>
                                                <label>
                                                    <input type="radio" value="Indonesia" onChange={handleOptionChange} />
                                                    Indonesia
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.questions__part1__question2}`}>
                                    <div className={styles.questions__part1__question1__info}>
                                        <p>Question 7-10</p>
                                        <button className={styles.button_1}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
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
                                                     <input type="text" placeholder='..................................'/>
                                                </label>
                                                <label>
                                                    Date of birth: 8.10.1975
                                                    <input type="text" placeholder='..................................'/>
                                                </label>
                                                <label>
                                                    Address: <span className={styles.num}>8</span>
                                                    <input type="text" placeholder='..................................'/> (street) Callington (town)
                                                </label>
                                                 <label>
                                                    Policy number: <span className={styles.num}>10</span>
                                                    <input type="text" placeholder='..................................'/> (street) Callington (town)
                                                </label>
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
                                        <button className={styles.button_1}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                                    </div>
                                    <div className={styles.diagram}>
                                        <p><i>Label the diagram/plan below</i></p>
                                        <p><i>Write the correct letter, A-G next to question 11-13</i></p>
                                    </div>
                                    <div className={styles.questions__part2__question1__image}>
                                        <img src={img}/>
                                    </div>
                                    <div className={styles.questions__part2__questions}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>11</p>
                                            <label>
                                                traffic lights
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>12</p>
                                            <label>
                                                petrol station
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>13</p>
                                            <label>
                                                blue van
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                    </div>

                                    <div className={styles.questions__part2__question2}>
                                        <div className={styles.questions__part2__question2__info}>
                                            <p>Question 14-20</p>
                                            <button className={styles.button_1}> <MdHeadsetMic color="#233644"/> Click here to listen</button>
                                        </div>
                                        <p><i>Answer the following questions using NO MORE THAN THREE WORDS AND/OR NUMBER for each answer.</i></p>
                                        
                                    <div className={styles.questions__part2__question2__num}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>14</p>
                                            <p>What end of the market are the properties?</p>
                                        </div>
                                        <div>
                                            <label>
                                                <i>answer</i>
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.questions__part2__question2__num}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>15</p>
                                            <p>What end of the market are the properties?</p>
                                        </div>
                                        <div>
                                            <label>
                                                <i>answer</i>
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.questions__part2__question2__num}>
                                        <div className={styles.num_question}>
                                            <p className={styles.num}>16</p>
                                            <p>What end of the market are the properties?</p>
                                        </div>
                                        <div>
                                            <label>
                                                <i>answer</i>
                                                <input type="text" placeholder=' ..................................'/>
                                            </label>
                                        </div>
                                    </div>
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
                        <div className={styles.status}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form