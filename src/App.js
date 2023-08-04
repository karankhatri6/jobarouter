import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './components/Home'
import About from './components/About'
import Faq from './components/help/Faq'
import Contact, { contactAction } from './components/help/Contact'
import NotFound from './components/NotFound'
import Careers, { careersLoader } from './components/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './components/careers/CareerDetails'
import CareerError from './components/careers/CareerError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
        />

        <Route 
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App