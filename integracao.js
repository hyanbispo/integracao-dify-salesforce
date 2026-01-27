const readline = require('readline');
const fs = require('fs');

const API_KEY = 'Bearer app-dmYj1J2zsEEBITJ7FtPWxCBA'; 
const URL = 'https://api.dify.ai/v1/chat-messages';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registrarErro(mensagem) {
    const dataHora = new Date().toLocaleString();
    const logMensagem = `[${dataHora}] ERRO: ${mensagem}\n`;
    
    fs.appendFileSync('logs.txt', logMensagem);
}

async function chamarIA(pergunta) {
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

        if (!response.ok) {
            throw new Error(`Falha na API Dify - Status: ${response.status}`);
        }

        const data = await response.json();
        const respostaLimpa = data.answer.trim();

        console.log(`\n🤖 IA: ${respostaLimpa}\n`);
        iniciarChat(); 
    } catch (error) {
        console.error("\n❌ Algo deu errado. Verifique o arquivo logs.txt.");
        registrarErro(error.message);
        iniciarChat();
    }
}

function iniciarChat() {
    rl.question('👤 Você: ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Encerrando chat....");
            rl.close();
            return;
        }
        chamarIA(input);
    });
}

console.clear();
console.log("=== CHAT COM MONITORAMENTO DE LOGS ATIVO ===");
iniciarChat();