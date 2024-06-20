import {writeFile} from 'node:fs';

writeFile('./hello.html', "<h1>I'm learning nodeJS</h1>", () => {
    console.log('File is created successfully');
});