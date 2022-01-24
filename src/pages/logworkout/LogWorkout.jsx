import "./logWorkout.css"

export default function LogWorkout() {
    return (
        <div className="logWorkout">
            <img src="./squat.jpg" alt="" className="logWorkoutImg"/>
            <form action="" className="logWorkoutForm">
                <div className="logWorkoutFormGroup">
                    <label htmlFor="fileInput"><i className="logWorkoutIcon fas fa-folder-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Name this workout" className="logWorkoutInput" autoFocus={true}/>
                </div>
                <div className="logWorkoutFormGroup">
                    <textarea placeholder="How was your workout today?" type="text" className="logWorkoutInput logWorkoutText"></textarea>
                </div>
                <button className="logWorkoutSubmit">Log Workout</button>
            </form>
        </div>
    )
}
