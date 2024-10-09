import { connectToDB } from "@utils/database";
import prompt from "@models/prompt";

export const GET = async (request) => {

    try {
        console.log('hey3')
        await connectToDB();
        const prompts = await prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200
        })

    } catch (error) {
        return new Response("Failed to fetch", {
            status: 500
        })
    }

}