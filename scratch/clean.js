const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', '.next');
if (fs.existsSync(dir)) {
  console.log('Cleaning .next directory...');
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('.next directory cleaned successfully!');
} else {
  console.log('.next directory does not exist.');
}
