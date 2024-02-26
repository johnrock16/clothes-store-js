'use client';

import { ButtonHTMLAttributes, SyntheticEvent, useEffect, useState } from "react";
import styles from "./toggleSection.module.scss";

type ToggleSection = {
  buttons: string []
  content: any,
}

export function ToggleSection ({buttons, content} : ToggleSection) {
  const [state, setState] = useState({
    activeContent: ""
  });

  const handleClick = (e : SyntheticEvent) => {
    if (!e.target) return;
    const target = e.target as HTMLElement;
    const content = target.dataset.content as string
    setState((pv) => ({...pv, activeContent: content}));
  }

  useEffect(() => {
    setState((pv) => ({...pv, activeContent: buttons[0]}))
  }, [buttons]);

  return (
    <div className={styles.toggleSection}>
      <div className={styles.toggleSection__buttons}>
        {
          (buttons && buttons.length > 0)
          ?
            buttons.map((button:string, index: number) => (
              <button key={`sectionToggle-${button}-${index}`} className={styles.toggleSection__button} data-active={(state.activeContent === button) ? "true" : "false"} data-content={button} onClick={handleClick}>{button}</button>
            ))
          :
            null
        }
      </div>
      <div className={styles.toggleSection__content}>
        {content[state.activeContent] ? content[state.activeContent] : null}
      </div>
    </div>
  );
}