type EmptyCallback = () => void;
type DefineTimeout = (fn: EmptyCallback, ms: number) => EmptyCallback;

const defineTimeout: DefineTimeout = (fn, ms) => {
  const timer = setTimeout(fn, ms);

  return () => clearTimeout(timer);
};

export { defineTimeout };
