import { useState } from 'react';
import '../index.css'
import ApiRoutes from '../utils/ApiRoutes.jsx'
import AxiosService from '../utils/AxiosService.jsx';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/dummypic1.png';

const UserProfile = () => {
  const [formData, setFormData] = useState({
      currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginemail = sessionStorage.getItem('loginemail');
  const userId = sessionStorage.getItem('loginuserId');
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();  
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New Password does not match with Confirm Password');
      return;
    }  
    try {
      const formDataWithUser = {
        ...formData, 
        userId: userId,
        loginemail:loginemail
      };
      let { message } = await AxiosService.post(ApiRoutes.UpdateProfile.path, formDataWithUser, {authenticate: ApiRoutes.UpdateProfile.auth});
      toast.success(message);

      // Delay navigation by a short timeout to ensure toast is shown
      setTimeout(() => {
        navigate('/Profile');
      }, 10000); // 1 second delay

      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
    } else {
        alert(error.message || 'Internal Server Error');
    }
    }
  };
  

  return (
    <section className="section main-section">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        {/* Edit Profile */}
        {/* <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-circle"></i>
              </span>
              Edit Profile
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Avatar</label>
                <div className="field-body">
                  <div className="field file">
                    <label className="upload control">
                      <a className="button blue">Upload</a>
                      <input type="file" />
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="field">
                <label className="label">Name</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    <p className="help">Required. Your name</p>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">E-mail</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    <p className="help">Required. Your e-mail</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="field">
                <div className="control">
                  <button type="submit" className="button green">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}

        {/* Profile */}
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account"></i>
              </span>
              Profile
            </p>
          </header>
          <div className="card-content">
            <div className="image w-48 h-48 mx-auto">
              <img
                src={image}
                alt={loginemail}
                className="rounded-full"
              />
            </div>
            {/* <hr />
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" readOnly value={formData.name} className="input is-static" />
              </div>
            </div>
            <hr /> */}
            <div className="field">
              <label className="label">E-mail</label>
              <div className="control">
                {/* <input type="text" readOnly value={formData.email} className="input is-static" /> */}
                <input type="text" readOnly value={loginemail} className="input is-static" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-lock"></i>
            </span>
            Change Password
          </p>
        </header>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Current password</label>
              <div className="control">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. Your current password</p>
            </div>
            <hr />
            <div className="field">
              <label className="label">New password</label>
              <div className="control">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. New password</p>
            </div>
            <div className="field">
              <label className="label">Confirm password</label>
              <div className="control">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. New password one more time</p>
            </div>
            <hr />
            <div className="field">
              <div className="control">
                <button type="submit" className="button green">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
