
import {NavLink} from 'react-router-dom';




const Portfolio=(props)=>(
    <div>
                <h1>
                    My Work
                </h1>
                checkout the folloeing things I've done
                <NavLink to='/portfolio-id/1'>Work 01--</NavLink>
                <NavLink to='/portfolio-id/2' >Work 02--</NavLink>
                <NavLink to='/portfolio-id/3' >Work 03</NavLink>
            </div>
)


export default Portfolio;