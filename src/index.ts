import { Plateau, Rover } from './rover';

export function runMission(input: string): string[] {
  const lines = input.trim().split('\n'); // Split the input into lines
  const plateau = new Plateau(5, 5); // Create a plateau with given dimensions

  const output: string[] = [];

  for (let i = 0; i < lines.length; i += 2) { // Iterate through the input lines, two at a time
    const [x, y, dir] = lines[i].split(' '); // Extract the rover's initial position and direction
    const rover = new Rover(+x, +y, dir as any, plateau); // Create a new rover instance
    rover.execute(lines[i + 1]); // Execute the rover's commands
    output.push(rover.toString()); // Store the rover's final position and direction
  }

  return output;
}