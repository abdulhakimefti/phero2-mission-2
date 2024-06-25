const EventEmiter = require('events')


const myEmitter = new EventEmiter()
//listener

myEmitter.on('birthday',()=>{
    console.log('Happye Birthday')
})

myEmitter.emit('birthday')

