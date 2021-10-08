import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import classes from "./SearchBox.module.css"

const searchBoxBorderHover = {
    borderColor: "#0071dc"
}

const SearchBox = () =>{
    return(
            <form className={`d-flex  ${classes.searchForm}`}>
            <input className={`form-control ${classes.searchInputBox}`} type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-outline-success ${classes.searchIconBox}`} style={searchBoxBorderHover} type="submit"><SearchIcon className={classes.icon} /></button>
          </form>
    )
}

export default React.memo(SearchBox)