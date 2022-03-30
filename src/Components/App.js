import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import TokenContext from '../Contexts/TokenContext';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import RecordPage from './RecordPage';

export default function App() {
    const [userData, setUserData] = useState({ email: '', name: '', image: '', password: '' });
    const getData = { userData, setUserData };

    const [token, setToken] = useState(" ");
    const getToken = { token, setToken };

    return (
        <UserContext.Provider value={getData}>
            <TokenContext.Provider value={getToken}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<SignInPage />} />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/hoje" element={<TodayPage />} />
                        <Route path="/historico" element={<RecordPage />} />
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </UserContext.Provider>
    )
}