import React from "react";
import ActivityStyle1 from "./Activity1.module.css";
import { Link } from "react-router-dom";
import { Data3 } from "../../src/Atom/atom";
import { useRecoilState } from "recoil";

export default function Activity1() {
  const [sub, setsub] = useRecoilState(Data3);

  return (
    <>
      <p>Activit 50 </p>
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
      <div className={ActivityStyle1.grid}>
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
        />
      </div>
      <Link to="/">
        <button onClick={setsub(true)}>Home</button>
      </Link>
    </>
  );
}
