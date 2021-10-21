import { useHistory } from 'react-router-dom';

function DetailPage() {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="container">
      <div className="header">
        Dependencies 🔥
      </div>
      <div className="content">
        <ul>
          <li>React</li>
          <li>webpack</li>
          <li>Babel</li>
          <li>Sass</li>
          <li>ESLint</li>
          <li>Prettier</li>
        </ul>
      </div>
      <div className="info">
        <button type="butotn" onClick={goBack}>Main &larr;</button>
      </div>
    </div>
  );
}

export default DetailPage;
