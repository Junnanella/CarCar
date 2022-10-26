import "./index.css";

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <img className="mainpageImage" src="/homePageImage.png" alt="CarCar image" />
      {/* Image by macrovector on Freepik */}
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
  );
}

export default MainPage;
