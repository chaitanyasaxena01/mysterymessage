import { z } from "zod";

export const acceptMessageSchema = z.object({
  acceptMeasages: z.boolean(),
});
