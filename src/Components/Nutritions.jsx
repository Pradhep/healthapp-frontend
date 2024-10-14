import { useState } from 'react';
import ApiRoutes from '../utils/ApiRoutes.jsx'
import AxiosService from '../utils/AxiosService.jsx';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Nutritions = () => {

  const userId = sessionStorage.getItem('loginuserId');

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    micro: '',
    macro: ''
  });

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
      let {message} = await AxiosService.post(ApiRoutes.CREATE_NTS.path,{formDataWithUser},{authenticate:ApiRoutes.CREATE_NTS.auth})
      toast.success(message)
       // Delay navigation by a short timeout to ensure toast is shown
       setTimeout(() => {
        navigate('/Nutritions');
      }, 1000); // 1 second delay

      setFormData({
        name: '',
        calories: '',
        micro: '',
        macro: ''
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
              <i className="mdi mdi-pizza"></i>
              </span>
              Log Food Intake
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Food Name</label>
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
                <label className="label">Calories</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input  placeholder = "Enter Calories" type="number" name="calories" value={formData.calories} onChange={handleInputChange}
                        className="input" required /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Micro Nutrients</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input placeholder = "Enter Micro nutrients" type="number" name="micro" value={formData.micro} onChange={handleInputChange}
                        className="input" required /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Macro Nutrients</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input  placeholder = "Enter Macro nutrients" type="number" name="macro" value={formData.macro} onChange={handleInputChange}
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

export default Nutritions;
