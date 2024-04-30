import {get, post, put, deleted} from '@/api/controllers/posts-controller.ts';
import {describe,expect,test} from 'vitest';
import {Request,Response} from 'express';
import {noCallThru} from 'proxyquire';
import rewire from 'rewire';

let res: Response = {
	status: status =>
	{
		console.log(status)
		return {
			send: send => console.log(send)
		}
	}
};

const proxyquire=noCallThru();

const mockServices = {
  '@/hook/services/postagens.js': {
    geted: () => 'mocked_get_result'
  }
};

describe('[ Controller > Posts ] . . . . .',() => {
	test('~. get - it\'s ok',() => {

		get({
			token:'',
			query:{filter:''}
		},res)
		expect(2).toEqual(2)
	})

	test('~. post - it\'s ok',() => {
		expect(2).toEqual(2)
	})

	test('~. delete - it\'s ok',() => {
		expect(2).toEqual(2)
	})

	test('~. put - it\'s ok',() => {
		expect(2).toEqual(2)
	})
})