const { execSync } = require('child_process');
const AdmZip = require('adm-zip'); // Add adm-zip
const packageJson = require('./package.json');

// Define the output file name and exclude patterns
const outputFileName = `${packageJson.name}.zip`;
const excludes = `.DS_Store */.DS_Store */*/.DS_Store mix-manifest.json .git .gitattributes .github .editorconfig .gitignore README.md .php-cs-fixer.cache gulpfile.js composer.json composer.lock node_modules focotik package-lock.json package.json webpack.mix.js src yarn.lock bundle.js phpcs.xml *.zip`;

// Get the parameter from the command line
const zipOnly = process.argv[2] === 'true'; // If "yarn zip true", zipOnly = true
const buildOnly = process.argv[2] === 'false'; // If "yarn zip false", buildOnly = true

// Step 1: Create the zip file using dir-archiver
const cmd = `npm run build && dir-archiver --src . --dest ./${outputFileName} --exclude ${excludes}`;
try {
	execSync(cmd);
	console.log(`Created zip file: ${outputFileName}`);

	// Step 2: Use adm-zip to perform additional operations (if needed)
	const zip = new AdmZip(`./${outputFileName}`);

	// Example: Extract the zip file into a folder (optional)
	const extractFolder = './focotik';
	zip.extractAllTo(extractFolder, true); // Overwrite existing files
	console.log(`Zip contents extracted to: ${extractFolder}`);

	// Example: List files in the zip (optional)
	const zipEntries = zip.getEntries();
	console.log('Files in the zip:');
	zipEntries.forEach((entry) => {
		console.log(entry.entryName);
	});

	// Example: Add a new file to the zip (optional)
	// zip.addLocalFile('./path/to/new-file.txt');
	// zip.writeZip(`./${outputFileName}`); // Save the updated zip
	// console.log('Added new file to the zip.');

} catch (error) {
	console.error('Error creating or processing zip file:', error);
	process.exit(1);
}
