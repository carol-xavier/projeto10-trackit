import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/style/style.css';
import '../assets/style/reset.css';
import UserContext from '../Contexts/UserContext';
import HabitsContext from '../Contexts/HabitsContext';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import RecordPage from './RecordPage';

export default function App() {
    const [userData, setUserData] = useState({ email: '', name: '', image: '', password: '' });
    const getData = { userData, setUserData };

    const [habitsPercentage, setHabitsPercentage] = useState(null);
    const getHabitsPercentage = { habitsPercentage, setHabitsPercentage };


    return (
        <UserContext.Provider value={getData}>
                <HabitsContext.Provider value={getHabitsPercentage}>
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
        </UserContext.Provider>
    )
}


