import { render as ReactRender, unmountComponentAtNode } from 'react-dom';
import { ModalMethodsConfig } from '../../interface/modal';
import Modal from './Modal';
import { getPortalContainer } from '../../utils/util';

export const confirm = (config: ModalMethodsConfig) => {
  const { autoFocusButton, afterClose, content, getContainer, ...restConfig } =
    config;
  let mergedConfig = {
    ...restConfig,
    open: true
  };

  const container = getPortalContainer(getContainer);

  /**渲染Modal */
  const render = (renderConfig: Partial<ModalMethodsConfig>) => {
    const { onOk, onCancel } = renderConfig;

    /**点击按钮时，需要手动关闭弹窗 */
    const mergedCancel = () => {
      onCancel && onCancel(destroy);
      destroy();
    };
    const mergedOk = () => {
      onOk && onOk(destroy);
      destroy();
    };
    ReactRender(
      <Modal {...restConfig} open onCancel={mergedCancel} onOk={mergedOk}>
        {content}
      </Modal>,
      container
    );
  };

  /**更新配置信息 */
  const update = (
    updateConfig:
      | ModalMethodsConfig
      | ((prevConfig: ModalMethodsConfig) => ModalMethodsConfig)
  ) => {
    render(
      typeof updateConfig == 'function' ? updateConfig(config) : updateConfig
    );
  };
  /**销毁弹窗(移除显示弹窗的container) */
  const destroy = () => {
    // 执行回调
    afterClose && afterClose();
    unmountComponentAtNode(container);
  };

  /**confirm初始化渲染 */
  render(mergedConfig);

  return {
    update,
    destroy
  };
};
