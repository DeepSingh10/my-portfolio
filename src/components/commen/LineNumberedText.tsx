import { useEffect, useRef, useState } from "react";

const LineNumberedText = ({
  content,
  scrollRef,
}: {
  content: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const lineNumRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(1);

  // Dynamically update line count
  useEffect(() => {
    const updateLineCount = () => {
      const el = contentRef.current;
      if (!el) return;

      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight || "24");
      const height = el.scrollHeight;

      setLineCount(Math.ceil(height / lineHeight));
    };

    updateLineCount();
    window.addEventListener("resize", updateLineCount);
    return () => window.removeEventListener("resize", updateLineCount);
  }, [content]);

  // Sync scroll
  useEffect(() => {
    const scrollEl = scrollRef.current;
    const numEl = lineNumRef.current;
    const contentEl = contentRef.current;
    if (!scrollEl || !numEl || !contentEl) return;

    const onScroll = () => {
      const top = scrollEl.scrollTop;
      numEl.scrollTop = top;
      contentEl.scrollTop = top;
    };

    scrollEl.addEventListener("scroll", onScroll);
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={lineNumRef} className="flex flex-col w-24 text-right">
        {Array.from({ length: lineCount + 1 }).map((_, idx) => (
          <div key={idx} className="grid grid-cols-2 justify-end leading-6">
            <span className="col-span-1 mr-3 text-[#7f9db9]">{idx + 1}</span>
            <div className="col-span-1 flex justify-center text-[#7f9db9]">
              {idx === 0 ? "/**" : "*"}
            </div>
          </div>
        ))}
      </div>
      <div ref={contentRef} className="w-full leading-6 mt-[24px]">
        {content}
      </div>
    </>
  );
};

export default LineNumberedText;