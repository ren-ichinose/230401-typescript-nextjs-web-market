import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/login`,
        {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );
      const { message, accessToken } = await res.json();
      localStorage.setItem('accesToken', accessToken);
    } catch (error) {
      alert('ログインができませんでした');
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          required
          value={password}
          onChange={handleChange}
        />
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default Login;
