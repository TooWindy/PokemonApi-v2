import React from "react";
import { useDispatch } from "react-redux";
import { getAlolaPokemon, getGalarPokemon, getHoennPokemon, getJohtoPokemon, getKalosPokemon, getKantoPokemon, getRandomPokemon, getSinnohPokemon, getUnovaPokemon, getPaldeanPokemon } from "../redux/pokemon";


const RegionButtons = () => {
  const dispatch = useDispatch()

  const randomClick = () => {
    dispatch(getRandomPokemon())
  }
  const kantoClick = () => {
    dispatch(getKantoPokemon())
  }
  const johtoClick = () => {
    dispatch(getJohtoPokemon())
  }
  const hoennClick = () => {
    dispatch(getHoennPokemon())
  }
  const sinnohClick = () => {
    dispatch(getSinnohPokemon())
  }
  const unovaClick = () => {
    dispatch(getUnovaPokemon())
  }
  const kalosClick = () => {
    dispatch(getKalosPokemon())
  }
  const alolaClick = () => {
    dispatch(getAlolaPokemon())
  }
  const galarClick = () => {
    dispatch(getGalarPokemon())
  }

  const paldeanClick = () => {
    dispatch(getPaldeanPokemon());
  }

  return (
    <div className={'buttonContainer'}>
      <button onClick={randomClick}>Random</button>
      <button onClick={kantoClick}>Kanto</button>
      <button onClick={johtoClick}>Johto</button>
      <button onClick={hoennClick}>Hoenn</button>
      <button onClick={sinnohClick}>Sinnoh</button>
      <button onClick={unovaClick}>Unova</button>
      <button onClick={kalosClick}>Kalos</button>
      <button onClick={alolaClick}>Alola</button>
      <button onClick={galarClick}>Galar</button>
      <button onClick={paldeanClick}>Paldean</button>
    </div>
  )
}
//If for some reason you'd like to give a button an individual color
{/* <button className={'button randomButton'} onClick={randomClick}>Random</button>
<button className={'button kantoButton'} onClick={kantoClick}>Kanto</button>
<button className={'button johtoButton'} onClick={johtoClick}>Johto</button>
<button className={'button hoennButton'} onClick={hoennClick}>Hoenn</button>
<button className={'button sinnohButton'} onClick={sinnohClick}>Sinnoh</button>
<button className={'button unovaButton'} onClick={unovaClick}>Unova</button>
<button className={'button kalosButton'} onClick={kalosClick}>Kalos</button>
<button className={'button alolaButton'} onClick={alolaClick}>Alola</button>
<button className={'button galarButton'} onClick={galarClick}>Galar</button> */}
export default RegionButtons
