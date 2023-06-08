import { createRoot } from 'react-dom/client';
import { ModalMethodsConfig } from "../../interface/modal";
import Modal from './Modal'

export const confirm = (config:Partial<ModalMethodsConfig>) => {
    const {
        autoFocusButton,
        onOk = () => {},
        onCancel = () => {},
        afterClose = () => {},
        content,
        icon,
        ...restConfig
    } = config

    const component = (
        <Modal
            open={true}
            onOk={onOk}
            afterClose={afterClose}
            onCancel={onCancel}
            {...restConfig}
        >
            {content}
        </Modal>
    )

    const root = document.querySelector('#root');
    root && createRoot(root).render(component);
}