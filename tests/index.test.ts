import { Cell, Rule } from '../src/index';
describe('testing index file', () => {

  test('cell should be dead initially', () => {
    const cell: Cell = new Cell(0, 0); 
    const state: boolean = cell.getIsAlive();
    expect(state).toEqual(false);
  })

  test('get coordinations', () => {
    const cell: Cell = new Cell(0, 0); 
    const coordinates: Array<number> = cell.getCoordinates();
    expect(coordinates).toStrictEqual([0, 0]);
  })

  test('bring back to life', () => {
    const cell: Cell = new Cell(0, 0); 
    Rule.bringBackToLife(cell);
    const state: boolean = cell.getIsAlive();
    expect(state).toEqual(true);
  })





























  test("unalive a cell",() => {
    const cell: Cell = new Cell(1, 2)
    Rule.unalive(cell)
    

  } )

});