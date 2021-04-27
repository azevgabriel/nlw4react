import {Response, Request} from 'express'
import createUser from './services/CreateUser'

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'azevgabriel@gmail', 
        password:'123', 
        techs: [
            'Node',
            'ReactJS',
            {title: 'JavaScript', experience: 100},
            {title: 'HTML', experience: 99.9},
        ],
    });
    console.log(user.email);

    return response.json({message: 'Hello World!'});
}