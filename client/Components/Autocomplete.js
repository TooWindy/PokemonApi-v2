import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../redux/pokemon";

const AutoComplete = ({ suggestions }) => {
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
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(searchPokemon(input))
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
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSubmit={handleSubmit}
        value={input}>
      </input>
        <button className={'submitButton'}>Submit</button>
      </form>
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  );
};
export default AutoComplete;
