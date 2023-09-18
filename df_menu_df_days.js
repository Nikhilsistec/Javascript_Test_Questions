const printMenuForDay = (day) => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: Spaghetti and Meatballs');
        break;
      case 'tuesday':
        console.log('Tuesday Menu: Tacos');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Grilled Chicken Salad');
        break;
      case 'thursday':
        console.log('Thursday Menu: Pizza');
        break;
      case 'friday':
        console.log('Friday Menu: Fish and Chips');
        break;
      case 'saturday':
        console.log('Saturday Menu: BBQ Ribs');
        break;
      case 'sunday':
        console.log('Sunday Menu: Roast Beef');
        break;
      default:
        console.log('Invalid day! Please enter a valid day of the week.');
    }
  };
  
  // Example usage:
  printMenuForDay('Monday'); // Output: Monday Menu: Spaghetti and Meatballs
  printMenuForDay('Friday'); // Output: Friday Menu: Fish and Chips
  printMenuForDay('Sunday'); // Output: Sunday Menu: Roast Beef
  printMenuForDay('InvalidDay'); // Output: Invalid day! Please enter a valid day of the week.
  