// This is a command and event handler in discord.js
// To run the file use: node index.js



// First import fs, path and discord.js, then get the token from the .env file
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

// Enable the necessary intents
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,    
  ] 
});


// 'client.commands' is a list of all the slash commands synced
// 'foldersPath' stores the path of the folder
// 'commandFolders' are all the folders in the "commands" folder
client.commands = new Collection()
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// loop through all the folders in the folders of the "commands" folder and extract the files
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command)
    }
    
    else {
      console.log(`The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file in eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  }
  
  else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}


// log into the bot and display the list of commands registered
console.log(client.commands)
client.login(process.env.TOKEN)
