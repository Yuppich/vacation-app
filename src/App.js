import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VacationRequestForm from './components/VacationRequestForm';
import VacationRequestList from './components/VacationRequestList';
import Button from 'react-bootstrap/Button';
import './style.css'; // Import the external CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="vh-100">
                <div className="container">
                    <div className="button-container">
                        <Button variant="primary" className="me-2">
                            <Link to="/" className="text-decoration-none text-white">Home</Link>
                        </Button>
                        <Button variant="primary">
                            <Link to="/request" className="text-decoration-none text-white">Submit Request</Link>
                        </Button>
                    </div>
                    <Routes>
                        <Route path="/" element={<VacationRequestList />} />
                        <Route path="/request" element={<VacationRequestForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
