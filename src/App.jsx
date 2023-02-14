import {
  // Depending on where you are hosting your application you
  // might have to change which router you are using
  // https://reactrouter.com/en/main/routers/picking-a-router
  // Preferences is to use the BrowserRouter but,
  // when using GH-pages as a hosting provider we have to use 
  // the HashRouter
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// In this Layout component all the HTML we want to display at all the routes lives
// I am unaware of any broadly accapted naming convention for this,
// so you might see quite a spread in how others name them
import Layout from './components/Layout/Layout'

// Due to the similarities between URL adresses and Filesystems we have
// moved all of our actual HTML into a separate folder and are importing them here 
import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import ProjectsPage from './routes/projects/ProjectsPage'
import FirstProject from './routes/projects/first-project/FirstProjectPage'
import SecondProject from './routes/projects/second-project/SecondProjectPage'

// Since we have multiple pages (components) now we are using the App component
// to define all of our different routes
function App() {
  return (
    // This <Router> component needs to wrap around all of our application.
    // It is simplest to just do this here
    <Router>
      {/* The <Routes> component is another component that is required to wrap around all of our individual routes */}
      <Routes>

        {
        /**
         * This is the simple implementation, good for when you only have a couple of pages
         * and do not want any 'static' content like a Navbar, Footer, etc
         */
        }
        {/* <Route path='/' element={<LandingPage />} />
        <Route path={'/' + 'about'} element={<AboutPage />} />
        <Route path={'/' + 'projects'} element={<ProjectsPage />} /> */}

        {
        /**
         * This is a slightly more intricate way of defining routes,
         * but it allows us to have 'static' parts/components and allows
         * us to nest create nested pages more easily
         */
        }
        {/* path='/ ' */}
        <Route path='/' element={<Layout />}>
          {/* path='/ ' + '' */}
          <Route index element={<LandingPage />} />
          {/* path='/' + 'about' */}
          <Route path='about' element={<AboutPage />} />
          {/* path='/' + 'projects' */}
          <Route path='projects' element={<ProjectsPage />}>
            {/* path='/' + 'projects' + 'first-project' */}
            <Route path='first-project' element={<FirstProject />} />
            {/* path='/' + 'projects' + 'second-project' */}
            <Route path='second-project' element={<SecondProject />} />
          </Route>
        </Route>

        {
        /**
         * The wildcard path='*' is used as a catch all so we can create some
         * custom logic for handling invalid URLs
         */
        }
        <Route path='*' element={<h1>404 Error</h1>} />

      </Routes>
    </Router>
  )
}


export default App
