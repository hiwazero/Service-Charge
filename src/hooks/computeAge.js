export const computeAge = (dateObj) => {
    const monthMap = {
      'JANUARY': 0,
      'FEBRUARY': 1,
      'MARCH': 2,
      'APRIL': 3,
      'MAY': 4,
      'JUNE': 5,
      'JULY': 6,
      'AUGUST': 7,
      'SEPTEMBER': 8,
      'OCTOBER': 9,
      'NOVEMBER': 10,
      'DECEMBER': 11,
    };
    const monthIndex = monthMap[dateObj.month.toUpperCase()];
    
    const dayOfWeekMap = {
      'SUNDAY': 0,
      'MONDAY': 1,
      'TUESDAY': 2,
      'WEDNESDAY': 3,
      'THURSDAY': 4,
      'FRIDAY': 5,
      'SATURDAY': 6,
    };
    const dayOfWeekIndex = dayOfWeekMap[dateObj.dayOfWeek.toUpperCase()];
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const lastDayOfMonth = new Date(currentYear, monthIndex + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    
    let daysToLastDayOfWeek = dayOfWeekIndex - lastDayOfMonth.getDay();
    if (daysToLastDayOfWeek > 0) {
      daysToLastDayOfWeek -= 7;
    }
    const daysSinceLastDayOfWeek = daysInMonth + daysToLastDayOfWeek;
    
    const date = new Date(dateObj.year, monthIndex, daysSinceLastDayOfWeek);
    const daysPassed = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    return daysPassed
};
