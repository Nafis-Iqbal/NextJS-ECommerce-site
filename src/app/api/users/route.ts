import { UserController } from "@/controllers";
import { errorResponse } from "@/utilities/utilities";

//create new user
//Validation must for password confirmation
export async function POST(req: Request)
{
    const body = await req.json();
    
    try {
        await UserController.createUser(body);
    }
    catch(error) {
        return errorResponse();
    }
}

//get all users
export async function GET(req: Request)
{
    try {
        await UserController.getAllUsers();
    }
    catch(error) {
        return errorResponse();
    }
}

