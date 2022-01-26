import "./logWorkout.css";
import * as React from "react";

export default function LogWorkout() {
    const [selected, setSelected] = React.useState("");
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  
  /** Different arrays for different dropdowns */
  const category = [
    "Total Body",
    "Chest",
    "Shoulders",
    "Arms",
    "Core",
    "Legs"
  ];
  const chest = ["", "Bench Press", "Dumbell Bench Press", "Incline Bench Press", "Incline Dumbell Bench Press", "Decline Bench Press", "Chest Press Machine", "Incline Chest Press Machine", "Cable Fly", "Machine Fly", "Dips"];
  const back = ["","Lat Pulldown", "Seated Row", "Bent Over Row", "Cable Pullovers", "Pull-Ups", "Machine High Row", "Dumbbell Row", "Cable Pulldowns"];
  const shoulders = ["","Seated Overhead Press", "Standing Overhead Press", "Shoulder Press Machine", "Cable Shoulder Press", "Dumbell Lateral Raise", "Dumbell Front Raise", "Rear Delt Fly"];
  const arms = ["","Standing Dumbbell Curls", "Seated Dumbbell Curls", "Preacher Curls", "Cable Rope Pulldown", "Overhead Rope Extension", "Skullcrushers", "Dips"];
  const core = ["","Weighted Sit-up", "Hollow Body Rocks", "Russian Twists", "Plank", "Side Planks", "Kettlebell Windmill"];
  const legs = ["","Back Squats", "Leg Press", "Romanian Deadlifts", "Leg Extension", "Leg Curls", "Donkey Calf Raise", "Standing Calf Raise", "Seated Calf Raise"];
  const totalBody = chest.concat(back, shoulders, arms, core, legs);
  
  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
  if (selected === "Total Body") {
    type = totalBody;
  } else if (selected === "Chest") {
    type = chest;
  } else if (selected === "Back") {
    type = back;
  } else if (selected === "Shoulders") {
        type = shoulders;
  } else if (selected === "Arms") {
    type = arms;
  } else if (selected === "Core") {
    type = core;
  } else if (selected === "Legs") {
    type = legs;
  } else if (selected === "Total Body") {
    type = totalBody;
  }
  
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
    return (
        <div className="logWorkout">
            <img src="./squat.jpg" alt="" className="logWorkoutImg"/>
            <form action="" className="logWorkoutForm">
                <div className="logWorkoutFormGroup">
                    <label htmlFor="fileInput"><i className="logWorkoutIcon fas fa-folder-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Name this workout" className="logWorkoutInput" autoFocus={true}/>
                </div>
        <div className="logWorkoutFormExercises">
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <select onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Chest</option>
            <option>Back</option>
            <option>Shoulders</option>
            <option>Arms</option>
            <option>Core</option>
            <option>Legs</option>
            <option>Total Body</option>
          </select>
          </div>





                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>

                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>

                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>

                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>

                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>

                <div className="logWorkoutFormRow">
                <select>
                { options }
                </select>
                 <input placeholder="weight"></input>
                 <input placeholder="sets"></input>
                <input placeholder="reps"></input>
                </div>



                <div className="logWorkoutFormGroup">
                    <textarea placeholder="How was your workout today?" type="text" className="logWorkoutInput logWorkoutText"></textarea>
                </div>

                <button className="logWorkoutSubmit">Log Workout</button>
            </form>
        </div>
    )
}
