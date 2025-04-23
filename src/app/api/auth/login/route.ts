import { UserController } from "@/controllers";
import { errorResponse } from "@/utilities/utilities";

//login user
export async function POST(req: Request)
{
    const body = await req.json();

    try {
        await UserController.loginUser(body);
    }
    catch(error) {
        return errorResponse();
    }
}