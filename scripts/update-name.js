import fs from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'

// Replace these with your desired package name
const OLD_PACKAGE_NAME = '@tanstack/react-router'
const NEW_PACKAGE_NAME = '@tomrehnstrom/react-router' // example new name

function updatePackageReferences(directory) {
  // Find all package.json files
  const packageFiles = glob.sync('**/package.json', {
    cwd: directory,
    ignore: '**/node_modules/**',
  })

  packageFiles.forEach((filePath) => {
    const fullPath = path.join(directory, filePath)
    const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

    // Update package name if it matches
    if (pkg.name === OLD_PACKAGE_NAME) {
      pkg.name = NEW_PACKAGE_NAME
    }

    // Update dependencies
    if (pkg.dependencies && pkg.dependencies[OLD_PACKAGE_NAME]) {
      pkg.dependencies[NEW_PACKAGE_NAME] = pkg.dependencies[OLD_PACKAGE_NAME]
      delete pkg.dependencies[OLD_PACKAGE_NAME]
    }

    // Update peerDependencies
    if (pkg.peerDependencies && pkg.peerDependencies[OLD_PACKAGE_NAME]) {
      pkg.peerDependencies[NEW_PACKAGE_NAME] =
        pkg.peerDependencies[OLD_PACKAGE_NAME]
      delete pkg.peerDependencies[OLD_PACKAGE_NAME]
    }

    // Update devDependencies
    if (pkg.devDependencies && pkg.devDependencies[OLD_PACKAGE_NAME]) {
      pkg.devDependencies[NEW_PACKAGE_NAME] =
        pkg.devDependencies[OLD_PACKAGE_NAME]
      delete pkg.devDependencies[OLD_PACKAGE_NAME]
    }

    // Write updated package.json
    fs.writeFileSync(fullPath, JSON.stringify(pkg, null, 2))
  })

  // Find all TypeScript/JavaScript files
  const sourceFiles = glob.sync('**/*.{ts,tsx,js,jsx}', {
    cwd: directory,
    ignore: '**/node_modules/**',
  })

  // Update imports in source files
  sourceFiles.forEach((filePath) => {
    const fullPath = path.join(directory, filePath)
    let content = fs.readFileSync(fullPath, 'utf8')

    // Replace imports and requires
    content = content.replace(
      new RegExp(`from ['"]${OLD_PACKAGE_NAME}['"]`, 'g'),
      `from '${NEW_PACKAGE_NAME}'`,
    )
    content = content.replace(
      new RegExp(`require\\(['"]${OLD_PACKAGE_NAME}['"]\\)`, 'g'),
      `require('${NEW_PACKAGE_NAME}')`,
    )

    fs.writeFileSync(fullPath, content)
  })
}

// Usage
updatePackageReferences(process.cwd())
