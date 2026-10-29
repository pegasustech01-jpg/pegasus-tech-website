export const pointer = {
  x: 0,
  y: 0,
  nx: 0,
  ny: 0,
};

export function setPointerFromEvent(e: { clientX: number; clientY: number }) {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  pointer.nx = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.ny = -(e.clientY / window.innerHeight) * 2 + 1;
}
