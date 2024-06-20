## Wallpaper Design Project

### Overview

This project creates various wallpaper designs using JavaScript. The wallpapers can be customized by modifying different variables in the code. The project includes an HTML file that, when run, opens a Chrome tab displaying the generated wallpaper design. The code allows for different patterns and customization options, making it easy to create unique and visually appealing wallpapers.

### Features and Usage

#### Output Modes
- **GRID_WALLPAPER**: This mode shows the final wallpaper design.
- **DEVELOP_GLYPH**: This mode displays each tile individually, which is useful for debugging and design.

#### Debugging Individual Components
In the DEVELOP_GLYPH mode, you can set different checks to `true` to view each component on its own. For example:
- **patternBoatCheck**: When set to `true`, you'll see a single boat, which helps in designing the boat.
- **phareCheck**: When set to `true`, you'll see a tile with a lighthouse.

#### Wallpaper Patterns
In the GRID_WALLPAPER mode, you can set one of the pattern checks to `true` and the others to `false` to view different patterns:
- **flowerCheck**: Generates a flower of life pattern (note: buggy in grid view but looks cool in debug view).
- **mamsPatternCheck**: Creates a random squiggly lines pattern.
- **patternBoatCheck**: Creates a motif of just boats as a wallpaper design.
- **patternWheelCheck**: Creates a wallpaper with boat wheels.
- **patternMarinCheck**: Creates strips for the final design or can be viewed as striped wallpaper with wheels.
- **patternMarinBIGCheck**: Similar to patternMarinCheck but larger, making it easier to view the designs.

#### Important Pattern
- **pharePatternCheck**: This should be `true` by default, can be changed to view the other designs. It creates a grid using some probability to generate a horizon view of the ocean. Each tile has a chance of containing nothing, a lighthouse, an island, or birds.

#### Additional Customization Options
- **bigAndSmallCheck**: Allows for the chance of having two sizes for the islands in the pattern for more variety.
- **pharePatternWheelOrBoat**: Can be either "W" for boat wheels or "B" for boats, changing the icon in the border of each tile.

#### Probability Variables
There are four percentage variables for each tile. You should only change the top three, and you can modify these to increase the chances of the corresponding tile appearing:
- **percentageOfPhare**: Probability of a lighthouse tile.
- **percentageOfIslands**: Probability of an island tile.
- **percentageOfBirds**: Probability of a birds tile.
- **percentageOfWater**: Calculated automatically to fill the remaining percentage.

#### Example:
```javascript
let percentageOfPhare = 5;
let percentageOfIslands = 20;
let percentageOfBirds = 40;
let percentageOfWater = 100 - (percentageOfPhare + percentageOfIslands + percentageOfBirds);
```

### Installation and Setup

1. **Clone the Repository:**

2. **Open the HTML File:**
   - Open the index.html file in your browser (preferably Chrome).
   - This will generate and display the wallpaper based on the current configuration.

### Usage

1. **Modify Variables:**

- Open the JavaScript file where the variables are defined.
- Adjust the variables to your desired settings.
- Save the file.

2. **View Wallpaper:**

- Refresh the index.html page in your browser to see the updated wallpaper design.
