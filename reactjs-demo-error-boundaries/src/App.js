import Demo from "./components/Demo";
import ErrorDemoBoundary from "./components/ErrorDemoBoundary";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <ErrorDemoBoundary>
        <Demo />
      </ErrorDemoBoundary>      
    </div>
  );
}

export default App;
