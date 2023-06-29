import { createRoot } from 'react-dom/client';
import { useState } from 'react';

import { Modal } from './components';
import { Button } from './components';
import './index.less';

export const App = () => {
  const [visible, setVisible] = useState(false);

  const afterClose = () => {
    console.log('close modal');
  };

  const afterOpenChange = (visible: boolean) => {
    console.log('visible:', visible);
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const onStaticMethods = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'primary',
      okButtonProps: {
        disabled: true
      },
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  return (
    <>
      <div className="app-container">
        <Button type={'default'} onClick={onStaticMethods}>
          Modal Methods
        </Button>

        <Button className="modal-btn" type={'primary'} onClick={openModal}>
          open modal
        </Button>
        <Modal
          open={visible}
          onOk={closeModal}
          onCancel={closeModal}
          afterClose={afterClose}
          afterOpenChange={afterOpenChange}
          closable={true}
          style={{
            top: '200px'
          }}
          // centered
          footer={[
            <Button onClick={() => {}} type={'primary'} danger>
              知道了
            </Button>,
            <Button onClick={() => {}} type={'dashed'} ghost danger>
              知道了
            </Button>,
            <Button onClick={() => {}} type={'default'} ghost>
              知道了
            </Button>,
            <Button onClick={() => {}} type={'text'} ghost>
              知道了
            </Button>,
            <Button onClick={() => {}} type={'link'} ghost>
              知道了
            </Button>
          ]}
        >
          <p>Some contents</p>
          <p>Some contents</p>
          <p>Some contents</p>
          <p>Some contents</p>
        </Modal>
      </div>
    </>
  );
};

const root = document.querySelector('#root');
root && createRoot(root).render(<App />);
