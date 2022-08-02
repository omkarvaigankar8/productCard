import ClipLoader from "react-spinners/RingLoader";


function Loader({loading}) {

  let color = "#ffffff";
  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={loading}   size={150} />
    </div>
  );
}

export default Loader;