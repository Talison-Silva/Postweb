import { defineConfig } from 'vitest/config';
import { resolve,join } from 'path';

export default defineConfig({
  test: {},
  resolve:{
    	alias:{
    		'@':resolve(join(__dirname,'src/'))
    	}
    }
})