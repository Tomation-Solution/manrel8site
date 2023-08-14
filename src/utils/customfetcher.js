import { useQuery } from "react-query";

export const useCustomFetcher = (key, fetcherfn, select) => {
  const options = {
    refetchOnWindowFocus: false,
  };

  if (select) {
    options.select = select;
  } else {
    options.select = (data) => data.data;
  }

  const { isLoading, isFetching, isError, data } = useQuery(
    key,
    fetcherfn,
    options
  );

  const loadingState = isLoading || isFetching;

  return { loadingState, isError, data };
};
