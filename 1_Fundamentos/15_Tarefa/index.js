import inquirer from "inquirer"
import chalk from "chalk"

inquirer
    .prompt([
        {
            name: 'nome',
            message: 'Qual seu nome?'
        },
        {
            name: 'idade',
            message: 'Qual sua idade?'
        },
    ])
    .then((answers) => {
        console.log(chalk.bgYellow.black(`O nome do usuário é ${answers.nome}, ele possui ${answers.idade} anos`))
    })
    .catch((err) => console.log(err))