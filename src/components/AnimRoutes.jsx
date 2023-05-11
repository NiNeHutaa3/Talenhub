import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Getstart from './Getstart'
import Vacancy from '../pages/Vacancy'
import Vacancy1 from '../pages/Vacancy1'
import Vacancy2 from '../pages/Vacancy2'
import Profile from '../pages/Profile'
import Company from '../pages/Company'
import Company1 from '../pages/Company1'
import Talent from '../pages/Talent'
import Talent1 from '../pages/Talent1'
import Start from './Start'
import Make from '../pages/make'
import Manage from '../pages/Manage'
import See from '../pages/See'
import See1 from '../pages/See1'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import SignIn1 from '../pages/SignIn1'
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
            <Route path='/SignIn1' element={<SignIn1 />} />
            <Route path='/Vacancy/Vacancy1' element={<Vacancy1 />} />
            <Route path='/Vacancy/Vacancy1/Vacancy2' element={<Vacancy2 />} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/make' element={<Make/>} />
            <Route path='/Manage' element={<Manage/>} />
            <Route path='/See' element={<See />} />
            <Route path='/See/See1' element={<See1 />} />
            <Route path='/Company/Company1' element={<Company1 />} />
            <Route path='/Talent/Talent1' element={<Talent1 />} />
        </Routes>
    )
}

export default AnimRoutes
