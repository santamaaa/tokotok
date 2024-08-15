import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Blog from './pages/Blog.js'
import ComponentsUsed from './pages/ComponentsUsed.js'
import NotFoundPage from './pages/NotFoundPage.js'

function App() {
  return (
    <div className="grid place-items-center">
      <div className="w-full">
        <Router basename="tokotok">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/components-used" element={ <ComponentsUsed /> } />
            <Route path="/*" element={ <NotFoundPage /> }></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
