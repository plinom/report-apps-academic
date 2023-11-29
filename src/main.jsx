import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./Pages/Main.jsx";
import {EnteringResolution} from "./Pages/EnteringResolution.jsx";
import {FacultyAchievements} from "./Pages/FacultyAchievements.jsx";
import {Graduates} from "./Pages/Graduates.jsx";
import {NewFaces} from "./Pages/NewFaces.jsx";
import {Science} from "./Pages/Science.jsx";
import {SmallStoriesOfBigWar} from "./Pages/SmallStoriesOfBigWar.jsx";
import {StrategicGoals} from "./Pages/StrategicGoals.jsx";
import {VolunteerProjects} from "./Pages/VolunteerProjects.jsx";
import {WhoAreWe} from "./Pages/WhoAreWe.jsx";
import {FourZeroFour} from "./Pages/FourZeroFour.jsx";

export const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"https://apps-report.netlify.app/"} element={<Main />} />
                <Route path={"https://apps-report.netlify.app/entering-resolution"} element={<EnteringResolution />} />
                <Route path={"https://apps-report.netlify.app/achievements-faculty"}  element={<FacultyAchievements />} />
                <Route path={"https://apps-report.netlify.app/graduates"} element={<Graduates />} />
                <Route path={"https://apps-report.netlify.app/new-faces"} element={<NewFaces />} />
                <Route path={"https://apps-report.netlify.app/science"} element={<Science />} />
                <Route path={"https://apps-report.netlify.app/small-stories"} element={<SmallStoriesOfBigWar />} />
                <Route path={"https://apps-report.netlify.app/strategic-goals"} element={<StrategicGoals />} />
                <Route path={"https://apps-report.netlify.app/volunteer"} element={<VolunteerProjects />} />
                <Route path={"https://apps-report.netlify.app/who-we-are"} element={<WhoAreWe />} />
                <Route path={"*"} element={<FourZeroFour />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Layout />);