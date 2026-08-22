const fs = require('fs');
const path = require('path');

const targetDirs = [path.join(__dirname, 'www'), path.join(__dirname, 'public')];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });

  const filesToCopy = ['index.html', 'styles.css', 'app.js', 'manifest.json'];
  filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, file));
    }
  });

  const assetsSrc = path.join(__dirname, 'assets');
  const assetsDest = path.join(dir, 'assets');
  if (fs.existsSync(assetsSrc)) {
    fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  }
  console.log(`Copied all files and assets -> ${path.basename(dir)}/`);
});

console.log('✅ Build complete! All assets bundled to www/ and public/');
