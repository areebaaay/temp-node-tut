const os = require('os')

//Info about current USER
const user = os.userInfo()
console.log(user)

console.log(`This returns the system uptime is seconds ${os.uptime()} `)

const currentOS = {
    name : os.type(),
    release : os.release(),
    TotalMem : os.totalmem(),
    FreeMen : os.freemem(),

}
console.log(currentOS)