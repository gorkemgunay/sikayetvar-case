import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./button";
import XIcon from "./icons/x";

export default function Modal({
  open,
  setOpen,
  modalTitle,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: string;
  children: React.ReactNode;
}) {
  const modalContentRef = useRef<any>(null);

  useEffect(() => {
    if (!open) return;

    const clickHandler = (e: Event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.addEventListener("keydown", close);
    };
  }, [open, setOpen]);

  return open
    ? createPortal(
        <div
          id="modal"
          className="flex items-center justify-center fixed inset-0 z-50"
        >
          <div
            ref={modalContentRef}
            className="flex flex-col gap-8 p-6 rounded-lg bg-white min-w-[468px] z-10"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xl font-medium">{modalTitle}</h4>
              <Button
                className="bg-[#F8F8F8] w-[48px] h-[48px] rounded-full text-black"
                onClick={() => setOpen(false)}
              >
                <XIcon className="shrink-0" />
              </Button>
            </div>
            <div>{children}</div>
          </div>
          <div className="fixed inset-0 w-full h-full bg-black/40" />
        </div>,
        document.body
      )
    : null;
}
