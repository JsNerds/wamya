import React from "react";
import Sectitle from "../../componentsFront/Title/Sectitle";
import PackageItem from "../../components/front/PackageItem";
const PackageList = (props) => {
  return (
    <section className="">
      <div className="container mt-5">
        {props.packagesList?.map((p, index) => {
            return (
              <div key={index} className="row">
                <div className="col-lg-12 col-sm-8">
                  <PackageItem PackageImage="team_01.jpg" pack={p} />
                </div>
              </div>
            );
        })}
      </div>
    </section>
  );
};
export default PackageList;
