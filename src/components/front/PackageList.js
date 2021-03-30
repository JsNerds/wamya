import React from 'react';
import Sectitle from '../../componentsFront/Title/Sectitle';
import PackageItem from '../../components/front/PackageItem';
const PackageList = () => {
  return (
    <section className="">
      <div className="container mt-5">
        {/**  <Sectitle sClass="sec_title text-center mb_70" Title="My packages" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney!"/>*/}
        <div className="row">
          <div className="col-lg-12 col-sm-8">
            <PackageItem
              PackageImage="team_01.jpg"
              memberN="Phillip Anthropy"
              memberd="web designer"
            />
          </div>
          <div className="col-lg-12 col-sm-8">
            <PackageItem
              PackageImage="team_02.jpg"
              memberN="Gordon Norman"
              memberd="UI/UX designer"
            />
          </div>
          <div className="col-lg-12 col-sm-8">
            <PackageItem
              PackageImage="team_03.jpg"
              memberN="Dylan Meringue"
              memberd="web designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PackageList;
