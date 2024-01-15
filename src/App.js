import i18next from 'i18next'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn'
import { Changes } from './pages/Changes/Changes'
import EducationalProjectsPage from './pages/EducationalProjectsPage'
import GraduatesPage from './pages/GraduatesPage'
import AdmissionCampaignResPage from './pages/IntroCampaignResPage/IntroCampaignResPage'
import MainPage from './pages/MainPage'
import SciencePage from './pages/SciencePage/SciencePage'
import SocialProjectsPage from './pages/SocialProjectsPage'
import StrategyPage from './pages/StrategyPage/StrategyPage'
import StructureChangesPage from './pages/StructureChangesPage/StructureChangesPage'
import WhoWeArePage from './pages/WhoWeArePage/WhoWeArePage'

import './App.css'
import WarStoriesPage from './pages/WarStoriesPage'

const App = () => {
	return (
		<div className='App'>
			<I18nextProvider i18n={i18next}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/strategy-goals' element={<StrategyPage />} />
					<Route
						path='/admission-campaign-results'
						element={<AdmissionCampaignResPage />}
					/>
					<Route path='/new-members' element={<StructureChangesPage />} />
					<Route path='/social-projects' element={<SocialProjectsPage />} />
					<Route path='/research' element={<SciencePage />} />
					<Route
						path='/educational-projects'
						element={<EducationalProjectsPage />}
					/>
					<Route path='/alumni' element={<GraduatesPage />} />
					<Route
						path='/little-stories-of-a-big-war'
						element={<WarStoriesPage />}
					/>
					<Route path='/who-we-are' element={<WhoWeArePage />} />
					<Route path='/changes' element={<Changes />} />
				</Routes>
				<ScrollUpBtn />
				<Footer />
			</I18nextProvider>
		</div>
	)
}

export default App
