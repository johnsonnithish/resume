import { useEffect, useRef, useMemo } from "react";
import "./Columns.css";
/**
 * Columns
 * Props:
 * - items: Array<string | React.ReactNode>   // content per column; strings are treated as HTML
 * - allowHtml: boolean                        // if true, strings render as HTML (dangerouslySetInnerHTML)
 * - maxWidth: string                          // wrapper max width (e.g., "660px")
 * - gap: number                               // gap between columns (px)
 * - padding: number                           // scroller padding (px)
 * - scrollerBg: string                        // scroller background color
 * - scrollerRadius: number                    // scroller border-radius (px)
 * - columnWidth: number                       // each column width (px)
 * - columnHeight: number                      // each column height (px)
 * - columnBg: string                          // column background
 * - columnRadius: number                      // column border-radius (px)
 * - classNames?: { wrap?: string, scroller?: string, column?: string } // optional overrides
 */
export default function Columns({
  items = [],
  allowHtml = true,
  maxWidth = "660px",
  gap = 16,
  padding = 16,
  scrollerBg = "#0b5cff",
  scrollerRadius = 24,
  columnWidth = 500,
  columnHeight = 700,
  columnBg = "#ffffff",
  columnRadius = 16,
  classNames = {},
  children, // optional alternative to items
}) {
  const scrollerRef = useRef(null);

  // combine items + children (if both provided, show items first)
  const content = useMemo(() => {
    const nodes = Array.isArray(items) ? items : [];
    const childArray = Array.isArray(children) ? children : children ? [children] : [];
    return [...nodes, ...childArray];
  }, [items, children]);

  // inject tiny CSS once (for scrollbar hiding)
  useEffect(() => {
    const id = "columns-scrollbar-hide";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = `
        .columns__scroller::-webkit-scrollbar{display:none}
        .columns__scroller{scrollbar-width:none;-ms-overflow-style:none}
        .columns__scroller.dragging{cursor:grabbing;user-select:none}
      `;
      document.head.appendChild(style);
    }
  }, []);

  // drag + inertia
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false, startX = 0, startLeft = 0;
    let lastX = 0, vx = 0, raf = null;

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
    const stopInertia = () => { if (raf) cancelAnimationFrame(raf); raf = null; vx = 0; };

    const onDown = (e) => {
      isDown = true;
      el.classList.add("dragging");
      startX = lastX = getX(e);
      startLeft = el.scrollLeft;
      stopInertia();
    };

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      vx = -dx;
      el.scrollLeft = startLeft - (x - startX);
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("dragging");

      const friction = 0.95;
      const minV = 0.2;
      const tick = () => {
        if (Math.abs(vx) < minV) { raf = null; return; }
        el.scrollLeft += vx;
        vx *= friction;
        if (el.scrollLeft <= 0 || el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          vx *= -0.4; // soft bounce
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // mouse
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    // touch
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onUp);
    el.addEventListener("touchcancel", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
      el.removeEventListener("touchcancel", onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const wrapStyle = {
    maxWidth,
    width: "100%",
    margin: "0 auto",
    padding,
    boxSizing: "border-box",
  };

  const scrollerStyle = {
    background: scrollerBg,
    borderRadius: scrollerRadius,
    padding,
    display: "flex",
    gap,
    width: "max-content",   // shrink to content when few cards
    maxWidth: "100%",       // but don’t exceed wrapper
    marginInline: "auto",
    overflowX: "auto",
    overflowY: "hidden",
    cursor: "grab",
  };

  const columnStyle = {
    background: columnBg,
    borderRadius: columnRadius,
    padding: 12,
    flex: `0 0 ${columnWidth}px`,
    height: columnHeight,
    boxSizing: "border-box",
  };

  return (
    <div className={`columns__wrap ${classNames.wrap || ""}`} style={wrapStyle}>
      <div
        className={`columns__scroller ${classNames.scroller || ""}`}
        style={scrollerStyle}
        ref={scrollerRef}
      >
        {content.map((item, i) => (
          <div
            key={i}
            className={`columns__column ${classNames.column || ""}`}
            style={columnStyle}
          >
            {typeof item === "string" && allowHtml
              ? <div dangerouslySetInnerHTML={{ __html: item }} />
              : item}
          </div>
        ))}
      </div>
    </div>

  );
}
