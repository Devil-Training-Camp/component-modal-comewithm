import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState
} from 'react';
import classnames from 'classnames';
import { Mask } from './Mask/Mask';
import { Button } from '../Button/Button';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../interface/modal';
import './Modal.less';

const prefixCls = 'modal-container';
const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    afterClose,
    open = false,
    mask = true,
    maskClosable = true,
    maskStyle = {},
    afterOpenChange = () => {},
    style = {},
    width = 520,
    title,
    zIndex = 1000,
    closable = true,
    wrapClassName,
    onOk = () => {},
    okText = '确定',
    okButtonProps = {},
    okType = 'primary',
    onCancel = () => {},
    cancelText = '取消',
    cancelButtonProps = {},
    bodyStyle = {},
    centered = false,
    closeIcon,
    footer = true,
    getContainer = document.body,
    destroyOnClose = false,
    forceRender = false,
    className,
    confirmLoading = false,
    focusTriggerAfterClose = false,
    keyboard = false,
    modalRender
  } = props;

  /**modal content visible */
  const [modalVisible, setModalVisible] = useState(forceRender)
  /**mouse position */
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    if(open) {
      setModalVisible(true)
    }
  }, [open])

  // modal open or close
  useEffect(() => {
    // open
    if(open && modalVisible) {
      afterOpenChange(true)
    }
    // close after animation end.
    if(!(open && modalVisible)) {
      afterClose()
      afterOpenChange(false)
    }
  }, [open, modalVisible])

  // destroy modal
  useEffect(() => {
    if(!open && modalVisible && destroyOnClose) {
      setModalVisible(false)
    }
  }, [open, destroyOnClose])

  // get mouse position
  useEffect(() => {
    if(!(open && modalVisible)) return
    const clickListener = (e:MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    document.addEventListener('click', clickListener)
    return () => {
      document.removeEventListener('click', clickListener)
    }

  }, [open, modalVisible])

   // button handle
  const onOkClick = (e: React.MouseEvent) => {
    onOk(e);
  };

  const onCancelClick = (e: React.MouseEvent) => {
    onCancel(e);
  };

  // render close button
  const renderCloseButton = () => {
    return closable ? 
      <Button className='modal-close' onClick={onCancelClick} type={'text'}>{closeIcon ? closeIcon : 'X'}</Button>
      : null
  }
  
  // render footer
  const renderFooterButton = () => {
    return footer == null ? null : renderButton();
  }

  // render button
  const renderButton = () => 
    <div className="modal-btns">
      {Array.isArray(footer) ? footer : renderDefaultButton()}
    </div>
  // default button
  const renderDefaultButton = () => (
    <>
      <Button type={'default'} onClick={onCancelClick} styles={cancelButtonProps}>{cancelText}</Button>
      <Button type={okType} onClick={onOkClick} styles={okButtonProps}>{okText}</Button>
    </>
  )

  // get modal container
  const getPortalContainer = () =>
    typeof getContainer === 'function'
      ? getContainer()
      : getContainer || document.body;

  // classnames
  const modalCls = classnames(prefixCls, {
    [`modal-center`]: centered,
  });
  const modalBodyCls = classnames('modal-info', className);
  const modalWrapperCls = classnames('modal-wrapper', wrapClassName);

  // merged style
  const mergedStyle = {
    width: `${width}${typeof width === 'number' ? 'px' : ''}`,
    zIndex,
    "--x": `${position.x}px`,
    "--y": `${position.y}px`,
    top: centered ? '' : style?.top,
    animation: 'bodyFadeIn .3s ease-in-out forwards',
    ...style,
    display: modalVisible ? '' : 'none'
  }

  return (
    open &&
    createPortal(
      <div className={modalWrapperCls}>
        <Mask
          visible={modalVisible}
          mask={mask}
          maskClosable={maskClosable}
          maskStyle={maskStyle}
          onClose={onCancelClick}
        />
        <div className={modalCls} style={mergedStyle}>
          {renderCloseButton()}
          <div className={modalBodyCls} style={bodyStyle}>
            {title && <div className="modal-title">{title}</div>}
            <div className="modal-content">{children}</div>
            {renderFooterButton()}
          </div>
        </div>
      </div>,
      getPortalContainer()
    )
  );
};

export default Modal;