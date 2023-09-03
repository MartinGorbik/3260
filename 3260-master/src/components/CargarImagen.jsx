import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const CargarImagen = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageData, setImageData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result.split(',')[1];
        onImageUpload(base64Image);
      };
      reader.readAsDataURL(selectedFile);
    }
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Nueva imagen
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cargar Archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Selecciona un archivo:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            {imageData && (
              <div>
                <p>Vista previa de la imagen:</p>
                <img
                  src={`data:image/jpeg;base64,${imageData}`}
                  alt="Vista previa"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Cargar Archivo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CargarImagen;
