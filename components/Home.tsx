"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center bg-red-300 text-white">
        <Link href="/admin">admin</Link>
        <Link href="/posts">posts</Link>
      </div>
    </>
  );
}
