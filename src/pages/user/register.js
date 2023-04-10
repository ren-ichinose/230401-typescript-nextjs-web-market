import { useState } from 'react';

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = newUser;

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/register`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        }
      );
      const { message } = await res.json();
      alert(message);
    } catch (error) {
      alert('ユーザー登録に失敗しました');
    }
  };

  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          requireds
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
        <button>登録</button>
      </form>
    </div>
  );
};

export default Register;
