const chalk = require('chalk')

const app = require('./src/server/index')
const bootstrap = require('./src/user/infraestructure/config/bootstrap');
const config = require('./src/server/config')

app.listen(config.port, async () => {
    console.log(chalk.green(`Welcome to ${config.appname}, server on port: ${config.port}`))
    await bootstrap.init();
    
})
