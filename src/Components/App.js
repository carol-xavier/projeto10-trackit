import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/style/style.css';
import '../assets/style/reset.css';
import UserContext from '../Contexts/UserContext';
import TokenContext from '../Contexts/TokenContext';
import HabitsContext from '../Contexts/HabitsContext';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import RecordPage from './RecordPage';

export default function App() {
    const [userData, setUserData] = useState({ email: '', name: '', image: '', password: '' });
    const getData = { userData, setUserData };

    const [loginData, setLoginData] = useState({ image: '', token: '' });
    const getLoginData = { loginData, setLoginData };

    const [habits, setHabits] = useState("");
    const getHabits = {habits, setHabits}

    return (
        <UserContext.Provider value={getData}>
            <TokenContext.Provider value={getLoginData}>
                <HabitsContext.Provider value={getHabits}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/cadastro" element={<SignInPage />} />
                            <Route path="/habitos" element={<HabitsPage />} />
                            <Route path="/hoje" element={<TodayPage />} />
                            <Route path="/historico" element={<RecordPage />} />
                        </Routes>
                    </BrowserRouter>
                </HabitsContext.Provider>
            </TokenContext.Provider>
        </UserContext.Provider>
    )
}


