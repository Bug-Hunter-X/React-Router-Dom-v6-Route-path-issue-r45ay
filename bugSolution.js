```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* The solution: Ensure the Contact route is placed before other routes with potentially overlapping paths */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}
function About() { return <h1>About</h1>;}
function Contact() { return <h1>Contact</h1>;}
```