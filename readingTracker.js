// Weekly reading log
// Array of objects, each representing one day's reading activity.
// Each object stores the day name, the book title, and minutes spent reading.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Function summary: Adds a new reading entry to the log.
// Inputs: day (string), book (string), minutes (number).
// Output: none returned; it mutates readingLog by pushing a new object onto it.
function addReadBook(day, book, minutes) {
  // Bundles the three arguments into a single object matching the shape
  // used by the other entries in readingLog
  const newEntry = { day, book, minutes };
  // Adds the new entry to the end of the array
  readingLog.push(newEntry);
}

// Function summary: Calculates the total minutes spent reading across all entries.
// Inputs: log (array of reading entry objects).
// Output: returns a single number representing total minutes.
function totalReadingMinutes(log) {
  let total = 0;
  // Loop through every entry and add its minutes to the running total
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Function summary: Determines which book appears most often in the log.
// Inputs: log (array of reading entry objects).
// Output: returns the book title (string) with the highest count, or null if the log is empty.
function mostReadBook(log) {
  // Object used as a lookup table: book title -> number of times it appears
  const bookCounts = {};
  for (let entry of log) {
    // If we haven't seen this book yet, start its count at 1
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      // Otherwise increment the existing count
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // Loop through the lookup table to find the book with the highest count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Function summary: Prints a line for each day showing minutes read and the book title.
// Inputs: log (array of reading entry objects).
// Output: none returned; writes formatted text to the console for each entry.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

// Suggested improvement: mostReadBook only returns a single book, so ties are broken
// silently by insertion order. Returning an array of all books tied for the max count
// would give a more accurate picture when two books are read equally often.

// Test case: adding a new entry with a book not yet in the log
addReadBook("Sunday", "The Body Keeps the Score", 35);
console.log("Most read book after new entry:", mostReadBook(readingLog));
