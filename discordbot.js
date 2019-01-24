const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("YouTube", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        //General Text ID: XXX
    })

    let generalChannel = client.channels.get("527741897423454211")
    const attatchment = new Discord.Attachment("https://media.comicbook.com/2018/10/castlevania-dracula-netflix-1141228-1280x0.jpeg")
    generalChannel.send(attatchment)
})

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user) {
        return
    }
        // recievedMessage.channel.send("Message recieved, " + recievedMessage.author.toString() + ": " + recievedMessage.content)

        // recievedMessage.react("😀")
        // let customEmoji = recievedMessage.guild.emojis.get("527803128108548097")
        // recievedMessage.react(customEmoji)

        if (recievedMessage.content.startsWith("!")) {
            processCommand(recievedMessage)
        }
})

function processCommand(recievedMessage) {
    let fullCommand = recievedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, recievedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, recievedMessage)
    } else {
        recievedMessage.channel.send("This is not cake! Try '!help' or '!multiply'")
    }
}

function multiplyCommand(arguments, recievedMessage) {
    if (arguments.length < 2) {
        recievedMessage.channel.send("Not enough cake! Try '!multiply 2 10'")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    recievedMessage.channel.send("The product of " + arguments + " is " + product.toString())
}

function helpCommand(arguments, recievedMessage) {
    if (arguments.length == 0) {
        recievedMessage.channel.send("I'm not sure what you need help with, Try '!help [topic]' and bring me cake!")
    } else {
        recievedMessage.channel.send("Looks like you need help with " + arguments)
    }

}

client.login("XXX")