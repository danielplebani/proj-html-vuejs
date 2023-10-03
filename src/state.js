import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'API SITO',
    characters: null,
  
    connectAPI(){
      axios
        .get(this.base_url)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('Error:');
          console.error(error);
        })
    }
  })