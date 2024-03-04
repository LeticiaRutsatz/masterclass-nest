import { IsNotEmpty, Length } from "class-validator";

export class CreateCustomerBody{
    //validate if the name property is not empty
    @IsNotEmpty({ 
        message: 'Please, enter your name!'
    }) 
    name: string;

    @IsNotEmpty()
    //validate if the name property has a length minimum of 5 caracters and maximum length 100
    @Length(5, 100) 
    function: string
}