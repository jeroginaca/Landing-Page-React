import React from "react";

const Card = () => {
    return(
        <>
           <div className="col-md card text-center m-3">
          <div className="card-body">
            <img className="img-fluid py-3" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos similique doloribus voluptatem ad quo voluptate quaerat! Eaque, eos labore.</p>
          <div className="border-top border-secondary p-3">
          <button className="btn btn-primary">Find Out More!</button>
          </div>
          </div>
        </div>
        </>

    );
}

export default Card