import React , {useState} from 'react'
import {HiMenuAlt1} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"

import { NavLink  } from 'react-router-dom'
import "./Layout.css"

function Header() {
  const [open , setOpen] = useState(false)
  const menu = [
    {
      title : "home",
      path :  "/"
    },
    {
      title : "rotated",
      path :  "/rotated"
    },
    {
      title : "Glowing",
      path :  "/Glowing"
    },
    {
      title : "Parallax" ,
      path :"/parallax"
    }
  ]
  return (
    <div >
    
     { open && <ul className='menu-item'>
        {
          menu.map(item=>{
            return(
              <li>
                <NavLink activeClassName="selected" exact to={item.path}>{item.title}</NavLink >
              </li>
            )
          })
        }
      </ul>}
      <div className="menu-icon" >
    {
       open ? <AiOutlineClose  onClick={()=>setOpen(!open)}/> :<HiMenuAlt1 onClick={()=>setOpen(!open)} /> 
     }
    </div>
    </div>
  )
}

export default Header