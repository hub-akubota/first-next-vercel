import Link from "next/link";
import { cookies } from "next/headers";

export default function Page() {
  // Cookieから'userName'を取得
  const userName = cookies().get('userName')?.value;

  return (
    <div>
      <h1>{userName ? `${userName}さん、回答ありがとうございました` : '投稿ありがとうございます。'}</h1>
      <Link href="/">フォームに戻る</Link>
    </div>
  );
}