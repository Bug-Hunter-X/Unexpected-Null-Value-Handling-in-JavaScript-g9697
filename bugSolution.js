function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  // Perform operations on a and b safely knowing they're not null
  return a + b; 
} 