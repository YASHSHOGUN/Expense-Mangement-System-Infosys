import React, { useState } from 'react';
import './LoginRegister.css';
import { FaRegUser, FaLock, FaRegEnvelope, FaChevronDown } from 'react-icons/fa'; // Import FaUserTag for the role icon

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [role, setRole] = useState('none'); // State for managing role selection

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value); // Update role state when selection changes
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaRegUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget Password?</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <a href="#" onClick={registerLink}>
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaRegUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <FaRegEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        {/* Role selection with an icon */}
                        <select
                            id="role"
                            name="role"
                            className="input-box role_input"
                            value={role}
                            onChange={handleRoleChange}
                            required
                        >
                             <option value="">
                                 Role
                            </option>
                            <option className="role_value" value="admin">
                                Admin
                            </option>
                            <option className="role_value" value="user">
                                User
                            </option>
                        </select>
                        {/* Icon for role selection */}
                        <FaChevronDown className="icon" /> 
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            I agree to the terms & conditions
                        </label>
                    </div>

                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>
                            Already have an account?{' '}
                            <a href="#" onClick={loginLink}>
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
