import { log } from "./utils/promise-helpers.js";
import {notaService as service} from './nota/service.js'

document.querySelector('#myButton')
.addEventListener('click', () => 
      service.sumItems(2143)
             .then(log)
             .catch(log)
)
    
