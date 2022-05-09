import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../redux/pokemon";
import { guessPokemon } from "../redux/quiz";

const AutoComplete = ({ suggestions, guesses,setAnswer,setHeader, pokemonName, mode }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : null
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if(mode === 'quiz'){
      dispatch(guessPokemon(input))
      if(input.toLowerCase() === pokemonName){
        setAnswer(true)
        setHeader("Correct!")
      }
      if(guesses.length > 4 && input.toLowerCase() !== pokemonName){
        setAnswer(true)
        setHeader("Game Over!")
      }
    }
    else{
      dispatch(searchPokemon(input))
    }
    setInput("")
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      handleSubmit(e)
    }
  };
  return (
    <div>
      <form className={'homeInputContainer'} onSubmit={handleSubmit}>
      <input
        className="input-wrapper"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSubmit={handleSubmit}
        placeholder="Enter Pokemon name here"
        value={input}>
      </input>
        <button className={'submitButton'}>Submit</button>
      </form>
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  );
};
export default AutoComplete;
