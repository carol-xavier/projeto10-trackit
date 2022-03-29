import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import RecordPage from './RecordPage';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<SignInPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<RecordPage />} />
            </Routes>
        </BrowserRouter>
    )
}