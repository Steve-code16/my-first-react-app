import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalOpen, openModal] = useState(false);
  function deleteBtnHandler() {
    openModal(true);
  }

  function closeModal() {
    openModal(false);
  }

  return (
    <div className="card">
      <h2>{props.todoTitle}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteBtnHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {isModalOpen ? <Backdrop onClick={closeModal} /> : null}
    </div>
  );
}

export default Todo;
