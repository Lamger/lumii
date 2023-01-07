const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        ``
    );

    let Embed = new MessageEmbed()
      .setAuthor(
        `Commands of ${client.user.username}`,
        client.botconfig.IconURL
      )
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `Made by 💖 Lamger#2392`
      ).setDescription(`${Commands.join("\n")}
  
 **To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command] | consider to [vote](https://top.gg/bot/1053896868591046697)**
        
**__Bot__**
<:help:1054022402570465372> l!Help
<:clear:1054005241177182298> l!Clear
<:disconnect:1054011732693090345> l!Disconnect
<:dashboard:1054009027643846707> l!support
<:Config:1054008898538983484> l!Config
<:status:1054011931616366662> l!Stats
<:invite:1054012022586621982> l!Invite
<:grabby:1054012121484115978> l!Grab
<:change:1054012310382985216> l!Move

**__Music__**
<:Play:1054013534352199780> l!Play
<:pause:1054013599238062120> l!Pause
<:resume:1054013671765983232> l!Resume
<a:nowplaying:1054013771565244447> l!Nowplaying
<:queue:1054013839492009994> l!Queue
<:queue:1054013839492009994> l!Loop
<:queue:1054013839492009994> l!Loopqueue
<:lyrics:1054013949131100233> l!Lyrics
<a:pepeBASS:1054005010855383060> l!Bassboost
<:Bump:1054005137678540850> l!Bump
<:remove:1054014070661054474> l!Remove
<:search:1054014144845709312> l!Search
<:seek:1054014211883270144> l!Seek
<:shuffle:1054014270033109052> l!Shuffle
<:skip:1054014339276869682> l!Skip
<a:skipto:1054014418427576381> l!Skipto
<:volume:1054014487805562890> l!Volume

**__Watch__**
<:youtube:1054014560274743366> l!youtube         
     `);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
    client.commands.get(args[0])  ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `❌ | Unable to find that command.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
     
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );

      let Embed = new MessageEmbed()
        .setAuthor(
          `Commands of ${client.user.username}`,
          client.botconfig.IconURL
        )
        .setColor(client.botconfig.EmbedColor)
        .setFooter(
          `To get info of each command type ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }help [Command] | Have a nice day!`
        ).setDescription(`${Commands.join("\n")}
  
**Whats New,**

Changed UI Interface
 Bugs fixed 1.1
 Bassboost has been introduced
 Default preix shifted to slash command `);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `❌ | Unable to find that command.`
          );

        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
        
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );

        interaction.send(embed);
      }
    },
  },
};
