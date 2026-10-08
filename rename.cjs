const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Pawzy') || content.includes('pawzy')) {
        const newContent = content.replace(/Pawzy/g, 'Mungo').replace(/pawzy/g, 'mungo');
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}
replaceInDir('.');
console.log('Replaced Pawzy with Mungo successfully.');
