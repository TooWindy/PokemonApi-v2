import React from "react";
import { useDispatch } from "react-redux";
import { getAlolaPokemon, getGalarPokemon, getHoennPokemon, getJohtoPokemon, getKalosPokemon, getKantoPokemon, getRandomPokemon, getSinnohPokemon, getUnovaPokemon } from "../redux/pokemon";
import { getKantoQuizPokemon, getJohtoQuizPokemon, getHoennQuizPokemon, getSinnohQuizPokemon, getUnovaQuizPokemon,getKalosQuizPokemon,getGalarQuizPokemon,getAlolaQuizPokemon, quizPokemon, } from "../redux/quiz";

const ModalRegionButtons = (props) => {
  const dispatch = useDispatch()

  const randomQuizClick = () => {
    dispatch(getRandomPokemon())
    dispatch(quizPokemon())
    props.setRegion("random")
    props.closeModal()
  }
  const kantoQuizClick = () => {
    dispatch(getKantoPokemon())
    dispatch(getKantoQuizPokemon())
    props.setRegion("kanto")
    props.closeModal()
  }

  const johtoQuizClick = () => {
    dispatch(getJohtoPokemon())
    dispatch(getJohtoQuizPokemon())
    props.setRegion('johto')
    props.closeModal()
  }

  const hoennQuizClick = () => {
    dispatch(getHoennPokemon())
    dispatch(getHoennQuizPokemon())
    props.setRegion('hoenn')
    props.closeModal()
  }

  const sinnohQuizClick = () => {
    dispatch(getSinnohPokemon())
    dispatch(getSinnohQuizPokemon())
    props.setRegion('sinnoh')
    props.closeModal()
  }

  const unovaQuizClick = () => {
    dispatch(getUnovaPokemon())
    dispatch(getUnovaQuizPokemon())
    props.setRegion('unova')
    props.closeModal()
  }

  const kalosQuizClick = () => {
    dispatch(getKalosPokemon())
    dispatch(getKalosQuizPokemon())
    props.setRegion('kalos')
    props.closeModal()
  }

  const alolaQuizClick = () => {
    dispatch(getAlolaPokemon())
    dispatch(getAlolaQuizPokemon())
    props.setRegion('alola')
    props.closeModal()
  }

  const galarQuizClick =() => {
    dispatch(getGalarPokemon())
    dispatch(getGalarQuizPokemon())
    props.setRegion('galar')
    props.closeModal()
  }
  return (
    <div className="modalButtons">
      <button onClick={randomQuizClick} >Random</button>
      <button onClick={kantoQuizClick} >Kanto</button>
      <button onClick={johtoQuizClick} >Johto</button>
      <button onClick={hoennQuizClick} >Hoenn</button>
      <button onClick={sinnohQuizClick} >Sinnoh</button>
      <button onClick={unovaQuizClick} >Unova</button>
      <button onClick={kalosQuizClick} >Kalos</button>
      <button onClick={alolaQuizClick} >Alola</button>
      <button onClick={galarQuizClick} >Galar</button>
    </div>
  )
}

export default ModalRegionButtons
