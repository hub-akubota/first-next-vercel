"use server";
import { redirect } from "next/navigation";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// Stateの型を明確に定義する
type State = {
    errors?: {
      name?: string;
    };
};

export async function postAction(prev: State, formData: FormData): Promise<State> {
  const name = formData.get("name");

  if (!name) {
    return {
      errors: {
        name: "名前を入力してください",
      },
    };
  }

  try {
    // データベースにデータを挿入
    await sql`INSERT INTO posts (name) VALUES (${name})`;
  } catch (error) {
    console.error("データベースエラー:", error);
    return {
      errors: {
        name: "データの登録に失敗しました。",
      },
    };
  }

  redirect("/thanks");
}