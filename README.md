# GLSL Shader in Processing

This guide provides instructions on how to run a GLSL shader within the Processing environment. The shader creates a dynamic visual effect by rendering a square on the screen using GLSL (OpenGL Shading Language).

## Prerequisites

- Processing 3.x or newer: Download and install Processing from https://processing.org/download/.
- Understanding of GLSL and Processing basics.

## File Structure

- `YourSketchName.pde`: The main Processing sketch file.
- `shader.frag`: The fragment shader file written in GLSL.

## How to Run

1. **Open Processing**: Launch the Processing IDE on your computer.
2. **Create a New Sketch**: Go to `File > New` to create a new sketch.
3. **Add Shader File**: Save your GLSL code in a file named `shader.frag` in the same directory as your Processing sketch.
4. **Write Processing Code**: In the Processing sketch, write the necessary code to load and apply the shader. Here's a basic example to get you started:
5. **download Pixel Flow Library**: In the processing sketch, Library download pixel flow

```java

import com.thomasdiewald.pixelflow.java.DwPixelFlow;
import com.thomasdiewald.pixelflow.java.imageprocessing.DwShadertoy;

DwPixelFlow context;
DwShadertoy toy;

public void settings() {
    size(1280, 720, P2D);
    smooth(0);
}

public void setup() {
    surface.setResizable(true);
    context = new DwPixelFlow(this);
    context.print();
    context.printGL();
    toy = new DwShadertoy(context, "data/main.frag");
    frameRate(60);
}

public void draw() {
    
    toy.apply(this.g);
    
    String txt_fps = String.format(getClass().getSimpleName() + "   [size %d/%d]   [frame %d]   [fps %6.2f]", width, height, frameCount, frameRate);
    surface.setTitle(txt_fps);
}
```

## Run the Sketch
Press the 'Run' button in the Processing IDE or press `CTRL + R` to run your sketch. The shader will be applied to the rectangle drawn on the screen.

## Customizing the Shader

You can modify `shader.frag` to change the visual effects. After making changes, rerun the Processing sketch to see the updated results.

## Troubleshooting

If the shader does not compile or the expected effect does not appear, check the console in Processing for error messages. GLSL syntax or runtime errors will be displayed there.

## Resources

- For more information on GLSL: [https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL))
- For more details on using shaders in Processing: [https://processing.org/tutorials/pshader/](https://processing.org/tutorials/pshader/)

