import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

export const Notification = (props) => {
  // alert(message)

  const [commonModel, setCommonModel] = useState(false);
  useEffect(() => {
    if (props.action_mo == true) {
      setCommonModel(true);
      setTimeout(() => {
        handleCommonModel();
      }, 4000);
    }
  }, [props.message_mo, props.action_mo, props.random_val]);
  const handleCommonModel = () => {
    setCommonModel(false);
    // props.action_mo = false
  };
  const handleCommonModelOp = () => {
    setCommonModel(true);
  };

  return (
    <>
      <Modal
        className="token-list-modal remove-max-height"
        show={commonModel}
        onHide={handleCommonModel}
        centered
        size="md"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={handleCommonModel}></Modal.Header>
        <Modal.Body>
          <div
            className="transaction-table"
            style={{ background: "transparent" }}
          >
            <div className="">
              <p className="text-white text-center"> <b>{props.message_mo}</b></p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
