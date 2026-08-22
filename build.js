const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');

// Clean and recreate www directory
if (fs.existsSync(wwwDir)) {
  fs.rmSync(wwwDir, { recursive: true, force: true });
}
fs.mkdirSync(wwwDir, { recursive: true });

// Copy files
const filesToCopy = ['index.html', 'styles.css', 'app.js', 'manifest.json'];
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(wwwDir, file));
    console.log(`Copied ${file} -> www/`);
  }
});

// Copy assets folder
const assetsSrc = path.join(__dirname, 'assets');
const assetsDest = path.join(wwwDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log('Copied assets/ -> www/assets/');
}

console.log('✅ Build complete! All assets bundled to www/');
