#!/usr/bin/env node

const fs = require('fs')
const inquirer = require('inquirer')

const CURR_DIR = process.cwd()
const TEMPLATE_PATH = `${process.cwd()}/template`

const QUESTIONS = [
	{
		name: 'package-name',
		type: 'input',
		message: 'Name of the package you want to create:',
		validate: function (input) {
			if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
      else return 'Package name may only include letters, numbers, underscores and hashes.'
		}
	}
];

function createDirectoryContents (newTemplatePath, newProjectPath, packageName) {
  const filesToCreate = fs.readdirSync(newTemplatePath)
  filesToCreate.forEach(file => {
    console.log('file', file)
    let newFileName = file
    if(file.includes('Component')) {
      newFileName = packageName.charAt(0).toUpperCase() + `${packageName}`.slice(1)
    }
    const origFilePath = `${newTemplatePath}/${file}`
    const stats = fs.statSync(origFilePath)

    if (stats.isFile()) {
      const encode = origFilePath.includes('png') ? 'binary' : 'utf8'
      let contents = fs.readFileSync(origFilePath, encode)
      if(contents) {
        contents = contents.replace(/Component/g, newFileName)
      }
      const writePath = `${CURR_DIR}/${newProjectPath}/${newFileName}.js`

      fs.writeFileSync(writePath, contents, encode);
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${newFileName}`)
      
      createDirectoryContents(`${newTemplatePath}/${file}`, `${newProjectPath}/${file}`, packageName)
    }
  })
}


inquirer.prompt(QUESTIONS)
	.then(answers => {
    const packageName = answers['package-name']		
    console.log(packageName)
    console.log(CURR_DIR)
    console.log(TEMPLATE_PATH)
		fs.mkdirSync(`${CURR_DIR}/packages/${packageName}`);
		createDirectoryContents(TEMPLATE_PATH, `packages/${packageName}`, packageName);
		console.log('\x1b[36m%s\x1b[0m', `Package ${packageName} created successfully`);
		//console.log('\x1b[33m%s\x1b[0m', 'Installing npm packages');
		/*cmd.get(
			`cd ${CURR_DIR}/${projectName} && npm install`,
			(err, data, stderr) => {
				console.log('\x1b[36m%s\x1b[0m', 'Npm packages installed successfully');
				console.log('\x1b[33m%s\x1b[0m', 'Installing elm packages');
				cmd.get(
					`cd ${CURR_DIR}/${projectName} && elm make`,
					(err, data, stderr) => {
						console.log('\x1b[36m%s\x1b[0m', 'Elm packages installed successfully');
					}
				)
			}
		);*/
	});

