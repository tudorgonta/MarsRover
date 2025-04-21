export type Direction = 'N' | 'E' | 'S' | 'W';

const directions: Direction[] = ['N', 'E', 'S', 'W'];

const moveDelta: Record<Direction, [number, number]> = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
};

export class Plateau {
  constructor(
    public width: number, 
    public height: number
  ) {}

  // Check if the rover is within the plateau boundaries
  isInside(x: number, y: number): boolean {
    return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
  }
}

export class Rover {
  constructor(
    public x: number,
    public y: number,
    public direction: Direction,
    private plateau: Plateau
  ) {}

  // Rotate the rover left or right
  private rotate(command: 'L' | 'R') {
    const idx = directions.indexOf(this.direction);
    if (command === 'L') {
      this.direction = directions[(idx + 3) % 4]; // Left
    } else {
      this.direction = directions[(idx + 1) % 4]; // Right
    }
  }

  // Move the rover in the current direction
  private move() {
    const [dx, dy] = moveDelta[this.direction];
    const newX = this.x + dx;
    const newY = this.y + dy;

    // Check if the new position is within the plateau boundaries
    if (this.plateau.isInside(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  execute(commands: string) {
    for (const char of commands) {
      if (char === 'L' || char === 'R') {
        this.rotate(char); // Rotate the rover
      } else if (char === 'M') {
        this.move(); // Move the rover
      }
    }
  }

  // Convert the rover's position and direction to a string
  toString(): string {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}
