import { TestBed } from '@angular/core/testing';
import { NgJexiaModule, NgJexiaConfigToken, JexiaModule } from './core.module';
import { JexiaClient } from './client.service';
import { mockPrototypeOf } from 'testUtils';

class TestClassProvider {}

describe('CoreModule', () => {

  beforeEach(() => mockPrototypeOf(JexiaClient));

  it('should not throw if can`t find a parent node of itself', () => {
    expect(new NgJexiaModule(null as any)).toBeDefined();
  });

  it('should throw if it finds a parent node of itself', () => {
    expect(() => new NgJexiaModule({} as any)).toThrow();
  });

  it('should provide the encapsulated jexia client', () => {
    TestBed.configureTestingModule({
      imports: [
        NgJexiaModule.initialize({} as any),
      ],
    });
    expect(TestBed.get(JexiaClient) instanceof JexiaClient).toBeTruthy();
  });

  it('should provide the initial configuration to the jexia client', () => {
    const config = { a: 1, b: 2, c: 3 };
    TestBed.configureTestingModule({
      imports: [
        NgJexiaModule.initialize(config as any),
      ],
    });
    const client = TestBed.get(JexiaClient);
    expect(client.config).toEqual(config);
  });

  it('should provide the initial configuration', () => {
    const config = { a: 1, b: 2, c: 3 };
    TestBed.configureTestingModule({
      imports: [
        NgJexiaModule.initialize(config as any),
      ],
    });
    expect(TestBed.get(NgJexiaConfigToken)).toEqual(config);
  });

  it('should provide sub module providers', () => {
    const providers: JexiaModule[] = [{
      sdkModule: {} as any,
      providers: [
        TestClassProvider,
      ],
    }];
    TestBed.configureTestingModule({
      imports: [
        NgJexiaModule.initialize({ providers } as any),
      ],
    });
    expect(TestBed.get(TestClassProvider) instanceof TestClassProvider).toBeTruthy();
  });

  it('should provide sub modules to the jexia client', () => {
    const sdkModule = { a: 1, b: 2, c: 3 } as any;
    const providers: JexiaModule[] = [{
      sdkModule,
    }];
    TestBed.configureTestingModule({
      imports: [
        NgJexiaModule.initialize({ providers } as any),
      ],
    });
    const client = TestBed.get(JexiaClient);
    expect(client.modules).toEqual([sdkModule]);
  });

});
