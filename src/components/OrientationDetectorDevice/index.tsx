/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
// import './OrientationDetectorDevice.css';
import styles from './OrientationDetectorDevice.module.css';
import rotateDeviceImage from './assets/girar.svg';

function OrientationDetectorDevice() {
  const [mobileHorizontal, setMobileHorizontal] = useState(false);

  useEffect(() => {
    function checkHorizontalOrientation() {
      const largura = window.innerWidth;
      const altura = window.innerHeight;
      const maxWidthMobile = 500;

      if (largura > altura && altura < maxWidthMobile) {
        setMobileHorizontal(true);
        document.body.classList.add('no_scroll');
      } else {
        setMobileHorizontal(false);
        document.body.classList.remove('no_scroll');
      }
    }

    window.addEventListener('resize', checkHorizontalOrientation);

    // Quando o componente é montado
    checkHorizontalOrientation();

    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', checkHorizontalOrientation);
    };
  }, []);

  return (
    <div
      className={` ${styles.orientation_detector} ${mobileHorizontal ? styles.is_mobile_horizontal : ''}`.trim()}
    >
      <figure className={`${styles.container_figure}`}>
        <img className={`${styles.rotate_icon}`} src={rotateDeviceImage} alt="girar dispositivo" />
        <div className={`${styles.msg}`}>
          Gire o dispositivo para a posição vertical e veja o conteúdo desta página
        </div>
      </figure>
    </div>
  );
}

export default OrientationDetectorDevice;
