#version 150
#define PI 3.14159265359

uniform vec3  iResolution;           // image/buffer          The viewport resolution (z is pixel aspect ratio, usually 1.0)
uniform float iTime;                 // image/sound/buffer    Current time in seconds

float squareFx(float size, vec2 uv){
    
    float blX = smoothstep(0.0, size, uv.x);
    float blY = smoothstep(0.0, size, uv.y);

    float trX = smoothstep(0.0, size, 1.0 - uv.x);
    float trY = smoothstep(0.0, size, 1.0 - uv.y);

    float pct = blX * blY * trX * trY;

    return pct;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    float pct = squareFx(0.1, uv);

    color = vec3(pct);

	fragColor = vec4(color,1.0);
}

/*
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    float size = 0.1;
    
    float blX = floor(uv.x / size);
    float blY = floor(uv.y / size);

    float trX = floor( (1.0 - uv.x) / size );
    float trY = floor( (1.0 - uv.y) / size );

    float pct = blX * blY * trX * trY;

    color = vec3(pct);

	fragColor = vec4(color,1.0);
}


*/

/*
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    float blX = smoothstep(0.0, 0.1, uv.x);
    float blY = smoothstep(0.0, 0.1, uv.y);

    float trX = smoothstep(0.0, 0.1, 1.0 - uv.x);
    float trY = smoothstep(0.0, 0.1, 1.0 - uv.y);

    float pct = blX * blY * trX * trY;

    color = vec3(pct);

	fragColor = vec4(color,1.0);
}


*/

/*
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    vec2 bl = step(vec2(0.1), uv);
    float pct = bl.x * bl.y;

    vec2 tr = step(vec2(0.1), 1.0 - uv);
    pct *= tr.x * tr.y;

    color = vec3(pct);

	fragColor = vec4(color,1.0);
}

*/

/*
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    float left = step(0.1, uv.x);
    float bottom = step(0.1, uv.y);

    color = vec3(left * bottom);

	fragColor = vec4(color,1.0);
}

*/