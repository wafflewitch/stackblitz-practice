import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const CakeModal = () => {
  return(
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Oh no!</h4>
        <p>The cake was a lie! <i class="material-icons tiny">mood_bad</i></p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">k</a>
      </div>
    </div>
  )
}

export default CakeModal;