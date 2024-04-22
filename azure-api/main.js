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
                maxTokens: 55,
            }
        )

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


const green = '\x1b[32m';
const red = '\x1b[31m';
const reset = '\x1b[0m';


(async () => {
    console.log(green + 'Bem vindo ao ' + red + 'IAberta!' + green + '\nFaça sua pergunta: ' + reset);

    try{
        while (true) {
            const userInput = await askQuestion('\n' + green + '> ' + reset)
            
            if(userInput === 'sair'){
                rl.close()
                console.log('\n' + red + 'Até mais!')
                break
            } else { 
                const botResponse = await getAPIMessage(userInput)
                console.log('\n' + red + '> ' + reset + botResponse)
            }
        }
    } catch (err) {
        console.error(err)
        rl.close()
        process.exit(1)
    }
})()
