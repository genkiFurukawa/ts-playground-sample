import fs from "fs";
import { defineConfig } from "@playwright/test";

// 環境変数でサーバリストを切り替える
const environment: string = process.env.ENVIRONMENT
  ? process.env.ENVIRONMENT
  : "staging";
const servers: { cluster: string; main: string; sub: string }[] = JSON.parse(
  fs.readFileSync(`./server-list/${environment}.json`, "utf8")
);

// 環境変数で主系と副系を切り替える
const type: string = process.env.TYPE ? process.env.TYPE : "main";
const filteredServers: { cluster: string; url: string }[] = servers.map(
  (item) => {
    return {
      cluster: item.cluster,
      url: type === "main" ? item.main : item.sub,
    };
  }
);

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  projects: filteredServers.map((server) => ({
    name: `${server.cluster} - ${server.url}`,
    use: {
      baseURL: server.url,
      browserName: "chromium",
      channel: "chrome",
      headless: true,
    },
  })),
  testDir: "./tests",
  workers: 5,
  reporter: "html",
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
