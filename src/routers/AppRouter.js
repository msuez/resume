import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { ResumeScreen } from '../components/resume/ResumeScreen';
import { ContactScreen } from '../components/contact/ContactScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <ResumeScreen /> } />
                    <Route exact path="/contact" element={ <ContactScreen /> } />
                    <Route path="*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </Router>
    )
}
