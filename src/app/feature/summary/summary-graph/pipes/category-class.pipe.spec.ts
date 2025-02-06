import { CategoryClassPipe } from './category-class.pipe';

describe('CategoryClassPipe', () => {
  let pipe: CategoryClassPipe;

  beforeEach(() => {
    pipe = new CategoryClassPipe();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an empty string when title is undefined', () => {
      const result = pipe.transform(undefined, 1);
      expect(result).toBe('');
    });

    it('should return red for High title and id 1', () => {
      const result = pipe.transform('High', 1);
      expect(result).toBe('red');
    });

    it('should return yellow for Medium title and id 1', () => {
      const result = pipe.transform('Medium', 1);
      expect(result).toBe('yellow');
    });

    it('should return green for any other title and id 1', () => {
      const result = pipe.transform('Low', 1);
      expect(result).toBe('green');
    });

    it('should return red for High title and id 2', () => {
      const result = pipe.transform('High', 2);
      expect(result).toBe('red');
    });

    it('should return yellow for Medium title and id 2', () => {
      const result = pipe.transform('Medium', 2);
      expect(result).toBe('yellow');
    });

    it('should return green for any other title and id 2', () => {
      const result = pipe.transform('Low', 2);
      expect(result).toBe('green');
    });

    it('should return green for High title and id 3', () => {
      const result = pipe.transform('High', 3);
      expect(result).toBe('green');
    });

    it('should return yellow for Medium title and id 3', () => {
      const result = pipe.transform('Medium', 3);
      expect(result).toBe('yellow');
    });

    it('should return red for any other title and id 3', () => {
      const result = pipe.transform('Low', 3);
      expect(result).toBe('red');
    });

    it('should return an empty string if id is not 1, 2, or 3', () => {
      const result = pipe.transform('High', 4);
      expect(result).toBe('');
    });
  });
});
