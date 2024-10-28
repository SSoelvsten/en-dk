/// Returns the parameter value for a given key. If none exists, then it returns `null`.
export function GetURLParam<V = string> (key: string) {
  const params: URLSearchParams = new URLSearchParams(document.location.search);
  return params.get(key) as V | null;
}

/// Sets the parameter value for a given key.
export function SetURLParam<V = string> (key: string, value: V) {
  let params: URLSearchParams = new URLSearchParams(document.location.search);

  if (value) {
    params.set(key, `${value}`);
  } else {
    params.delete(key);
  }

  window.history.replaceState(
    window.history.state?.data,
    window.history.state?.unused,
    `${window.location.pathname}${params.size > 0 ? `?${params.toString()}`: ''}`
  );
}