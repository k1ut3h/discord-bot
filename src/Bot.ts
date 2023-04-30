import { Client } from "discord.js";
import ready from "./listeners/ready"
import token from "./config.json";

console.log("Bot is starting...");

const client = new Client({
	intents: []
});

ready(client);
client.login(token.token);

console.log(client);