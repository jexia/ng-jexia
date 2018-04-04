// tslint:disable:one-variable-per-declaration
import { mockPrototypeOf } from '../../../testUtils';
import { Client } from 'jexia-sdk-js/api/core/client';
import { JexiaClient } from './client.service';
import { Subject } from 'rxjs/Subject';

describe('JexiaClient', () => {

  beforeEach(() => mockPrototypeOf(Client, { returnValue: Promise.resolve({}) }));

  describe('when initializing', () => {

    it('should initialize the sdk client at the construction time', () => {
      const config = {} as any, myModule = {} as any;
      const subject = new JexiaClient(config, [myModule]);
      expect(Client.prototype.init).toHaveBeenCalledWith(config, myModule);
    });

    it('should not initialize the sdk client twice', () => {
      const subject = new JexiaClient({} as any, [] as any);
      expect(Client.prototype.init).toHaveBeenCalled();
      (Client.prototype.init as jasmine.Spy).calls.reset();
      subject.init();
      expect(Client.prototype.init).not.toHaveBeenCalled();
    });

    it('should return itself at return promise', async () => {
      const subject = new JexiaClient({} as any, [] as any);
      const result = await subject.init();
      expect(result).toBe(subject);
    });

    it('should await the sdk promise to conclude', (done) => {
      const defer = new Subject();
      (Client.prototype.init as jasmine.Spy).and.returnValue(defer.toPromise());
      const subject = new JexiaClient({} as any, [] as any);
      const spy = jasmine.createSpy('initialize');
      subject.init().then(spy);
      setTimeout(() => {
        expect(spy).not.toHaveBeenCalled();
        defer.complete();
        setTimeout(() => {
          expect(spy).toHaveBeenCalled();
          done();
        });
      });
    });

  });

  describe('when terminating', () => {

    it('should return itself at the return promise', async () => {
      const subject = new JexiaClient({} as any, [] as any);
      const result = await subject.terminate();
      expect(result).toBe(subject);
    });

    it('should await the sdk promise to conclude', (done) => {
      const defer = new Subject();
      (Client.prototype.terminate as jasmine.Spy).and.returnValue(defer.toPromise());
      const subject = new JexiaClient({} as any, [] as any);
      const spy = jasmine.createSpy('terminate');
      subject.terminate().then(spy);
      setTimeout(() => {
        expect(spy).not.toHaveBeenCalled();
        defer.complete();
        setTimeout(() => {
          expect(spy).toHaveBeenCalled();
          done();
        });
      });
    });

  });

});
