import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
// GET

export const GET = async (request: any, { params }: any) => {
  try {
    await connectToDatabase();
    const response: any = await Prompt.findById(params?.id);
    if (!response) return new Response("Not found", { status: 404 });
    else return new Response(JSON.stringify(response), { status: 201 });
  } catch (e) {
    return new Response("Failed", { status: 500 });
  }
};
// PUT
export const PATCH = async (request: any, { params }: any) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDatabase();
    const response: any = await Prompt.findById(params?.id);
    if (!response) return new Response("Not found", { status: 404 });
    response.prompt = prompt;
    response.tag = tag;

    await response.save();
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    return new Response("Failed", { status: 500 });
  }
};

// DELETE
export const DELETE = async (request: any, { params }: any) => {
  try {
    await connectToDatabase();
    const response: any = await Prompt.findByIdAndRemove(params?.id);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    return new Response("Failed", { status: 500 });
  }
};
