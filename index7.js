const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async (message) => {
    if (message.content === '!ماب') {
        
        // تعريف الأزرار
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Read Rules')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://discord.com/channels/@me/1013930692381507584'), // رابط السيرفر

                new ButtonBuilder()
                    .setLabel('Apply')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://discord.com/channels/@me/1512520871313408142'),

                new ButtonBuilder()
                    .setLabel('Arena')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://discord.com/channels/@me/1524314320379314297'),
            );

        // إرسال الصورة مع الأزرار
        await message.channel.send({
            files: ['G.jpg'], // رابط الصورة 
            components: [row]
        });
    }
});

client.login(process.env.TOKEN);
