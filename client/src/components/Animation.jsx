import React, { useRef } from "react";
import Matter from "matter-js";

import {
  Engine,
  Render,
  Mouse,
  MouseConstraint,
  World,
  Composite,
  Composites,
  Bodies,
  Body,
  Events,
} from "matter-js";

const Animation = () => {
  const canv = () => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showVelocity: true,
      },
    });
    var body = Bodies.rectangle(100, 100, 60, 60);
    body.render.fillStyle = "red"; // Set the fill style to red

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    Composite.add(world, [
      // falling blocks
      body,
      Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
      Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
      Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    // const handleCanvas = () => {
    //   return {
    //     engine: engine,
    //     runner: runner,
    //     render: render,
    //     canvas: render.canvas,
    //     stop: function () {
    //       Matter.Render.stop(render);
    //       Matter.Runner.stop(runner);
    //     },
    //   };
    // };
  };

  const gause = () => {
    ///////////////////////////////////////////////// Describe Key Constants
    // The key constants below allow for easier "tweaking"
    // Where possible, consants are set relative to more fundamental constants
    // Set key defaults for the applet
    // Key dimensions
    const width = 1000;
    const height = 1000;

    const xStart = width / 2;
    const yStart = 100;

    const rows = 18;

    const ballRadius = 10;
    const pegGap = 4 * ballRadius;
    const pegRadius = 0.2 * ballRadius;
    let xGap = pegGap;
    // Isometric
    //let yGap = Math.sin(Math.PI / 3) * xGap;
    // Quincunx
    let yGap = 0.5 * xGap;

    const maxBalls = 150;

    // Physics Constants
    const restitution = 0.6;
    const friction = 0.05;
    const frictionAir = 0.06;
    const frictionStatic = 0;
    const slop = 0;
    const gravity = 1;
    const gravitySF = 0.0018;
    const timeScale = 1;

    ///////////////////////////////////////////////// Setup MatterJS
    // 1. setup engine
    let engine = Engine.create();
    engine.timing.timeScale = timeScale;
    Engine.run(engine);

    // 2. setup render
    let render = Render.create({
      element: document.body,
      engine: engine,

      options: {
        width,
        height,
        wireframes: false,
        showAngleIndicator: false,
        background: "#fff",
      },
    });
    Render.run(render);

    // 3. get world from engine
    let world = engine.world;
    world.gravity.scale = gravitySF;

    ///////////////////////////////////////////////// Top (above start point): Bucket
    // Create bucket
    const buckettoStartGap = 20;
    const bucketwallLength = 600;
    const bucketwallAngle = Math.PI / 3;
    const bucketOpening = 4 * ballRadius;
    let leftBumper_xpos =
      xStart -
      (bucketwallLength * Math.cos(bucketwallAngle) + bucketOpening) / 2;
    let bumpers_ypos =
      yStart -
      ((bucketwallLength * Math.sin(bucketwallAngle)) / 2 + buckettoStartGap);
    let rightBumper_xpos =
      xStart +
      (bucketwallLength * Math.cos(bucketwallAngle) + bucketOpening) / 2;

    let createTopBucket = () => {
      let leftBumper = Bodies.rectangle(
        leftBumper_xpos,
        bumpers_ypos,
        bucketwallLength,
        5,
        {
          restitution,
          friction: 0,
          frictionStatic: 0,
          isStatic: true,
        }
      );
      Body.rotate(leftBumper, bucketwallAngle);

      let rightBumper = Bodies.rectangle(
        rightBumper_xpos,
        bumpers_ypos,
        bucketwallLength,
        5,
        {
          restitution,
          friction: 0,
          isStatic: true,
        }
      );
      Body.rotate(rightBumper, -bucketwallAngle);

      World.add(world, [leftBumper, rightBumper]);
    };
    createTopBucket();

    ///////////////////////////////////////////////// Middle (immediately below start point): Pegs
    const starttoPegsGap = 10;
    const rowOffset = 5;

    let createPegs = () => {
      for (let row = 0 + rowOffset; row < rows + rowOffset; row++) {
        let yOffset = yGap * (row - rowOffset) + starttoPegsGap;
        let xRowOffset = (xGap * row - xGap) / 2;
        //each peg
        for (let j = 0; j < row; j++) {
          let xOffset = xGap * j;
          let peg = Bodies.circle(
            xStart - xRowOffset + xOffset,
            yStart + yOffset,
            pegRadius,
            {
              restitution,
              friction,
              isStatic: true,
            }
          );
          World.add(world, peg);
        }
      }
    };
    createPegs();

    ///////////////////////////////////////////////// Base: Floor and Partitions
    const pegstoBaseGap = yGap;
    const floorHeight = 20;
    let floor = Bodies.rectangle(
      xStart,
      height - floorHeight / 2,
      width - 4,
      floorHeight,
      {
        restitution: 0,
        isStatic: true,
      }
    );
    World.add(world, floor);

    let wallHeight =
      height - (yStart + starttoPegsGap + rows * yGap + pegstoBaseGap);
    const createPartitionSet = () => {
      for (let i = 0; i < rows + rowOffset + 1; i++) {
        let partition = Bodies.rectangle(
          xStart - ((rows + rowOffset - 1) * pegGap) / 2 + (i - 0.5) * pegGap,
          height - (floorHeight + wallHeight / 2),
          4,
          wallHeight,
          {
            isStatic: true,
          }
        );
        World.add(world, partition);
      }
    };
    createPartitionSet();

    ///////////////////////////////////////////////// Balls...
    // Generate randomness
    let randomPosNeg = () => {
      let random = Math.sin(2 * Math.PI * Math.random());
      // Add some skey for better bell curve
      return Math.pow(random, 3);
    };
    let vx = () => {
      return 0.3 * randomPosNeg();
    };
    // let vx = 1

    // Define Balls
    let addBall = (x, y) => {
      let ball = Bodies.circle(x, y, ballRadius, {
        restitution,
        friction,
        frictionAir,
        slop,
        isStatic: false,
        label: "ball",
      });
      Body.setVelocity(ball, { x: vx(), y: 0 });
      Body.setAngularVelocity(ball, randomPosNeg() / 8);
      World.add(world, ball);
    };
    let createBalls = (numberBalls) => {
      for (let i = 0; i < numberBalls; i++) {
        addBall(
          xStart + randomPosNeg() * numberBalls,
          yStart - 300 - i * ballRadius
        );
        //addBall(xStart, yStart-100)
      }
    };
    createBalls(maxBalls);

    ///////////////////////////////////////////////// Time controlled functions

    // const Interval = setInterval(() => {
    //   addBall(xStart, yStart);
    //   // as a precaution remove plinkos from world.bodies if the array surpasses a certain threshold
    //   const existingBalls = world.bodies.filter(body => body.label === "ball");
    //   if (existingBalls.length > 200) {
    //     World.remove(world, existingBalls[0]);
    //   }
    // }, 1200);

    let existingBalls = () => {
      return world.bodies.filter((body) => body.label === "ball");
    };

    // Balls suffer compression.
    // As a temporary workaround make balls in buckets static
    // This will also have benefit of reducing engine load
    const makeStaticInterval = setInterval(() => {
      // let existingBalls = world.bodies.filter((body) => body.label === "ball");
      existingBalls().forEach(function (ball) {
        let ballHeight = ball.position.y;
        let ballSpeed = ball.speed;
        let minHeight = height - (floorHeight + wallHeight);
        if (ballHeight > minHeight && ballSpeed < 1) {
          Body.set(ball, { isStatic: true });
        }
      });
    }, 1200);

    // Temporary Mopup as above
    const makeStaticMopUp = setTimeout(() => {
      existingBalls().forEach(function (ball) {
        let ballHeight = ball.position.y;
        let ballSpeed = ball.speed;
        let minHeight = height - (floorHeight + wallHeight);
        if (ballHeight > minHeight && ballSpeed < 1) {
          Body.set(ball, { isStatic: true });
        }
      });
    }, 20000);

    // Recyclcle Balls
    const recycleBallsInterval = setInterval(() => {
      if (existingBalls().length > 200) {
        World.remove(world, existingBalls[0]);
      }
    }, 1200);

    ///////////////////////////////////////////////// Mouse Control
    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      render: { visible: false },
    });
    World.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", (event) => {
      addBall(mouse.position.x, mouse.position.y);
    });

    Matter.Composite.remove(world);
  };

  const remove = () => {
    var canvas = document.querySelector("canvas");
    if (canvas) {
      // Get the parent element of the <canvas> element
      var parent = canvas.parentNode;

      // Remove the <canvas> element from the DOM
      parent.removeChild(canvas);
    }
  };

  const canvasRef = useRef();
  console.log(canvasRef);

  // Use the ref to remove the <canvas> element from the DOM

  return (
    <div>
      <button onClick={canv}>start animation</button>
      <button onClick={remove}>remove</button>
      Animation
    </div>
  );
};

export default Animation;
