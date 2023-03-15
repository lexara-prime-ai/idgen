const log = console.log;
const ID = require("./id");
const id = (() => ID())();
const http = require('http').createServer((req, res) => {
    //DUMMY DATA
    const Users = [
        {
            'id': id,
            'username': 'Johnny',
            'age': 56,
            'online': true,
        },
        {
            'id': id,
            'username': 'sniffdoggy',
            'age': 76,
            'online': true,
        },
        {
            'id': id,
            'username': 'kuriyamamirai',
            'age': 19,
            'online': true
        }
    ]


    const getUser =
        Users.forEach(user => {
            log(user);
        });

    getUser;
    res.write('REQUESTING USER DETAILS...');
    res.end();
   
}).listen(8000, () => log('App is running at: http://127.0.0.1:8000'));



