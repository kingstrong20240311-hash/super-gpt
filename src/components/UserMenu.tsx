"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>;
  }

  if (session && session.user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-white/80 text-sm hidden lg:inline">
          您好，{session.user.name}
        </span>
        {session.user.isAdmin && (
          <Link
            href="/admin"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            后台管理
          </Link>
        )}
        <button
          onClick={() => signOut()}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-all backdrop-blur-sm"
        >
          退出
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-white/80 text-sm hidden lg:inline">您好，请先登录</span>
      <Link
        href="/login"
        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-all backdrop-blur-sm"
      >
        登录
      </Link>
    </div>
  );
}
