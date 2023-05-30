import { createRoot } from 'react-dom/client';
import { Modal } from './components';

import './style/variable.less';

import './index.less';

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
          // footer={null}
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
