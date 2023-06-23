/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from './e17.js';


export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = data.asteroids.reduce((counts, asteroid) => {
    counts[asteroid.discoveryYear] = (counts[asteroid.discoveryYear] || 0) + 1;
    return counts;
  }, {});

  return parseInt(maxBy(Object.keys(yearCounts), year => yearCounts[year]), 10);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
