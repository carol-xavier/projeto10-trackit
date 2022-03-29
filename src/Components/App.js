import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import styled from 'styled-components';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import RecordPage from './RecordPage';

export default function App() {
    const [userData, setUserData] = useState({ email: '', name: '', image: '', password: '' });
    const getData = {userData, setUserData};

    return (
        <UserContext.Provider value={getData}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignInPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<RecordPage />} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}