import userData from './public/data/t_pa.js'

function App(props) {
  const [title, setTitle] = React.useState("React App");

  React.useEffect(() => {
    console.log("App mounted");
    console.log(userData);
  }, []);

  return (
    <div>
      <div onClick={() => setTitle("React App Got Clicked")}>
        <h1 className='text-danger'>{title}</h1>
      </div>
      
      {userData.map((data) => (
        <h1 key={data.clientid}>{data.clientid} = {data.email}</h1>
      ))}
      

    </div>
  );
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
