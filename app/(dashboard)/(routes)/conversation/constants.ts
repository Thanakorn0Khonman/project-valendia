import * as z from "zod";

export const formSechma = z.object({
    prompt: z.string().min(1,{
        message: "Promp is required",
    }),
});