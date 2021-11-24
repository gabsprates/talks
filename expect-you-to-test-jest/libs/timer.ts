type EmptyCallback = () => void;
type DefineTimeout = (fn: EmptyCallback, ms: number) => EmptyCallback;

export const defineTimeout: DefineTimeout = (fn, ms) => {
  const timer = setTimeout(fn, ms);

  return () => clearTimeout(timer);
};
