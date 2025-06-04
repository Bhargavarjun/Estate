import React from 'react';
import { Estate } from '../Estate'; 
import { Link } from 'react-router-dom';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaLandmark, FaChartArea } from "react-icons/fa";

const luxury = () => {
  return (
    <section id="luxary">
      <h1>Top Luxury Estates</h1>
      <p>
        Luxury real estate land offers exclusive, high-value properties in prime locations, featuring breathtaking views, premium amenities, and immense investment potential. These estates provide privacy, elegance, and a prestigious lifestyle, catering to affluent buyers seeking sophistication and exclusivity.
      </p>
      <div className="Estate_container">
        {Estate.slice(0, 3).map((element) => (
          <Link key={element.id} to={`/estate/${element.id}`}>
            <img src={element.image} alt={element.name} />
            <div className="location_text"> 
              <span>{element.location}</span>
              <span><RxDot /></span>
              <span>{element.category}</span>
            </div>
            <div className="title_text">{element.name}</div>
            <div className="specifications">
              <div className="Spec">
                <IoIosPeople />
                <span>{element.guest}</span>
                Guest
              </div>
              <div className="Spec">
                <FaLandmark />
                <span>{element.land}</span>
                Land
              </div>
              <div className="Spec">
                <FaChartArea />
                <span>{element.area}</span>
                Area
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default luxury;
