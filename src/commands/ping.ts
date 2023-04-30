import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Returns Pong"),
    async execute(interaction: CommandInteraction):Promise<void>{
        await interaction.reply("pong!");
    }
}