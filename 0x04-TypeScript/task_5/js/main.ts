// Interfaces for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: "major"; // Unique identifier for MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: "minor"; // Unique identifier for MinorCredits
}

// Functions to sum MajorCredits and MinorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "major" };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "minor" };
}

// Example usage (optional for testing)
const major1: MajorCredits = { credits: 20, brand: "major" };
const major2: MajorCredits = { credits: 30, brand: "major" };
const minor1: MinorCredits = { credits: 10, brand: "minor" };
const minor2: MinorCredits = { credits: 15, brand: "minor" };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log("Total Major Credits:", totalMajor);
console.log("Total Minor Credits:", totalMinor);
