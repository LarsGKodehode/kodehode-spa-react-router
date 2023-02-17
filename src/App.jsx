import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout/Layout'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import ProjectsPage from './routes/projects/ProjectsPage'
import FirstProject from './routes/projects/first-project/FirstProjectPage'
import SecondProject from './routes/projects/second-project/SecondProjectPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />}>
            <Route path='first-project' element={<FirstProject />} />
            <Route path='second-project' element={<SecondProject />} />
          </Route>
        </Route>

        <Route path='*' element={<h1>404 Error</h1>} />

      </Routes>
    </Router>
  )
}


export default App
