import { useState } from "react";

import styles from "./styles.module.scss";
import { CodeBlock } from "../codeblock";
import { useWebHaptics } from "web-haptics/react";

const pkgCmds = {
  npm: "npm i web-haptics",
  pnpm: "pnpm i web-haptics",
  yarn: "yarn add web-haptics",
  bun: "bun i web-haptics",
};

export const InstallCommands = () => {
  const [cmdIndex, setCmdIndex] = useState(0);
  const { trigger } = useWebHaptics();
  return (
    <div className={styles.install}>
      <div className={styles.commands}>
        {Object.keys(pkgCmds).map((cmd, i) => (
          <button
            key={cmd}
            onClick={() => {
              setCmdIndex(i);
              trigger();
            }}
            data-active={i === cmdIndex}
          >
            {cmd}
          </button>
        ))}
      </div>
      <div className={styles.cmd}>
        <CodeBlock
          code={pkgCmds[Object.keys(pkgCmds)[cmdIndex] as keyof typeof pkgCmds]}
        >
          <span
            style={{
              opacity: 0.4,
              userSelect: "none",
            }}
          >
            {"$ "}
          </span>
          {pkgCmds[Object.keys(pkgCmds)[cmdIndex] as keyof typeof pkgCmds]}
        </CodeBlock>
      </div>
    </div>
  );
};
