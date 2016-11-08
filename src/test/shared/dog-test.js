/* eslint-disable import/no-extraneous-dependencies, no-console */
import chai from 'chai'
import { stub } from 'sinon'
import sinonChai from 'sinon-chai'
import { describe, it } from 'mocha'
import Dog from '../../shared/dog'

chai.should()
chai.use(sinonChai)

describe('shared', () => {
  describe('dog', () => {
    describe('barkInConsole', () => {
      it('should print a bark string with its name', () => {
        stub(console, 'log')
        new Dog('Tobby Jason').barkInConsole()
        console.log.should.have.been.calledWith('Wah,wah, this is Tobby Jason')
        console.log.restore()
      })
    })
  })
})
