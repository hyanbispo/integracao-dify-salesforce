require('dotenv').config();
const readline = require('readline');
const fs = require('fs');

const API_KEY = process.env.DIFY_API_KEY; 
const URL = 'https://api.dify.ai/v1/chat-messages';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registrarErro(mensagem) {
    const logMensagem = `[${new Date().toLocaleString()}] ERRO: ${mensagem}\n`;
    fs.appendFileSync('logs.txt', logMensagem);
}

async function chamarIA(pergunta) {
    if (!API_KEY) {
        console.error("❌ Erro: API_KEY não encontrada no arquivo .env");
        return;
    }

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "inputs": {},
                "query": pergunta,
                "response_mode": "blocking",
                "user": "hyan-dev"
            })
        });

        const data = await response.json();
        console.log(`\n🤖 IA: ${data.answer.trim()}\n`);
        iniciarChat(); 
    } catch (error) {
        registrarErro(error.message);
        console.error("\n❌ Erro registrado no logs.txt");
        iniciarChat();
    }
}

function iniciarChat() {
    rl.question('👤 Você: ', (input) => {
        if (input.toLowerCase() === 'sair') {
            rl.close();
            return;
        }
        chamarIA(input);
    });
}

console.clear();
console.log("=== CHAT COM ASSISTENTE VIRTUAL ===");
iniciarChat();