import React, { Fragment, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import CakeModal from './components/CakeModal';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <div class="container">
        <h4>Let's eat cake!</h4>
        <div>
          <button data-target="modal1" class="btn modal-trigger"><i class="material-icons left">cake</i>have some cake</button>
        </div>
      </div>
      <CakeModal />
    </Fragment>
  );
}

export default App;