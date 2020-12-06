import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let reversePipe: ReversePipe;
  beforeEach(() => {
    reversePipe = new ReversePipe();
  });

  it('should create the Pipe', () => {
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
