import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";

import ToastsShowcase from "../Components/Showcases/Toasts";
import Header from "../Components/Showcases/Header";
import NewTask from "../Components/Showcases/NewTask";

//This is Function Type with react Hooks
const App = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container className="p-3">
      <Header />
      <NewTask />
      <ToastsShowcase />
      <ToastContainer />
    </Container>
  );
};

export default App;
