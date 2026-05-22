import { nitro } from "nitro/vite";

export const vercelPlugins = [
  nitro({
    preset: "vercel",
    vercel: { entryFormat: "node" },
  }),
];
