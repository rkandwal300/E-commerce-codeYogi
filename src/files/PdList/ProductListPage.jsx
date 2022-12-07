import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "./ProductList";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Error from "../Error";
import { useContext } from "react";
import Loading from "../Loading";
import { products } from "../../Api/Sort-Search";

let ProductListPage = () => {
  const { product, page } = useContext(products);


  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams);


  if (product.data) {
    let data = product.data;


    let Pagination = Array.from({ length: product.meta.last_page });

    let inputt = (event) => {
      setSearchParams({ ...params, query: event.target.value, page: 1 });
    };

    let select = (event) => {
      setSearchParams({ ...params, sort: event.target.value });
    };

    return data ? (
      <>
        <div className="h-fit w-full bg-slate-100  ">
          <div className="  w-[94%] ml-[3%] rounded-xl shadow-md shadow-black mt-[50px] bg-white  flex justify-center flex-wrap  ">
            <div className="  w-full   flex  justify-end ">
              <div className="h-[100px] mt-[20px]  w-[300px]  flex  flex-col justify-center items-start mr-[30px] sm:mr-[120px] md:mr-[30px]  ">
                <input
                  className="h-[30px] w-[240px] rounded-lg text-center tracking-wide text-md shadow-lg shadow-slate-300   active:bg-slate-300    border-2 border-slate-500 focus:border-indigo-500    "
                  type="text"
                  placeholder="Search Here....."
                  autoComplete="off"
                  onChange={inputt}
                />

                <select
                  className="h-[30px] w-[240px]  rounded-lg border-2 border-slate-500  px-[10px] text-md  mt-4 "
                  onChange={select}
                >
                  <option defaultValue="default"> Default Sorting </option>
                  <option value="high"> High To Low </option>
                  <option value="low"> Low To High </option>
                  <option value="name"> Sort By Name </option>
                </select>
              </div>
            </div>
            {data.length > 0 && <ProductList props={data} />}
            {data.length == 0 && <Loading />} {/*// no products*/}
            <div className="w-full px-10 mb-10 flex justify-start items-center">
              <div className="  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white text-red-400 hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2 ">
                {" "}
                {"<-"}
              </div>
              {/* to={'?page='+index +1}   */}
              {Pagination.map((val, index) => {
                const pageNo = index + 1;
                return (
                  <Link
                    to={"?" + new URLSearchParams({ ...params, page: pageNo })}
                    key={pageNo}
                    className={
                      "  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white  hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2  " +
                      (pageNo == page
                        ? " bg-red-400  text-white"
                        : "   text-red-400  bg-white")
                    }
                  >
                    <div>{index + 1}</div>
                  </Link>
                );
              })}

              <div className="  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white text-red-400 hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2  ">
                {" "}
                {"->"}{" "}
              </div>
            </div>
          </div>

          <div className="h-[70px] flex bg-gray-500 w-full mt-[150px]  py-[20px]  ">
            <div className="flex justify-between  w-[70%] mx-[15%]  ">
              <div className="text-slate-50  "> COPYRIGHT @ | CODEYOGI </div>

              <div className="text-slate-50   ] ">POWERED BY CODEYOGI </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <Loading />
    );
  } else {
    <Loading />;
  }
};

export default ProductListPage;
