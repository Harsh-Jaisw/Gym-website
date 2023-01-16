import React from "react";
import ActivityStyle from "./Activity.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Data2 } from "../../src/Atom/atom";

export default function Activity() {
  const [sub, setsub] = useRecoilState(Data2);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
          justifyContent: "center",
          marginBottom: "1em",
        }}
      >
        <p>Activit 20 </p>
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1em",
          }}
          to="/"
        >
          <button onClick={setsub(true)}>Home</button>
        </Link>
        <div className={ActivityStyle.grid}>
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
          <img
            width="300em"
            height="300em"
            src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          />
        </div>
        <Link to="/">
          <button onClick={setsub(true)}>Home</button>
        </Link>
      </div>
    </>
  );
}
