import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import Logo from '../Style/Images/logo-9.png';
import '../Style/navbar.css'



const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
            {/* <Header /> */}
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <img src= {Logo} />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" style = {{display: "flex" ,width: "100%", justifyContent: "space-evenly"}}>
                                <li className="nav-item active">
                                    <Link to="/home" className = "linkItem">{name.toUpperCase()}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faculty/updateProfile" className = "linkItem">UPDATE PROFILE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/attendenceFaculty" className = "linkItem">MARK ATTENDANCE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faculty/uploadMarks" className = "linkItem">UPLOAD MARKS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faculty/updatePassword" className = "linkItem">UPDATE PASSWORD</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{listStyle:"None"}} onClick={logoutHandler} type="button" style= {{color : "grey", padding : "8px", borderRadius : "10px"}} >LOGOUT</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
