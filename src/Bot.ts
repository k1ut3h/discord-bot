import { Client } from "discord.js";
import ready from "./listeners/ready"

const token = "MTAwOTQ1ODk1NTA2OTY4OTk2Ng.G-ZjbA.ilWSbq0BAVaXNJbi7UH2T2cp_Uz2DEuPfPrMoQ";
console.log("Bot is starting...");

const client = new Client({
	intents: []
});
ready(client);
client.login(token);

console.log(client);
