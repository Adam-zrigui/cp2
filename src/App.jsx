import './App.css';
import ProfilePic from './components/auth/ProfilePic';
import FN from './components/auth/Rename';
import Location from './components/auth/Location';
function App() {
  return (
<>
<div className="flex">
  <div className="wrap">
  <ProfilePic /> 
    <hr  />
    <div className="down">
      <FN />
      <Location />
    </div>
  </div>
</div>
</>
  );
}

export default App;
