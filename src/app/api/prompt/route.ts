import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDatabase();
    const response: any = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (e) {
    return new Response("Failed", { status: 500 });
  }
};
