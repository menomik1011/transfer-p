import useSWR from "swr";
const fetcher = (url) => {
  fetch(url).then((res) => res.json());
};

export function useUserList() {
  const { data, error } = useSWR("/api/dashboard/user-list", fetcher);
  console.log(data);
  return {
    list: data,
    isError: error,
  };
}
