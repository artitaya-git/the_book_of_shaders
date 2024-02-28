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