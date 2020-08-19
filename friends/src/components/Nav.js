import React from 'react'
import {Link  } from "react-router-dom";

function Nav(props){

    return(
        <div>
            <Link to='/login'>Login</Link>
            {localStorage.getItem('token') && <Link to='/friends'>Friends</Link>}
            {localStorage.getItem('token') && <Link to='addFriend'>Add A Friend</Link>}
        </div>
    )
}

export default Nav;