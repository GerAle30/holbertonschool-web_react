// Brand convention & Nominal typing demonstration

// Branded interface for MajorCredits
interface MajorCredits {
  credits: number;
  _brand: 'major'; // Brand property to uniquely identify MajorCredits
}

// Branded interface for MinorCredits
interface MinorCredits {
  credits: number;
  _brand: 'minor'; // Brand property to uniquely identify MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Example usage demonstrating nominal typing
const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };

const minorSubject1: MinorCredits = { credits: 2, _brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, _brand: 'minor' };

// Sum major credits
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Total Major Credits:', totalMajorCredits);

// Sum minor credits
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Minor Credits:', totalMinorCredits);

// Demonstrate nominal typing - these would cause TypeScript errors:
// sumMajorCredits(minorSubject1, minorSubject2); // Error: MinorCredits not assignable to MajorCredits
// sumMinorCredits(majorSubject1, majorSubject2); // Error: MajorCredits not assignable to MinorCredits

// Example showing type safety with brand convention
console.log('Brand convention ensures type safety:');
console.log('- Major credits can only be used with sumMajorCredits');
console.log('- Minor credits can only be used with sumMinorCredits');
console.log('- TypeScript prevents mixing different credit types');