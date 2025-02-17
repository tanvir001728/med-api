import React, {useEffect, useRef} from "react";

const SearchbarDropdown = (props) => {
    const {options, onInputChange} = props;
    const ulRef=useRef();
    const inputRef=useRef();

    useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('Input box clicked');
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    })
    
    document.addEventListener('click', (event) => {
      console.log('Document clicked');
      ulRef.current.style.display = 'none';
    });
  }, []);
    return(
        <div className="search-bar-dropdown">
            <input id="searchbar" type="text" className="form-control" placeholder="Search" ref={inputRef} onChange={onInputChange}></input>
            <ul id="results" className="list-group" ref={ulRef}>
                {options.map((option, index) => {
                    return(
                        <button 
                            type="button" 
                            key={index} 
                            className="list-group-item list-group-item-action"
                            onClick={(e) => {
                                inputRef.current.value=option;
                            }}
                        >
                            {option}
                        </button>
                    )
                })}        
            </ul>
        </div>
    )
}



export default SearchbarDropdown;