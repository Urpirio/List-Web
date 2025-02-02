import { useState } from "react";


export default function SmBtnCloseWindow(){


    const [CWindow, setcwindow] = useState(false);

    const CloseWindow = () => {
      setcwindow(!CWindow);

      CWindow ? document.getElementById('Sventana').style.display = 'flex' : document.getElementById('Sventana').style.display = 'none';
      CWindow ? document.getElementById('Smain').style.width = '78vw' : document.getElementById('Smain').style.width = '100vw';

    };

 
    return(
        <button onClick={CloseWindow} id='btn2'>
            <i class="bi bi-box-arrow-left"></i>
        </button>
    )

};