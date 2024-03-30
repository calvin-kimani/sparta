const fs = require('fs');
const path = require('path');
const readline = require('readline');

function askUser(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim().toLowerCase());
        });
    });
}

function createModelFile(modelName) {
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    const modelFileName = `${modelName}.js`;
    const modelContent = `const Model = require('../core/database/Model');

class ${modelName} extends Model {
}

module.exports = new ${modelName}();
`;

    return { fileName: modelFileName, content: modelContent };
}

async function CreateModel(modelName) {
    const { fileName, content } = createModelFile(modelName);
    const filePath = path.join(__dirname, '../../', 'models', fileName);

    if (!fs.existsSync(filePath)) {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.error('Error creating model:', err.message);
            } else {
                console.log('Model created successfully:', filePath);
            }
        });
    } else {
        const answer = await askUser(`Model '${fileName}' already exists. Do you want to overwrite it? (y/n): `);
        if (answer === 'yes' || answer === 'y') {
            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.error('Error overwriting model:', err.message);
                } else {
                    console.log('Model overwritten successfully:', filePath);
                }
            });
        } else {
            console.log('Operation Aborted.');
        }
    }
}


module.exports = CreateModel;
