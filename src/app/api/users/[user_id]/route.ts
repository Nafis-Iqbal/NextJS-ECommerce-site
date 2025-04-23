import { UserController } from "@/controllers";
import { errorResponse } from "@/utilities/utilities";

//Get User detail
export async function GET(req: Request, {params} : {params: {user_id: string}})
{
    try {
        await UserController.getUserDetail(params.user_id);
    }
    catch(error) {
        return errorResponse();
    }
}

//Update User data
export async function PUT(req: Request, {params} : {params: {user_id: string}})
{
    const body = await req.json();

    try {
        await UserController.updateUserDetail(params.user_id, body);
    }
    catch(error) {
        return errorResponse();
    }
}

//Delete User data
export async function DELETE(req: Request, {params} : {params: {user_id: string}})
{
    try {
        await UserController.deleteUserDetail(params.user_id);
    }
    catch(error) {
        return errorResponse();
    }
}

