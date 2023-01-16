import { Router } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return { user: data?.user || null };
    });

export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR("/api/isLogin", fetcher);
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || finished) return;
    if (
      (redirectTo && !redirectIfFound && !hasUser) ||
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [finished, hasUser]);

  return error ? null : user;
}
