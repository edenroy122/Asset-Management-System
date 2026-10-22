const app = require('./src/app')
const connectdb = require('./src/db/db')
require('dotenv').config()


const PORT = process.env.PORT || 5000

try {
    app.listen(PORT, () => {
        console.log("Server Started At Port ", PORT)
    })
}
catch (err) {
    console.log("Server Failed To Start ", err)
}

connectdb()
