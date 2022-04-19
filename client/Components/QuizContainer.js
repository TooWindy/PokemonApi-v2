import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import QuizAnswer from "./QuizAnswer";
import { getAlolaPokemon, getGalarPokemon, getHoennPokemon, getJohtoPokemon, getKalosPokemon, getKantoPokemon, getRandomPokemon, getSinnohPokemon, getUnovaPokemon } from "../redux/pokemon";
import { guessPokemon, quizPokemon, clearPokemon, getKantoQuizPokemon, getJohtoQuizPokemon, getHoennQuizPokemon, getSinnohQuizPokemon, getUnovaQuizPokemon,getKalosQuizPokemon,getGalarQuizPokemon,getAlolaQuizPokemon, } from "../redux/quiz";
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

  const initialGuess = (region) => {
    if(region === "kanto"){
      dispatch(getKantoPokemon())
      dispatch(getKantoQuizPokemon())
    }
    else if(region === "johto"){
      dispatch(getJohtoPokemon())
      dispatch(getJohtoQuizPokemon())
    }

    else if(region === "hoenn"){
      dispatch(getHoennPokemon())
      dispatch(getHoennQuizPokemon())
    }
    else if(region === "sinnoh"){
      dispatch(getSinnohPokemon())
      dispatch(getSinnohQuizPokemon())
    }
    else if(region === "unova"){
      dispatch(getUnovaPokemon())
      dispatch(getUnovaQuizPokemon())
    }
    else if(region === "kalos"){
      dispatch(getKalosPokemon())
      dispatch(getKalosQuizPokemon())
    }
    else if(region === "alola"){
      dispatch(getAlolaPokemon())
      dispatch(getAlolaQuizPokemon())
    }
    else if(region === "galar"){
      dispatch(getGalarPokemon())
      dispatch(getGalarQuizPokemon())
    }
    else {
      dispatch(getRandomPokemon())
      dispatch(quizPokemon())
    }
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
    //Get a new pokemon
    initialGuess(region)

  }

  const normalModeClick = () => {
    setHardMode(false)
    setAnswer(false)
    setHeader("Name that Pokemon!")
    dispatch(clearPokemon())
    initialGuess(region)
  }

  const playAgainClick = () => {
    setAnswer(false)
    setHeader("Name that Pokemon!")
    dispatch(clearPokemon())
    initialGuess(region)
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
          <QuizAnswer pokemon={pokemon} guesses={guesses} region={region} initialGuess={initialGuess} answer={answer} />
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
            <ModalRegionButtons closeModal={closeModal} setRegion={setRegion} setAnswer={setAnswer}/>
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
