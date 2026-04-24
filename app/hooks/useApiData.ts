/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

type ApiState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const cache = new Map<string, any>();

export function useApiData<T = any>(url: string): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: cache.get(url) || null,
    loading: !cache.has(url),
    error: null,
  });

  useEffect(() => {
    if (cache.has(url)) return;

    let isMounted = true;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        cache.set(url, data);
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ data: null, loading: false, error: "Failed to fetch" });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}