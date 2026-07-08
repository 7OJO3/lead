const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async (message) => {
    if (message.content === '!ماب') {
        
        // 1. تحضير ملف الصورة من جهازك
        const file = new AttachmentBuilder('./map.jpeg'); // تأكد من مطابقة الاسم وامتداد الملف

        // 2. تعريف الأزرار (يجب أن يكون الستايل Link لاستخدام setURL)
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Read Rules')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/channels/SERVER_ID/1013930692381507584'),

                new ButtonBuilder()
                    .setLabel('Apply')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/channels/SERVER_ID/1512520871313408142'),

                new ButtonBuilder()
                    .setLabel('Arena')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/channels/SERVER_ID/1524314320379314297'),
            );

        // 3. إرسال الصورة والأزرار
        await message.channel.send({
            files: [file],
            components: [row]
        });
    }
});

client.login(process.env.TOKEN);
