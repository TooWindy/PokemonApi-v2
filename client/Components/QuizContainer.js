import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import QuizAnswer from "./QuizAnswer";
import { getRandomPokemon } from "../redux/pokemon";
import { guessPokemon, quizPokemon, clearPokemon } from "../redux/quiz";
import Modal from "react-modal";
import ModalRegionButtons from "./ModalRegionButtons"

Modal.setAppElement('#root')

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])
  const guesses = useSelector((state) => state.guesses || [])
  const [modalIsOpen,setIsOpen] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [header, setHeader] = useState("Name that Pokemon!")
  const [value, setValue] = useState("")
  const [hardMode, setHardMode] = useState(false)
  const [region, setRegion] = useState("random")

  useEffect(() => {
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
  },[])

  const onChangeHandler= (event) => {
   setValue(event.target.value)
  }
  // Button Functions
  const quitClick = () => {
    history.push("/")
  }

  const hardClick = () => {
    setHardMode(true)
    setAnswer(false)
    setHeader("Name that Pokemon!")
    dispatch(clearPokemon())
    //Get a new random pokemon
    dispatch(getRandomPokemon())
    //Get a new starting guessed pokemon
    dispatch(quizPokemon())
  }

  const normalModeClick = () => {
    setHardMode(false)
    setAnswer(false)
    setHeader("Name that Pokemon!")
    dispatch(clearPokemon())
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
  }

  const playAgainClick = () => {
    setAnswer(false)
    setHeader("Name that Pokemon!")
    dispatch(clearPokemon())
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
  }

  const giveUpClick = () => {
    setAnswer(true)
    setHeader("Game Over!")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(guessPokemon(value))
    event.target.reset()

    //If user guesses correctly
    if(value.toLowerCase() === pokemon[0].name){
      setAnswer(true)
      setHeader("Correct!")
    }
    //If the user doesn't guess correctly on the 6th guess, the game ends
    if(guesses.length > 4 && value.toLowerCase() !== pokemon[0].name){
      setAnswer(true)
      setHeader("Game Over!")
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={"contentContainer"}>
      {/* {console.log(region)} */}
      <h1 className={"quizTitle"}>{header}</h1>
      {
        !answer ? (
        <form className={'inputContainer'} onSubmit={handleSubmit}>
          <input className={'input-wrapper'} placeholder="Enter Pokemon name here" onChange={onChangeHandler}></input>
          <button className={'submitButton'}>Submit</button>
        </form>
        ) : null
      }

        <div className="pokemon">
          <QuizContent pokemon={pokemon} answer={answer} setAnswer={setAnswer} guesses={guesses} hardMode={hardMode}/>
        </div>
        <div className="answerWrapper">
          <QuizAnswer pokemon={pokemon} guesses={guesses} />
        </div>
        <div className="buttonContainer">
        <button className={"quitQuiz"} onClick={quitClick}>Quit</button>
        <button onClick={openModal}>Options</button>
        {
          answer ? (
          <button onClick={playAgainClick}> Play Again!</button>
          ): <button className='giveUp' onClick={giveUpClick}> I Give Up!</button>
        }

        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={'modal'}>
          <div>
            <div>
              <h2 className={"modalTitle"}>
              Choose a Region:
              </h2>
            </div>
          <div className="modalContent">
            <ModalRegionButtons closeModal={closeModal} setRegion={setRegion}/>
            <div className ="optionButtons">
              {
                hardMode ? (
                <button className='normalMode' onClick={normalModeClick}> Normal Mode</button>
                ):<button className='hardMode' onClick={hardClick}> Hard Mode </button>
              }
              <button className={"quitQuiz"}onClick={closeModal}> Exit </button>
            </div>
          </div>
        </div>
      </Modal>
      </div>
  )
}

export default QuizContainer
