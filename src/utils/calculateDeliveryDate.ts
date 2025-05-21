/**
 * Calculates the delivery date by adding business days to the current date
 * If the current day is a weekend, starts counting from next Monday
 * @param days Number of business days to add
 * @returns Delivery date as a string in format "DD/MM"
 */
export function calculateDeliveryDate(days: number = 2): string {
  const today = new Date();
  let currentDate = new Date(today);
  
  // If today is weekend, move to next Monday
  const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
  if (dayOfWeek === 0) { // Sunday
    currentDate.setDate(currentDate.getDate() + 1);
  } else if (dayOfWeek === 6) { // Saturday
    currentDate.setDate(currentDate.getDate() + 2);
  }

  // Add business days
  let businessDaysToAdd = days;
  while (businessDaysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    // Skip weekends
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      businessDaysToAdd--;
    }
  }

  // Format date as DD/MM
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
  return `${day}/${month}`;
}
