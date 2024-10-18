import { useEffect } from "react";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutsStore from "../stores/useWorkoutsStore";

const Home = () => {
  // const { workouts, dispatch } = useWorkoutsContext() //
  const { workouts, setWorkouts } = useWorkoutsStore();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      // console.log(json)

      if (response.ok) {
        // dispatch({type: 'SET_WORKOUTS', payload: json}) //
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, [setWorkouts]); //

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
