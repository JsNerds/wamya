import React from "react";
import DeliveryManItem from "../DeliveryManItem";

export default function RecommendedDriverForm(props) {
  return (
    <>
    <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
        Choose Your driver
      </h2>
      <div className="row mt-4">
        <div className="col-md-12">
          {props.driverList?.map((driver, index) => {
            return (
              <DeliveryManItem
                key={driver._id}
                driver={driver}
                chosen={() => {
                  props.chooseDriver(driver._id);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
