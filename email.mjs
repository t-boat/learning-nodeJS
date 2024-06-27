
import {program} from 'commander';
import {createTransport} from 'nodemailer';


//Create e-mail transport
const transporter = createTransport({
    host : 'smtppro.zoho.com',
    port : 465,
    secure : true,
    auth : {
        user : 'admin@shopa.life',
        pass : 'KqV7XsXwn5DK'
    },
});


program
    .option('-s', '--subject')
    .option('-t', '--to')
    .option('-m', '--message');

program.parse();


const options = program.opts();

// console.log(program.args);

if (options.s && options.t & options.m) {
    //send email
    transporter.sendMail({
        from : 'noreply@shopa.life',
        to : program.args[1],
        subject : program.args[0],
        text : program.args[2],
    });
} else {
    console.log('Some options are missing');
}
