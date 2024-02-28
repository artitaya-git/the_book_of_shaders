#version 150
#define PI 3.14159265359

uniform vec3  iResolution;           // image/buffer          The viewport resolution (z is pixel aspect ratio, usually 1.0)
uniform float iTime;                 // image/sound/buffer    Current time in seconds


vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    vec3 pct = vec3(uv.x);

    //pct.r = smoothstep(0.0,1.0, uv.x);
    //pct.g = sin(uv.x*PI);
    pct.b = pow(uv.x,0.5);

    color = mix(colorA, colorB, pct);
    // The multiplication of left*bottom will be similar to the logical AND.
    color = mix(color,vec3(1.0,0.0,0.0),plot(uv,pct.r));
    color = mix(color,vec3(0.0,1.0,0.0),plot(uv,pct.g));
    color = mix(color,vec3(0.0,0.0,1.0),plot(uv,pct.b));

	fragColor = vec4(color,1.0);
}

/*
    Mix colors
vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    vec3 color = vec3(0.0);

    float pct = abs(sin(iTime));

    // The multiplication of left*bottom will be similar to the logical AND.
    color = mix(colorA, colorB, pct);

	fragColor = vec4(color,1.0);
}

*/