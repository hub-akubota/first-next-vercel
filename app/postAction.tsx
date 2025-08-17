"use server";
import { redirect } from "next/navigation";

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

 // 成功した場合はリダイレクトする
  redirect("/thanks");
}
