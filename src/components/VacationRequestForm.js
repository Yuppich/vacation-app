import React, { useState } from 'react';
import { calculateEndDate, calculateNumberOfDays } from './utils';
import { useNavigate } from 'react-router-dom';

const VacationRequestForm = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const handleStartDateChange = (event) => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);
        const newEndDate = calculateEndDate(newStartDate, numberOfDays);
        setEndDate(newEndDate);
    };

    const handleEndDateChange = (event) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate);
        const newNumberOfDays = calculateNumberOfDays(startDate, newEndDate);
        setNumberOfDays(newNumberOfDays);
    };

    const handleNumberOfDaysChange = (event) => {
        const newNumberOfDays = event.target.value;
        setNumberOfDays(newNumberOfDays);
        const newEndDate = calculateEndDate(startDate, newNumberOfDays);
        setEndDate(newEndDate);
    };

    //const saveVacationRequest = async (request) => {
    //    try {
    //        const response = await fetch('/vacation_requests/', {
    //            method: 'POST',
    //            headers: {
    //                'Content-Type': 'application/json',
    //            },
    //            body: JSON.stringify(request),
    //        });

    //        if (!response.ok) {
    //            throw new Error('Failed to save vacation request');
    //        }

    //        // Handle the response or perform any necessary actions
    //        const data = await response.json();
    //        console.log('Vacation request saved:', data);
    //    } catch (error) {
    //        console.error('Error saving vacation request:', error);
    //    }
    //};

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation: Check if number of vacation days is not negative
        if (numberOfDays < 0) {
            alert('Number of vacation days cannot be negative');
            return;
        }

        // Create a new vacation request object
        const newRequest = {
            startDate,
            endDate,
            numberOfDays: parseInt(numberOfDays),
            comment,
        };

        // Simulate POST request to API endpoint
        //saveVacationRequest(newRequest);

        // Clear the form fields
        setStartDate('');
        setEndDate('');
        setNumberOfDays('');
        setComment('');

        // Redirect to index page
        navigate('/');
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2 className="text-center mb-4">Submit Vacation Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="startDate" className="form-label">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            value={startDate}
                            onChange={handleStartDateChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfDays" className="form-label">
                            Number of Vacation Days:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="numberOfDays"
                            value={numberOfDays}
                            onChange={handleNumberOfDaysChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate" className="form-label">
                            End Date:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="endDate"
                            value={endDate}
                            onChange={handleEndDateChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment" className="form-label">
                            Comment:
                        </label>
                        <textarea
                            className="form-control"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VacationRequestForm;
