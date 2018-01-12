import React from 'react'

const TitleDropDown = props => {
/*
Info on Dropdowns taken from:
https://www.w3schools.com/howto/howto_js_dropdown.asp

*/
  let handleTitleClick = (event) => {
    props.handleTitleClick(event.target.className)
  }

  return(
    <div className="dropdown">
      <button className="dropbtn">
        Choose a title:
      </button>

      <div
        id="titleDropdown"
        className="dropdown-content"
      >
        <a
          href="#"
          className="Sir"
          onClick={handleTitleClick}
        >
          Sir
        </a>
        <a
          href="#"
          className="Lady"
          onClick={handleTitleClick}
        >
          Lady
        </a>
        <a
          href="#"
          className="Peasant"
          onClick={handleTitleClick}
        >
          Peasant
        </a>
      </div>
    </div>
  )
}

export default TitleDropDown
