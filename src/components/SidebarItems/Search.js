import React, { useState } from 'react'
import dp from '../../assets/bohemian-man-with-his-arms-crossed.jpg'
import prerit from '../../assets/Prerit image.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faXmark,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Search.module.css'

const Search = () => {
  const [searchIsFocused,setSearchIsFocused]=useState(false);
  const [searchInput,setSearchInput]=useState(false);
  const onSearchFocus=()=>{
    setSearchInput(false);
    document.getElementById('searchbar').placeholder='';
    setSearchIsFocused(true);
  }
  const onSearchBlur=()=>{
    setSearchIsFocused(false);
    const element=document.getElementById('searchbar');
    element.placeholder='Search or start new chat';
    element.value='';
    setSearchInput(false);
  }
  const onInputValue=(e)=>{
    if(e.target.value!=='')
    setSearchInput(true);
  else 
  setSearchInput(false);
  }
  const onSearchClear=()=>{
    const element=document.getElementById('searchbar');
    element.value='';
    element.focus();
  }
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
    {!searchIsFocused && <label className={classes.searchicon} htmlFor='searchbar'>
    <FontAwesomeIcon  icon={faMagnifyingGlass} style={{color: "#ffffff"}} />
    </label>}
    { searchIsFocused && 
    <FontAwesomeIcon className={classes.searchicon} icon={faArrowLeft} style={{color: "#ffffff",}} />
  }
    <input type='text' id='searchbar' onChange={onInputValue} onFocus={onSearchFocus} onBlur={onSearchBlur} placeholder='Search or start new chat' className={classes.search}></input>
    {searchInput && <div onClick={onSearchClear} className={classes.crossicon} >
      <FontAwesomeIcon  icon={faXmark} style={{color: "#ffffff",height:"1rem"}} />
    </div>}
    </div>
    {
      searchIsFocused &&
    <div className={classes.searchresult}>
      <div >
        <img src={prerit} alt='man'/>
        <span>Prerit</span>
      </div>
      <div >
        <img src={dp} alt='man'/>
        <span>Prerit</span>
      </div>
      <div >
        <img src={dp} alt='man'/>
        <span>Prerit</span>
      </div>
      <div >
        <img src={prerit} alt='man'/>
        <span>Prerit</span>
      </div>
    </div>
    }
  </div>
  )
}

export default Search