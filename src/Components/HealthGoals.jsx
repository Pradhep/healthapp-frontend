import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import '../goal.css';

const HealthGoals = () => {
  const [goals, setGoals] = useState({
    dailySteps: '',
    weeklyWorkouts: '',
    calorieIntake: ''
  });

  const [progress, setProgress] = useState({
    dailyStepsProgress: 0,
    weeklyWorkoutsProgress: 0,
    calorieIntakeProgress: 0
  });

  const [log, setLog] = useState({
    stepsLogged: '',
    workoutsLogged: '',
    caloriesLogged: ''
  });

  const [isSet, setIsSet] = useState({
    dailySteps: false,
    weeklyWorkouts: false,
    calorieIntake: false
  });

  // Handle input change for setting goals
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoals({
      ...goals,
      [name]: value,
    });
  };

  // Handle log input change
  const handleLogChange = (e) => {
    const { name, value } = e.target;
    setLog({
      ...log,
      [name]: value,
    });
  };

  // Set goal and disable editing
  const handleSetGoal = (goalName) => {
    setIsSet({
      ...isSet,
      [goalName]: true,
    });
    toast.success(`${goalName} goal set successfully!`);
  };

  // Log progress and accumulate value
  const handleLogProgress = (logName, progressName, goalName) => {
    const currentLogged = parseInt(log[logName] || 0); // The current log value (e.g., 50 steps)
    const currentProgress = parseInt(progress[progressName] || 0); // The current progress (e.g., 70/1000)
    const newProgress = currentProgress + currentLogged; // Accumulate progress
    const goalValue = parseInt(goals[goalName]); // The goal value (e.g., 1000 steps)

    // Update progress state
    setProgress({
      ...progress,
      [progressName]: newProgress,
    });

    // Clear the log input
    setLog({
      ...log,
      [logName]: '',
    });

    // Check if the goal has been reached or exceeded
    if (newProgress >= goalValue) {
      toast.success(`Congratulations! You completed your ${goalName} goal!`);
    } else {
      toast.success(`${logName} progress logged successfully!`);
    }
  };

  return (
    <div className="health-goals">
      <Toaster position="top-right" reverseOrder={false} />
      <h2>Set Your Health and Wellness Goals</h2>
      
      {/* Daily Steps */}
      <div className="field">
        <label htmlFor="dailySteps" className="label">Daily Steps Goal</label>
        <input
          type="number"
          name="dailySteps"
          id="dailySteps"
          value={goals.dailySteps}
          onChange={handleInputChange}
          className="input"
          disabled={isSet.dailySteps} // Disable editing after setting goal
          required
        />
        <button 
          type="button" 
          className="button is-primary ml-2"
          onClick={() => handleSetGoal('dailySteps')}
          disabled={isSet.dailySteps} // Disable button after goal is set
        >
          Set
        </button>
      </div>

      {/* Log Daily Steps */}
      <div className="field">
        <label htmlFor="stepsLogged" className="label">Steps Logged Today</label>
        <input
          type="number"
          name="stepsLogged"
          id="stepsLogged"
          value={log.stepsLogged}
          onChange={handleLogChange}
          className="input"
          required
        />
        <button 
          type="button" 
          className="button is-success ml-2"
          onClick={() => handleLogProgress('stepsLogged', 'dailyStepsProgress', 'dailySteps')}
        >
          Log
        </button>
        <p>{progress.dailyStepsProgress}/{goals.dailySteps} steps completed</p>
      </div>

      {/* Weekly Workouts */}
      <div className="field">
        <label htmlFor="weeklyWorkouts" className="label">Weekly Workout Sessions Goal</label>
        <input
          type="number"
          name="weeklyWorkouts"
          id="weeklyWorkouts"
          value={goals.weeklyWorkouts}
          onChange={handleInputChange}
          className="input"
          disabled={isSet.weeklyWorkouts} // Disable editing after setting goal
          required
        />
        <button 
          type="button" 
          className="button is-primary ml-2"
          onClick={() => handleSetGoal('weeklyWorkouts')}
          disabled={isSet.weeklyWorkouts} // Disable button after goal is set
        >
          Set
        </button>
      </div>

      {/* Log Weekly Workouts */}
      <div className="field">
        <label htmlFor="workoutsLogged" className="label">Workout Sessions Logged</label>
        <input
          type="number"
          name="workoutsLogged"
          id="workoutsLogged"
          value={log.workoutsLogged}
          onChange={handleLogChange}
          className="input"
          required
        />
        <button 
          type="button" 
          className="button is-success ml-2"
          onClick={() => handleLogProgress('workoutsLogged', 'weeklyWorkoutsProgress', 'weeklyWorkouts')}
        >
          Log
        </button>
        <p>{progress.weeklyWorkoutsProgress}/{goals.weeklyWorkouts} workout sessions completed</p>
      </div>

      {/* Calorie Intake */}
      <div className="field">
        <label htmlFor="calorieIntake" className="label">Calorie Intake Goal (per day)</label>
        <input
          type="number"
          name="calorieIntake"
          id="calorieIntake"
          value={goals.calorieIntake}
          onChange={handleInputChange}
          className="input"
          disabled={isSet.calorieIntake} // Disable editing after setting goal
          required
        />
        <button 
          type="button" 
          className="button is-primary ml-2"
          onClick={() => handleSetGoal('calorieIntake')}
          disabled={isSet.calorieIntake} // Disable button after goal is set
        >
          Set
        </button>
      </div>

      {/* Log Calorie Intake */}
      <div className="field">
        <label htmlFor="caloriesLogged" className="label">Calories Logged Today</label>
        <input
          type="number"
          name="caloriesLogged"
          id="caloriesLogged"
          value={log.caloriesLogged}
          onChange={handleLogChange}
          className="input"
          required
        />
        <button 
          type="button" 
          className="button is-success ml-2"
          onClick={() => handleLogProgress('caloriesLogged', 'calorieIntakeProgress', 'calorieIntake')}
        >
          Log
        </button>
        <p>{progress.calorieIntakeProgress}/{goals.calorieIntake} calories consumed</p>
      </div>
    </div>
  );
};

export default HealthGoals;
