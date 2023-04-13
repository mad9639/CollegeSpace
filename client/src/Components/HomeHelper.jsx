import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
import Logo from '../Style/Images/logo-9.png';
import '../Style/navbar.css'


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
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
                                    <Link to="/student/updateProfile" className = "linkItem">UPDATE PROFILE</Link>
                                </li>
                                <li className="nav-item dropdown" >
                                    <a className="nav-link dropdown-toggle linkItem"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ACADEMIC </a>
                                    <div className="dropdown-menu "  aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item " to="/student/testPerformance">Test Performance</Link>
                                        <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                        <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/studentDetails" className = "linkItem">STUDENTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/studentDetails" className = "linkItem">NEW CONVERSATION ({store.student.newerChats.length})</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/student/updatePassword"  className = "linkItem">UPDATE PASSWORD</Link>
                                </li>
                               
                            </ul>
                           
                        </div>
                        <div>
                            <button style={{listStyle:"none"}} onClick={logoutHandler} type="button" style= {{color : "grey", padding : "8px", borderRadius : "10px"}}>LOGOUT</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
