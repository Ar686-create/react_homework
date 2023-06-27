"use client";
import React, { useCallback, useContext, useState } from "react";
import styles from "./styles.module.css";
import { faq } from "../shared/const";

export default function Page() {
  const AccordeonContext = React.createContext(false);

  const Accordeon = ({ children }: { children: any }) => {
    const [activeItem, setActiveItem] = useState();

    const switchGroup = useCallback((id) => {
      setActiveItem((activeItem) => (activeItem === id ? undefined : id));
    }, []);

    return (
      <AccordeonContext.Provider value={{ activeItem, switchGroup }}>
        <div className={styles.faqList}>{children}</div>
      </AccordeonContext.Provider>
    );
  };

  Accordeon.Item = function MenuGroup({ children, item }) {
    const { activeItem, switchGroup } = useContext(AccordeonContext);
    return (
      <div className="card">
        <div className={styles.faqHeader}>
          <div className={styles.faqTitle}>{item.title}</div>
          <svg
            onClick={() => switchGroup(item.id)}
            className={activeItem === item.id ? styles.active : undefined}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 30.3334H20C27.24 30.3334 30.3333 27.2401 30.3333 20.0001V12.0001C30.3333 4.76008 27.24 1.66675 20 1.66675H12C4.76001 1.66675 1.66667 4.76008 1.66667 12.0001V20.0001C1.66667 27.2401 4.76001 30.3334 12 30.3334ZM3.66667 12.0001C3.66667 5.85341 5.85334 3.66675 12 3.66675H20C26.1467 3.66675 28.3333 5.85341 28.3333 12.0001V20.0001C28.3333 26.1467 26.1467 28.3334 20 28.3334H12C5.85334 28.3334 3.66667 26.1467 3.66667 20.0001V12.0001ZM15.2933 19.5868C15.4933 19.7868 15.7467 19.8801 16 19.8801C16.2533 19.8801 16.5067 19.7868 16.7067 19.5868L21.4133 14.8801C21.8 14.4934 21.8 13.8534 21.4133 13.4668C21.0267 13.0801 20.3867 13.0801 20 13.4668L16 17.4668L12 13.4668C11.6133 13.0801 10.9733 13.0801 10.5867 13.4668C10.2 13.8534 10.2 14.4934 10.5867 14.8801L15.2933 19.5868Z"
              fill="#333333"
            />
          </svg>
        </div>
        {activeItem === item.id && <div>{children}</div>}
      </div>
    );
  };

  Accordeon.Content = function MenuItem({ text }: { text: string }) {
    return <div>{text}</div>;
  };

  return (
    <>
      <div className="card">
        <h1>Вопросы-ответы</h1>
      </div>

      <Accordeon>
        {faq.map((item, index) => (
          <Accordeon.Item item={item} key={index}>
            <p className={styles.faqText}>{item.text}</p>
          </Accordeon.Item>
        ))}
      </Accordeon>
    </>
  );
}
