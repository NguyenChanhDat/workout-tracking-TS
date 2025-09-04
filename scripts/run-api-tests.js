const { execSync } = require('child_process');

try {
  // Try Linux command first
  execSync('npm run api-test-linux', { stdio: 'inherit' });
} catch (error) {
  // If Linux command fails, try Windows command
  try {
    execSync('npm run api-test-win', { stdio: 'inherit' });
  } catch (winError) {
    console.error('Both test commands failed');
    process.exit(1);
  }
}
