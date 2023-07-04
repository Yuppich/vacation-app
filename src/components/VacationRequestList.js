import React, { useEffect, useState } from 'react';
import { getVacationRequests } from './utils';

const VacationRequestList = () => {
    const [requests, setRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [requestsPerPage] = useState(9);

    useEffect(() => {
        const storedRequests = getVacationRequests();
        setRequests(storedRequests);
    }, []);

    // Calculate pagination values
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <h2 className="text-center mb-4">My Vacation Requests</h2>
                {currentRequests.length === 0 ? (
                    <p>No vacation requests found.</p>
                ) : (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Number of Days</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRequests.map((request, index) => (
                                    <tr key={index}>
                                        <td>{request.startDate}</td>
                                        <td>{request.endDate}</td>
                                        <td>{request.numberOfDays}</td>
                                        <td>{request.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav>
                            <ul className="pagination justify-content-center">
                                {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }).map((_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </>
                )}
            </div>
        </div>
    );
};

export default VacationRequestList;
