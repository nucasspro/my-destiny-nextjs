import * as z from "zod";

export const UserSchema = z.object({
  name: z.string({ required_error: "It required." }).min(1),
  birthday: z
    .date({ required_error: "It required." })
    .min(new Date("1900-01-01"))
    .max(new Date()),
});

export type TUserSchema = z.infer<typeof UserSchema>;
