import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Getstart from './Getstart'
import Vacancy from '../pages/Vacancy'
import Vacancy1 from '../pages/Vacancy1'
import Vacancy2 from '../pages/Vacancy2'
import Profile from '../pages/Profile'
import Company from '../pages/Company'
import Talent from '../pages/Talent'
import Start from './Start'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Vfirst from '../components/Vfirst'
import Number from '../components/Number'
import Tfirst from '../components/Tfirst'
import Cfirst from '../components/Cfirst'


const AnimRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<><Getstart /><Start /><Number /><Vfirst/><Tfirst /><Cfirst /></>} />
            <Route path='/Vacancy' element={<Vacancy />} />
            <Route path='/Company' element={<Company />} />
            <Route path='/Talent' element={<Talent />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Vacancy/Vacancy1' element={<Vacancy1 />} />
            <Route path='/Vacancy/Vacancy1/Vacancy2' element={<Vacancy2 />} />
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
    )
}

export default AnimRoutes
