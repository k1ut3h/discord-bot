import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription("returns server info!"),
    async execute(interaction:CommandInteraction):Promise<void>{
        await interaction.reply(`Server: ${interaction.guild?.name}, member: ${interaction.guild?.memberCount}`);
    }
}