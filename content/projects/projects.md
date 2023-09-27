---
title: Projects
description: 'blog description'
published: true
---

# Here are some of my projects!

### Procedural Terrain Generator

<img src="assets/images/terrain.png" class="project-image"/>

An infinite procedural generated landscape.

A small demo I made on my spare time during the first semester of 2023 using Typescript, ThreeJs and WebGl. I wrote the shaders for the terrain and the sky and implemented the [Marching Cubes Algorithm](https://en.wikipedia.org/wiki/Marching_cubes) to generate the geometry. To improve the generation time, I learned how to use web workers to parallelize the generation of the terrain chunks.

I used layered noise to create a height map to describe the landscape, however, I could've used a SDF to describe it, and that would allow me to have caves and ridges. 

- **Code:** [Github](https://github.com/mcavazotti/terrain-generator)
- **Demo:** [Playground](playground/terrain)

### Ray Tracer

<img src="assets/images/rt.png"  class="project-image"/>

Implementations of ray tracers in C++ that I made between 2020 and 2021, based on the [Ray Tracing in One Weekend Series](https://raytracing.github.io/).

I parallelized some of the ray tracers using OpenMp and Cuda. It was more of a guided learning experience than anything else.

- **Code:** [Github](https://github.com/mcavazotti/Ray-Tracing)

### 2D Planets

This was one of my first experiments with HTML Canvas back in 2021-2022. I implemented a simple 2D interactive simulation of planets. I first implemented it in vanilla Javascript, later I refactored it to use Typescript.

- **Code:** [Github](https://github.com/mcavazotti/planets)
- **Demo:** [Playground](playground/planets)

### Maze Solver in Cuda

I had to implement an algorithm in Cuda for an CS school assignment in 2021. I chose to implement the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm) using concepts from [this article](https://userweb.cs.txstate.edu/~mb92/papers/gpgpu13.pdf). I also wrote the same algorithm in sequential C++ (to compare against the parallel version) and a maze maker based on BFS, also in C++.

- **Parallel Maze Solver:** [Github](https://github.com/mcavazotti/maze-solver-cuda)
- **Sequential Maze Solver:** [Github](https://github.com/mcavazotti/maze-solver) (instructions on how to use the programs are here)
- **Maze Maker:** [Github](https://github.com/mcavazotti/maze-maker)