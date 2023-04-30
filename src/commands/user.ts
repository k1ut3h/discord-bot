import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder().setName('user').setDescription("returns user data!"),
    async execute(interaction:CommandInteraction):Promise<void>{
        await interaction.reply(`Username: ${interaction.user.tag}, Joined: ${interaction.guild?.joinedAt}`);
    }
}