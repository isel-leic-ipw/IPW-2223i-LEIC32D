import {expect} from 'chai';
//import {sum,div} from '../operations.js'
import operations from '../operations.js'

describe('Operations Test', () => {
    
    it('adds 1 + 2 to equal 3', () => {
        expect(operations.sum(1, 2)).to.equal(3);
      });
    
    it('6 / 2 to equal 3', () => {
        expect(operations.div(6, 2)).to.equal(3);
      });
});