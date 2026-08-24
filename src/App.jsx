import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Apostille from './pages/Apostille'
import Translation from './pages/Translation'
import Visa from './pages/Visa'
import StudyAbroad from './pages/StudyAbroad'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apostille-attestation" element={<Apostille />} />
          <Route path="/document-translation" element={<Translation />} />
          <Route path="/visa-assistance" element={<Visa />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
