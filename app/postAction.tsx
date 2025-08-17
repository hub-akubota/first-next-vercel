"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

  // Cookieに書き込む
  cookies().set('userName', name.toString());

  // 成功した場合はリダイレクトする
  redirect("/thanks");
}
