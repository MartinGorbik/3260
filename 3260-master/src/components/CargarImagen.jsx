import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const CargarImagen = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageData, setImageData] = useState(null); // Almacena los datos de la imagen en base64

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    // Muestra la vista previa de la imagen
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result.split(',')[1]); // Almacena la parte base64
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result.split(',')[1]; // Obtiene la parte base64
        onImageUpload(base64Image); // Pasa el archivo en base64
      };
      reader.readAsDataURL(selectedFile); // Lee el archivo como base64
    }
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Seleccione una imagen
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
