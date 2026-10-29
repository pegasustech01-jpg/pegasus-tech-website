import { useEffect, useState } from "react";

export function useWebGL() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok = !!(
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
      );
      setSupported(ok);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
