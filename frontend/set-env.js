const fs = require('fs');

let apiUrl = process.env.API_URL || process.env.apiUrl;

if (!apiUrl) {
  const envPaths = ['.env', '../.env', '../Backend/.env'];
  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      try {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const match = envContent.match(/API_URL\s*=\s*(.*)/);
        if (match && match[1]) {
          apiUrl = match[1].trim().replace(/['"]/g, '');
          break;
        }
      } catch (e) {
        // ignore
      }
    }
  }
}

if (!apiUrl) {
  apiUrl = 'https://school-website-9ptj.vercel.app/api';
}

const environmentFileContent = `export const environment = {
    apiUrl: '${apiUrl}'
};
`;

fs.writeFileSync('./src/environments/environment.ts', environmentFileContent);
fs.writeFileSync('./src/environments/environment.development.ts', environmentFileContent);

console.log(`Generated environment files with apiUrl: ${apiUrl}`);
