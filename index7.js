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
            files: ['https://cdn.discordapp.com/attachments/1501300022808023351/1524355743451578388/IMG_8689.jpg?ex=6a4f726a&is=6a4e20ea&hm=ab53e31f2035dbd6d33520c4fc6d045559138f6e397c96150cbfe56843dd0f40&'], // رابط الصورة 
            components: [row]
        });
    }
});

client.login(process.env.TOKEN);