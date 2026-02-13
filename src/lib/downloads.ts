export const DOWNLOADS = {
  windows: {
    version: "1.2.110",
    // Keep installer URL outside the repo; use env var in production.
    url:
      process.env.WINDOWS_INSTALLER_URL ??
      "https://downloads.super-gpt.com/Super-GPT_1.2.110_x64.exe",
    size: "约 120 MB",
    sha256: process.env.WINDOWS_INSTALLER_SHA256 ?? "待发布",
    requirements: "Windows 10/11 (64-bit)",
  },
} as const;

