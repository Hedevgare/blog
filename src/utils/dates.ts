const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];

function formatDate(date: Date): string {
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

export { formatDate };