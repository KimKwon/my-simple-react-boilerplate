import { useHistory } from 'react-router';

function MainPage() {
  const history = useHistory();

  const pushToDetail = () => history.push('/detail');
  
  return (
    <main className="container">
      <div className="header">Welcome, 👋</div>
      <div className="content">This is React Boilerplate</div>
      <div className="info">
        <button type="button" onClick={pushToDetail}>Features &rarr;</button>
      </div>
    </main>
  );
}

export default MainPage;
