const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "Support",
  description: "Get help at our support server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["support"],
  
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "EXPERIMENTAL FEATURE",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `**Join our support server and we will fix your issue in bot [Join](https://discord.gg/R3QRprUXgC)**`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
        .setAuthor(
          "Support " + client.user.tag + " Server",
          client.user.displayAvatarURL()
        )
        .setColor("BLUE")
        .setDescription(
          `**Join our support server and we will fix your issue in bot [Join](https://discord.gg/R3QRprUXgC)**`
        );
      interaction.send(embed);
    },
  },
};
