function getMonthNumber(monthInput) {
    // Define a mapping of month names and abbreviations to month numbers
    const monthMapping = {
        'January': 1, 'Jan': 1, '1': 1,
        'February': 2, 'Feb': 2, '2': 2,
        'March': 3, 'Mar': 3, '3': 3,
        'April': 4, 'Apr': 4, '4': 4,
        'May': 5, '5': 5,
        'June': 6, 'Jun': 6, '6': 6,
        'July': 7, 'Jul': 7, '7': 7,
        'August': 8, 'Aug': 8, '8': 8,
        'September': 9, 'Sep': 9, '9': 9,
        'October': 10, 'Oct': 10, '10': 10,
        'November': 11, 'Nov': 11, '11': 11,
        'December': 12, 'Dec': 12, '12': 12,
    };
    return monthMapping[monthInput] || null;
}

function calculateAge(birthDay, birthMonth, birthYear) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative days or months
    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(birthYear, birthMonth - 1, 0).getDate(); // Get last day of previous month
    }
    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    return { ageYears, ageMonths, ageDays };
}

// Main function to run the program
function main() {
    const birthDay = parseInt(prompt("Enter your birth day (1-31): "));
    const birthMonthInput = prompt("Enter your birth month (e.g., January, Jan, 01): ").trim();
    const birthYear = parseInt(prompt("Enter your birth year: "));

    const birthMonth = getMonthNumber(birthMonthInput);

    if (birthMonth === null || birthDay < 1 || birthDay > 31 || birthYear < 0) {
        alert("Invalid date input. Please enter valid values.");
        return;
    }

    const { ageYears, ageMonths, ageDays } = calculateAge(birthDay, birthMonth, birthYear);
    alert(`Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days!`);
}

// Run the program
main();