// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

// import { cloudflare } from "unenv";
// import nitroCloudflareBindings from "nitro-cloudflare-dev";

// const untypedOptions = {
//   unenv: cloudflare,
//   modules: [nitroCloudflareBindings],
// } as any; // Current type definitions are incomplete, casting needed

export default defineConfig({
  server: {
    port: 3030,
  },
  // plugins: [
  //   tsConfigPaths(),
  //   tanstackStart({ customViteReactPlugin: true }),
  //   viteReact(),
  // ],
  // plugins: [
  //   tsConfigPaths(),
  //   tanstackStart({ customViteReactPlugin: true, target: 'netlify' }),
  //   viteReact(),
  // ],
  plugins: [
    tsConfigPaths(),
    tanstackStart({ customViteReactPlugin: true, target: 'cloudflare-module' }),
    viteReact(),
  ],
});
