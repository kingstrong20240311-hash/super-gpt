import Link from "next/link";
import { DOWNLOADS } from "@/lib/downloads";

export default function DownloadPage() {
  const windows = DOWNLOADS.windows;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 md:p-10 space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            下载 Super GPT for Windows
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            请确认系统环境后手动点击下载。我们不会自动触发安装包下载。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
            <p className="text-slate-500 dark:text-slate-400">版本号</p>
            <p className="font-semibold text-slate-900 dark:text-white">{windows.version}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
            <p className="text-slate-500 dark:text-slate-400">文件大小</p>
            <p className="font-semibold text-slate-900 dark:text-white">{windows.size}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
            <p className="text-slate-500 dark:text-slate-400">系统要求</p>
            <p className="font-semibold text-slate-900 dark:text-white">{windows.requirements}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
            <p className="text-slate-500 dark:text-slate-400">SHA256</p>
            <p className="font-semibold break-all text-slate-900 dark:text-white">{windows.sha256}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/api/download/windows"
            className="inline-flex items-center justify-center rounded-2xl bg-primary text-white px-8 py-4 font-bold hover:bg-blue-700 transition-colors"
          >
            下载 Windows 安装包
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 dark:border-slate-700 px-8 py-4 font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            返回首页
          </Link>
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
          <p>使用软件下载服务即表示你同意以下条款：</p>
          <p className="space-x-3">
            <Link href="/terms" className="underline underline-offset-2">
              服务条款
            </Link>
            <span>·</span>
            <Link href="/privacy" className="underline underline-offset-2">
              隐私政策
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

