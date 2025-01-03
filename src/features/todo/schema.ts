import { z } from "zod";

export const taskSchema = z.object({
	task: z.string(),
});
