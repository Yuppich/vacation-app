export const calculateEndDate = (start, days) => {
    // Logic to calculate the end date based on the start date and number of days
    const startTimestamp = new Date(start).getTime();
    const endTimestamp = startTimestamp + days * 24 * 60 * 60 * 1000;
    const newEndDate = new Date(endTimestamp).toISOString().split('T')[0];
    return newEndDate;
};

export const calculateNumberOfDays = (start, end) => {
    // Logic to calculate the number of days based on the start date and end date
    const startTimestamp = new Date(start).getTime();
    const endTimestamp = new Date(end).getTime();
    const days = Math.floor((endTimestamp - startTimestamp) / (24 * 60 * 60 * 1000));
    return days;
};

export const saveVacationRequest = (request) => {
    const existingRequests = JSON.parse(localStorage.getItem('vacationRequests')) || [];
    const updatedRequests = [...existingRequests, request];
    localStorage.setItem('vacationRequests', JSON.stringify(updatedRequests));
};

export const getVacationRequests = () => {
    const storedRequests = JSON.parse(localStorage.getItem('vacationRequests')) || [];
    return storedRequests;
};
