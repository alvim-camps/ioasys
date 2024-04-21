const readline = require('readline')
const { OpenAIClient, AzureKeyCredential } = require('@azure/openai')
require("dotenv/config")

const client = new OpenAIClient(
    process.env.GPT_ENDPOINT, 
    new AzureKeyCredential(process.env.API_CREDENTIAL),
)

const getAPIMessage = async (message) => {
    try {
        response = await client.getCompletions(
            process.env.DEV_ID,
            message,
            {
                temperature: 0,
                maxTokens: 80,
            }
        )

        response.choices[0].text.trim()
        return response.choices[0].text.trim()
    } catch (err) {
        console.error(err)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer))
    })
}

(async () => {
    console.log('Bem vindo ao IAberta! \nFaça sua pergunta: \n');

    try{
        while (true) {
            const userInput = await askQuestion('you: ')
            
            if(userInput === 'sair'){
                rl.close()
                console.log('Até mais!')
                break
            } else { 
                const botResponse = await getAPIMessage(userInput)
                console.log('bot: ' + botResponse)
            }
        }
    } catch (err) {
        console.error(err)
        rl.close()
        process.exit(1)
    }
})()
