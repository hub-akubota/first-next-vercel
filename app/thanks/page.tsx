import Link from "next/link";

export default function Page({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const name = searchParams.name;

    return (
      <div>
        {/* 名前があれば表示、なければ一般的なメッセージを表示 */}
        <h1>{name ? `${name}さん、回答ありがとうございました` : '投稿ありがとうございます。'}</h1>
        <Link href="/">フォームに戻る</Link>
      </div>
    );
  }