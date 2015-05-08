
describe('destructuring assignment with arrays', () => {

  it('provides terse syntax for assigning variables from an array', () => {

    let [a, b, c] = [1, 2, 3];

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it('can skip array elements', () => {

    let [a, , c] = [1, 2, 3];
    expect(a).toBe(1);
    expect(c).toBe(3);
  });

  it('can pull elements from nested arrays', () => {

    let [a, , [c, , [, f]]] = [1, 2, [3, 4, [5, 6]]];

    expect(a).toBe(1);
    expect(c).toBe(3);
    expect(f).toBe(6);
  });

  //TODO regex
  //TODO: swap veriables
});

describe('destructuring assignment with objects', () => {

  it('provides terse syntax for assigning same-name variables from an object\'s properties', () => {

    let { a, c, f } = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

    expect(a).toBe(1);
    expect(c).toBe(3);
    expect(f).toBe(6);
  });

  it('uses source: target for aliased variables', () => {

    let { a: one, b: two, c: three }  = { a: 1, b: 2, c: 3 };

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });

  it('can destructure nested properties', () => {

    let shape = {
      type: 'rectangle',
      dimensions: {
        length: 10,
        width: 15
      }
    };

    let { dimensions: { length, width } } = shape;

    expect(length).toBe(10);
    expect(width).toBe(15);
  });

});