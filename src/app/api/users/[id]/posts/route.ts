import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request: any, { params }: any) => {
  try {
    await connectToDatabase();
    const response: any = await Prompt.find({
      creator: params?.id,
    }).populate("creator");
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (e) {
    return new Response("Failed", { status: 500 });
  }
};
