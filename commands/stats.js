const { MessageEmbed } = require("discord.js");
require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");

module.exports = {
  name: "stats",
  description: "Get information about the bot",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["about", "ping", "info"],
 
  run: async (client, message) => {
    const { version } = require("discord.js");
    cpuStat.usagePercent(async function (err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      const duration = moment
        .duration(message.client.uptime)
        .format(" D[d], H[h], m[m]");

      const embed = new MessageEmbed();
      embed.setColor(client.botconfig.EmbedColor);
      embed.setTitle(`Stats from \`${client.user.username}\``);
      embed.addFields(
        {
          name: "<:ping:1053329063365840916> Ping",
          value: `┕\`${Math.round(client.ws.ping)}ms\``,
          inline: true,
        },
        {
          name: "<a:uptimer:1053329193338937405> Uptime",
          value: `┕\`${duration}\``,
          inline: true,
        },
        {
          name: "<:memory:1053329329918058626> Memory",
          value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
            2
          )}mb\``,
          inline: true,
        }
      );

      embed.addFields(
        {
          name: "<:Servers:1053329466706894908> Servers",
          value: `┕\`${client.guilds.cache.size}\``,
          inline: true,
        },
        {
          name: "<:Users:1053330110197022721> Users",
          value: `┕\`${client.users.cache.size}\``,
          inline: true,
        },
        {
          name: "<:latency:1053330242753790073> API Latency",
          value: `┕\`${message.client.ws.ping}ms\``,
          inline: true,
        }
      );
      embed.addFields(
        {
          name: "<:version:1053330347271655456> Version",
          value: `┕\`1.1\``,
          inline: true,
        },
        {
          name: "<:discordJS:1053330416628682864> Discord.js",
          value: `┕\`v${version}\``,
          inline: true,
        },
        {
          name: "<:nodejs:1053330465932726374> Node",
          value: `┕\`${process.version}\``,
          inline: true,
        }
      );

      return message.channel.send(embed);
    });
  },
  SlashCommand: {
    
    run: async (client, interaction) => {
      const { version } = require("discord.js");
      cpuStat.usagePercent(async function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
        const duration = moment
          .duration(client.uptime)
          .format(" D[d], H[h], m[m]");

        const embed = new MessageEmbed();
        embed.setColor(client.botconfig.EmbedColor);
        embed.setTitle(`Stats from \`${client.user.username}\``);
        embed.addFields(
          {
            name: "<:ping:1053329063365840916> Ping",
            value: `┕\`${Math.round(client.ws.ping)}ms\``,
            inline: true,
          },
          {
            name: "<a:uptimer:1053329193338937405> Uptime",
            value: `┕\`${duration}\``,
            inline: true,
          },
          {
            name: "<:memory:1053329329918058626> Memory",
            value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
              2
            )}mb\``,
            inline: true,
          }
        );

        embed.addFields(
          {
            name: "<:Servers:1053329466706894908> Servers",
            value: `┕\`${client.guilds.cache.size}\``,
            inline: true,
          },
          {
            name: "<:Users:1053330110197022721> Users",
            value: `┕\`${client.users.cache.size}\``,
            inline: true,
          },
          {
            name: "<:latency:1053330242753790073> API Latency",
            value: `┕\`${client.ws.ping}ms\``,
            inline: true,
          }
        );
        embed.addFields(
          {
            name: "<:version:1053330347271655456> Version",
            value: `┕\`1.1\``,
            inline: true,
          },
          {
            name: "<:discordJS:1053330416628682864> Discord.js",
            value: `┕\`v${version}\``,
            inline: true,
          },
          {
            name: "<:nodejs:1053330465932726374> Node",
            value: `┕\`${process.version}\``,
            inline: true,
          }
        );

        return interaction.send(embed);
      });
    },
  },
};
