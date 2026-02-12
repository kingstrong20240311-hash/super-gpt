import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session || !session.user || session.user.isAdmin !== true) {
    redirect("/");
  }

  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  const messages = await db.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">管理员后台</h1>
          <Link href="/" className="text-primary hover:underline flex items-center gap-1">
            <span className="material-icons text-sm">arrow_back</span>
            返回首页
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Users Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="material-icons">people</span>
              注册用户 ({users.length})
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">姓名</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">邮箱</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">身份</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">注册时间</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                      <td className="px-6 py-4 text-sm">
                        {user.isAdmin ? (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-bold">管理员</span>
                        ) : (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded text-xs font-bold">用户</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Messages Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="material-icons">email</span>
              联系我们消息 ({messages.length})
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">姓名</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">邮箱</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">消息内容</th>
                    <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">发送时间</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {messages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">{msg.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{msg.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-500 max-w-md">
                        <p className="whitespace-pre-wrap">{msg.message}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {messages.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-500 italic">
                        暂无消息
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
