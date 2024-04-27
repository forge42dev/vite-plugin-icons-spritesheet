/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./tests/setup.ts"],
    environment: "node",
    globals: true,
    coverage: {
      provider: "v8",
    },
  },
});
