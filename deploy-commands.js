const { REST, Routes } = require('discord.js')
const fs = require('node:fs')
const path = require('node:path')
const token = "TOKEN"

const commands=[];

// Get all the files from the "commands" folder
const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)

for (const folder of commandFolders) {
  const commandsPath = path.join(folderspath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => files.endswith('.js'))

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    }
    
    else {
      console.log(`The command at ${filePath} is missing a required "data" or "execute" property.`)
    }
  }
}

const rest = new REST().setToken(token);

(async () => {
  try {
    console.log(`${commands.length} slash commands registered`)

    const data = await rest.put(
      Routes.applicationCommands('clientID'),
      { body: commands }
    )
    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  }
  catch (error) {
    console.error(error);    
  }  
})();





