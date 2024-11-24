import { useState } from "react";

export default function AccordionItems({
  number,
  question,
  answer,
  curOpen,
  onOpen,
}) {
  const isOpen = number === curOpen;

  function handleToggle() {
    //setIsOpen((isOpen) => !isOpen); // setiap diclick maka akan mengubah nilai pada setIsOpen ke nilai sebaliknya
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
