"use client";

import { useFormState, useFormStatus } from "react-dom";
import { postAction } from "@/app/postAction";

function Submit() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "送信中..." : "送信"}
    </button>
  );
}

export default function Page() {
  const [result, dispatch] = useFormState(postAction, {});
  const status = useFormStatus();
  return (
    <form action={dispatch}>
      {result.errors && <div>{result.errors.name}</div>}
      <input type="text" name="name" />
      <button type="submit" disabled={status.pending}>
        {status.pending ? "（切り替わらない）送信中..." : "送信"}
      </button>
    </form>
  );
}