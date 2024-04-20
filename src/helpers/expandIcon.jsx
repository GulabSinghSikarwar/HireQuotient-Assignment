import React from 'react'
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import './expandIcon.css'
function ExpandIcon({ expandMore }) {
    return (
        <div className='expandDiv' >
            {
                expandMore ? <MdExpandMore color='white' /> : <MdExpandLess  color='white' />
            }
        </div>
    )
}

export default ExpandIcon