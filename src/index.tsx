import { createRoot } from 'react-dom/client';
import { Modal } from './components';

import './index.less';
import { Button } from './components';

const App = () => {
  const afterClose = () => {
    console.log('close modal');
  };

  const afterOpenChange = (visible: boolean) => {
    console.log('visible:', visible);
  };

  return (
    <>
      <div className="app-container">
        <Modal
          open={true}
          // mask={true}
          // maskClosable={true}
          // maskStyle={{
          //   border: "1px cyan solid",
          //   boxSizing: 'border-box'
          // }}
          afterClose={afterClose}
          afterOpenChange={afterOpenChange}
          // style={{
          //   top: '40px'
          // }}
          // width="600px"
          title="use Hooks"
          // zIndex={10}
          // closable={true}
          onOk={() => {}}
          onCancel={() => {}}
          // okText={'confirm'}
          // okType={'primary'}
          // cancelText={'cancel'}
          okButtonProps={{}}
          cancelButtonProps={{}}
          bodyStyle={{}}
          destroyOnClose={true}
          forceRender={true}
          footer={[
            <Button onClick={() => {}} disabled type={'primary'} danger>
              知道了
            </Button>,
            <Button onClick={() => {}} disabled type={'dashed'} ghost danger>
              知道了
            </Button>,
            <Button onClick={() => {}} disabled type={'default'} ghost>
              知道了
            </Button>,
            <Button onClick={() => {}} disabled type={'text'} ghost>
              知道了
            </Button>,
            <Button onClick={() => {}} disabled type={'link'} ghost>
              知道了
            </Button>
          ]}

          // centered={true}
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
