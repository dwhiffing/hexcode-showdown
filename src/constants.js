export const FISH_COLORS = [2, 5, 6]
export const TILE_SIZE = 130
export const BOARD_SIZE = 8
export const HOOKS = [
  // [[1, 1, 1, 0, 1, 0, 0, 1, 0]], // T
  // [[1, 1, 1, 1, 1, 1, 1, 1, 1]], // BOX
  // [[1, 0, 1, 0, 1, 0, 1, 0, 1]], // CORNERS

  [
    // SMALL BOX
    [1, 1, 0, 1, 1, 0, 0, 0, 0],
  ],
  [
    // SMALL CORNER
    [1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0],
  ],
  [
    // SNAKE S
    [0, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 1, 0],
  ],
  [
    // SNAKE Z
    [1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 0],
  ],
  [
    // LINE
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
  ],
  [
    // DIAGONAL
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
  ],
  [
    // J BEND
    [1, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1],
  ],
  [
    // L BEND
    [1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 0, 0],
  ],
]
