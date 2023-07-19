import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        {/* <div className="row" id='footer-fila-1'>
          <div className="col d-flex justify-content-center align-items-center">
            <h3>"Su negocio merece ser conocido"</h3>
            <div className='d-flex p-4'>
                <button type='button' className='btn' id='registro'>Regístrese</button>
            </div>
          </div>
        </div> */}
        <div className="row" id='footer-fila-2'>
          <div className="col text-center">
            <h6>Copyright © 2023 GGyR S.R.L</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
