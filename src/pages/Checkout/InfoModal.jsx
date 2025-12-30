import { Button, Modal } from 'react-bootstrap'

export default function InfoModal({ showModal, handleConfirm }) {
  return (
    <Modal
        show={showModal}
        onHide={() => {}}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Pedido realizado</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Tu pedido se ha realizado correctamente.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleConfirm}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
