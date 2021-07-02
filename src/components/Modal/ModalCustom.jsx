import React from "react";
import { Modal } from "antd";

const ModalEnter = () => <div>Enter</div>;

const ModalRegistration = () => <div>Reg</div>;

const ModalRate = () => <div>Reg</div>;

const ModalCustom = ({ visible, type, ...rest }) => {
    const content = () => {
        switch (type) {
            case "reg": {
                return <ModalRegistration />;
            }
            case "rate": {
                return <ModalRate />;
            }
            default: {
                return <ModalEnter />;
            }
        }
    };

    return (
        <Modal visible={visible} {...rest}>
            {content()}
        </Modal>
    );
};

export default ModalCustom;
