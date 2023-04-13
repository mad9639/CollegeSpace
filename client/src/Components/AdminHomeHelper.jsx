import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import '../Style/navbar.css'
import Logo from '../Style/Images/logo-9.png';

const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
          
            <nav className="navbar navbar-expand-lg navbar-light bg-dark adminNav">
                    <img src= {Logo} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style = {{display: "flex" ,width: "100%", justifyContent: "space-evenly"}} >
                        <li className="nav-item active">
                                    <Link to="/admin" className = "linkItem">{name.toUpperCase()}</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/addFaculty" className = "linkItem">ADD FACULTY</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/addStudent" className = "linkItem">ADD STUDENT</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/addSubject" className = "linkItem">ADD SUBJECT</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/addAdmin" className = "linkItem">ADD ADMIN</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/allFaculties" className = "linkItem">OUR FACULTIES</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/allStudents" className = "linkItem">OUR STUDENTS</Link>
                        </li>
                        <li className="nav-item">
                                    <Link to="/admin/allSubject" className = "linkItem">SUBJECTS</Link>
                        </li>

                    </ul>
                </div>
                <div>

                    <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" style= {{color : "grey", padding : "8px", borderRadius : "10px"}}>LOGOUT</button>

                </div>
            </nav>
        </div>
    )
}

export default Home
