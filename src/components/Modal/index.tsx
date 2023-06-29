import { FC } from 'react';
import { ModalMethodsConfig, ModalProps } from '../../interface/modal';
import Modal from './Modal';
import { confirm } from './confirm';

const MergedModal = Modal as FC<ModalProps> & {
  confirm: (config: ModalMethodsConfig) => any;
  success: (config: ModalMethodsConfig) => any;
  info: (config: ModalMethodsConfig) => any;
  warning: (config: ModalMethodsConfig) => any;
  error: (config: ModalMethodsConfig) => any;
};

MergedModal.confirm = (config: ModalMethodsConfig) => {
  return confirm(config);
};

MergedModal.success = (config: ModalMethodsConfig) => {
  return confirm({
    ...config,
    modalType: 'success'
  });
};

MergedModal.info = (config: ModalMethodsConfig) => {
  return confirm({
    ...config,
    modalType: 'info'
  });
};

MergedModal.warning = (config: ModalMethodsConfig) => {
  return confirm({
    ...config,
    modalType: 'warning'
  });
};

MergedModal.error = (config: ModalMethodsConfig) => {
  return confirm({
    ...config,
    modalType: 'error'
  });
};

export default MergedModal;
