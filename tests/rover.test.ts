import { runMission } from '../src/index';

describe('Mars Rover', () => {
  it('should produce correct output for sample input', () => {
    const input = `1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

    const expected = ['1 3 N', '5 1 E'];
    console.log(runMission(input))
    expect(runMission(input)).toEqual(expected);
  });
  
});