import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import crypto from "../../data/crypto.json";
import Logo from "../Logo";
import RenderItems from "./RenderItems";



function WatchList() {

  const cryptoList =
    localStorage.getItem("cryptoList") != null &&
    localStorage.getItem("cryptoList") != "undefined"
      ? JSON.parse(localStorage.getItem("cryptoList"))
      : {};

  // read from local stoge which item has tick
  if (Object.keys(cryptoList).length === 0) {
    crypto.forEach((element) => {
      cryptoList[element.abbreviation] = false;
    });
  }

  const [form, setForm] = useState(cryptoList);
  const [dummyForm, setDummyForm] = useState(cryptoList);

  useEffect(() => {
    localStorage.setItem("cryptoList", JSON.stringify(dummyForm));
  }, [dummyForm]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setForm(dummyForm);
   
    // localStorage.setItem("cryptoList", JSON.stringify(dummyForm));

  };
  const handleShow = () => {
    setShow(true);
  };

  const handleCloseAndSave = () => {
    setShow(false);

    // Save changes to cryptoList and localStorage
    // for (let elm in form) {
    //   cryptoList[elm] = form[elm];
    // }
    setDummyForm(form);
    
    localStorage.setItem("cryptoList", JSON.stringify(dummyForm));
  };

  const handleChangeWatchlist = (event) => {
    //console.log(event.target.name)
    // Getting the id and state of the buttons which triggered the change
    const { id, checked } = event.target;

    // cryptoList[id] = checked;
    // console.log(cryptoForm)
    // localStorage.setItem("cryptoList", JSON.stringify(cryptoList));
    setForm({ ...form, [id]: checked });
    //cryptoList = form;
  };

  return (
    <>
      {/* Header */}
      <div className="container-fluid d-flex flex-row w-75 pb-0 m-3 mb-0 align-items-center">
        <div className="col-3">
          <p className="mb-0 fs-5 ">Market</p>
        </div>

        <div className="col-5 fs-5">
          <p className="mb-0 ms-5">
            Price<span className="ms-4">Change 1D</span>
          </p>
        </div>

        <div className="col-2"></div>

        <div className="col-2">
          <Button
            className="btn btn-dark pt-2 pb-2"
            type="button"
            onClick={handleShow}
          >
            +/-
          </Button>

          {/* Modal */}
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>CryptoCurrency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/*Opens a list of cryptos */}
              <Form>
                {crypto.map((element) => (
                  <div key={element.name} className="mb-3">
                    <Form.Check id={element.abbreviation}>
                      <Form.Check.Input
                        type="checkbox"
                        name={element.name}
                        isValid
                        checked={form[element.abbreviation]}
                        onChange={handleChangeWatchlist}
                      />
                      <Form.Check.Label>
                        <Logo
                          name={element.name}
                          abr={element.abbreviation}
                          size="25px"
                        />
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAndSave}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <RenderItems />
    </>
  );
}


export default WatchList;

