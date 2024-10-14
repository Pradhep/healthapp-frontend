import  { useState } from 'react';
import ApiRoutes from '../utils/ApiRoutes.jsx'
import AxiosService from '../utils/AxiosService.jsx';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Exercises = () => {

  const userId = sessionStorage.getItem('loginuserId');

  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    distance: '',
    calburned: ''
  });
  let navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formDataWithUser = {
    ...formData, 
    userId,      
  };

  const handleSubmit = async()=>{
    try{
      //let {message} = await AxiosService.post(ApiRoutes.CREATE_EXS.path,{formData})
      let {message} = await AxiosService.post(ApiRoutes.CREATE_EXS.path,{formDataWithUser},{authenticate:ApiRoutes.CREATE_EXS.auth})
      toast.success(message)

      // Delay navigation by a short timeout to ensure toast is shown
      setTimeout(() => {
        navigate('/Exercises');
      }, 1000); // 1 second delay

      setFormData({
        name: '',
        duration: '',
        distance: '',
        calburned: ''
      });
    }
    catch(error){
      toast.error(error.message || "Internal Server Error")
    }
  }

  return (
    <section className="section main-section">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        {/* Edit Profile */}
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
              <i className="mdi mdi-dumbbell"></i>
              </span>
              Log Exercise
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Exercise Name</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input  placeholder = "Enter Name of the Exercise"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Duration</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input  placeholder = "Enter Duration in minutes" type="number" name="duration" value={formData.duration} onChange={handleInputChange}
                        className="input" required /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Distance</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input placeholder = "Enter Distance in meters" type="number" name="distance" value={formData.distance} onChange={handleInputChange}
                        className="input" required /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Calories Burned</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input  placeholder = "Enter Calories Burned" type="number" name="calburned" value={formData.calburned} onChange={handleInputChange}
                        className="input" required /> 
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="field"> 
                <div className="control">
                  <button type="button" className="button green" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Exercises;
