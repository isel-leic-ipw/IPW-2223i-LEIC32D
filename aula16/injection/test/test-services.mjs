import {expect} from 'chai';
import data from '../tasks-data-mem.mjs'
import servicesFunc from '../tasks-services.mjs'

describe('Services Tests', () => {
    
    it('get task with id 1', () => {
        const services =  servicesFunc(data);
        return services.getTaskById(1)
                 .then(task => expect(task).
                        deep.equal({id : 1, text : "task1", userId : 11}))
    });
});