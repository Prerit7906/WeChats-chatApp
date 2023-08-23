import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons'
import classes from './Search.module.css'

const Search = () => {
  const onSearchFocus=()=>{
    document.getElementById('searchbar').placeholder='';
  }
  const onSearchBlur=()=>{
    document.getElementById('searchbar').placeholder='Search or start new chat';
  }
  return (
    <div className={classes.wrapper}>
    <label className={classes.searchicon} htmlFor='searchbar'>
    <FontAwesomeIcon  icon={faMagnifyingGlass} style={{color: "#ffffff"}} />
    </label>
    <input type='text' id='searchbar' onFocus={onSearchFocus} onBlur={onSearchBlur} placeholder='Search or start new chat' className={classes.search}></input>
    <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />
    </div>
  )
}

export default Search