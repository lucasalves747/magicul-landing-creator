declare module "react-typed" {
  import * as React from "react";

  export interface ReactTypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    startDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    smartBackspace?: boolean;
    fadeOut?: boolean;
    fadeOutDelay?: number;
    attr?: string;
    bindInputFocusEvents?: boolean;
    contentType?: "html" | "null";
  }

  const Typed: React.FC<ReactTypedProps>;

  export default Typed;
}
