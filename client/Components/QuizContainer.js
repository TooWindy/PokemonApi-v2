import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import QuizContent from "./QuizContent";
import QuizAnswer from "./QuizAnswer";
import { getAlolaPokemon, getGalarPokemon, getHoennPokemon, getJohtoPokemon, getKalosPokemon, getKantoPokemon, getRandomPokemon, getSinnohPokemon, getUnovaPokemon } from "../redux/pokemon";
import { guessPokemon, quizPokemon, clearPokemon, getKantoQuizPokemon, getJohtoQuizPokemon, getHoennQuizPokemon, getSinnohQuizPokemon, getUnovaQuizPokemon,getKalosQuizPokemon,getGalarQuizPokemon,getAlolaQuizPokemon, } from "../redux/quiz";
import Modal from "react-modal";
import ModalRegionButtons from "./ModalRegionButtons"
import Autocomplete from "./Autocomplete";
import pokemonList from "./assets/pokemonList"

Modal.setAppElement('#root')

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pokemon = useSelector((state) => state.pokemon || [])
  const guesses = useSelector((state) => state.guesses || [])
  const [modalIsOpen,setIsOpen] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [header, setHeader] = useState("Whats that Pokemon?")
  const [value, setValue] = useState("")
  const [hardMode, setHardMode] = useState(false)
  const [region, setRegion] = useState("random")
  const [mode, setMode] = useState("")

  useEffect(() => {
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
    setMode("quiz")
  },[])

  // const onChangeHandler= (event) => {
  //  setValue(event.target.value)
  // }

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
    setHeader("Whats that Pokemon?")
    dispatch(clearPokemon())
    //Get a new pokemon
    initialGuess(region)

  }

  const normalModeClick = () => {
    setHardMode(false)
    setAnswer(false)
    setHeader("Whats That Pokemon?")
    dispatch(clearPokemon())
    initialGuess(region)
  }

  const playAgainClick = () => {
    setAnswer(false)
    setHeader("Whats That Pokemon?")
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

  const openOptionModal = () => {
    setIsOpen('options');
  }

  const openHowToPlayModal = () => {
    setIsOpen('howToPlay')
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={"contentContainer"}>
      {/* {console.log(region)} */}
      <h1 className={"quizTitle"}>{header}</h1>
      {
        !answer && pokemon[0] ? (
        // <form className={'inputContainer'} onSubmit={handleSubmit}>
        //   <input className={'input-wrapper'} placeholder="Enter Pokemon name here" onChange={onChangeHandler}></input>
        //   <button className={'submitButton'}>Submit</button>
        // </form>
        <Autocomplete suggestions={pokemonList} guesses={guesses} setAnswer={setAnswer}setHeader={setHeader} pokemonName={pokemon[0].name} mode={mode}/>
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
        <button onClick={openHowToPlayModal}>How to play</button>
        <button className={"optionButton"}onClick={openOptionModal}>Change Region</button>
        {
          answer ? (
          <button onClick={playAgainClick}> Play Again!</button>
          ): <button className='giveUp' onClick={giveUpClick}> I Give Up!</button>
        }

        </div>

{/* //Modals */}
        {/* Options Modal */}
        <Modal isOpen={modalIsOpen === 'options'} onRequestClose={closeModal} className={'modal'}>
          <div>
            <div>
              <h2 className={"modalTitle"}>
              Choose a Region:
              </h2>
            </div>
          <div>
            <ModalRegionButtons closeModal={closeModal} setRegion={setRegion} setAnswer={setAnswer} setHeader={setHeader}/>
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
      {/* How to Play Modal */}
      <Modal isOpen={modalIsOpen === 'howToPlay'} onRequestClose={closeModal} className={'howToPlayModal'}>
        <div>
          <h1>
            How To Play:
          </h1>
          <p>
            Who's that pokemon? You have a total of 5 attempts, where one "freebie" guess is given to you to start off.
          </p>
          <p>
            Want to play in a specific region? Click "Change Region" and choose your region! Too easy? Try hard mode!
          </p>
          <div className="howToPlaySquare">
             <img src={"/squares/greenSquare.png"} />
             <p className="squareDescription">
               Correct
             </p>
          </div>
          <div className="howToPlaySquare">
             <img src={"/squares/redSquare.png"}/>
             <p className="squareDescription">
               Incorrect
             </p>
          </div>
          <div className="howToPlaySquare">
             <img src={"/squares/blueSquare.png"}/>
             <p className="squareDescription">
               N/A. This means the correct pokemon is monotype
             </p>
          </div>
          <div className="arrowSquare">
             <img src={"/squares/upIcon.png"}/>
             <p className="squareDescription">
               Higher. The correct pokemon has a higher value
             </p>
          </div>
          <div className="arrowSquare">
             <img src={"/squares/fastUpIcon.png"} className="iconSize"/>
             <p className="squareDescription">
             Much Higher. The correct pokemon has a MUCH higher value
             </p>
          </div>
          <div className="arrowSquare">
             <img src={"/squares/downIcon.png"}/>
             <p className="squareDescription">
              Lower. The correct pokemon has a lower value
             </p>
          </div>
          <div className="arrowSquare">
             <img src={"/squares/fastDownIcon.png"} className="iconSize"/>
             <p className="squareDescription">
              Much Lower. The correct pokemon has a MUCH lower value
             </p>
          </div>
        <div>
          <button className={"quitQuiz"}onClick={closeModal}> Exit </button>
        </div>
        </div>
      </Modal>
      </div>
  )
}

export default QuizContainer
