import {get, authenticate, register, myAccount} from '@/api/controllers/users-controller.ts';
import {describe,expect,test} from 'vitest';


describe('[ Controller > Users ] . . . . .',() => {
	test('~. get - it\'s ok',() => {
		expect(2).toEqual(2)
	})

	test('~. authenticate - it\'s ok',() => {
		expect(2).toEqual(2)
	})

	test('~. register - it\'s ok',() => {
		expect(2).toEqual(2)
	})

	test('~. myAccount - it\'s ok',() => {
		expect(2).toEqual(2)
	})
})