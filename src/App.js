import React from "react";
import { BsInstagram } from "react-icons/bs";
import ReactToPrint from "react-to-print";
import converter from "number-to-words";
import moment from "moment/moment";
import { useState, useRef } from "react";
function App() {
  const [billView, setBillView] = useState(false);
  const [BillValues, setBillValues] = useState({
    BillNo: "",
    Name: "",
    Mobile: "",
    Phone: "",
    IMEI1: "",
    IMEI2: "",
    Address: "",
    Total: 0,
    Seal: "",
  });
  const componentRef = useRef();
  return (
    <div>
      {billView == false && (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50 bg-white">
          <div className="flex flex-col space-y-2 w-8/12 md:w-3/12 ">
            <input
              type="number"
              onChange={(e) =>
                setBillValues({ ...BillValues, BillNo: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="Bill No"
            />
            <input
              onChange={(e) =>
                setBillValues({ ...BillValues, Name: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="Customer Name"
            />
            <input
              type="number"
              onChange={(e) =>
                setBillValues({ ...BillValues, Mobile: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="Customer Mobile number"
            />
            <input
              onChange={(e) =>
                setBillValues({ ...BillValues, Phone: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="Phone Model Name"
            />
            <input
              type="number"
              onChange={(e) =>
                setBillValues({ ...BillValues, IMEI1: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="IMEI1"
            />
            <input
              type="number"
              onChange={(e) =>
                setBillValues({ ...BillValues, IMEI2: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="IMEI2"
            />
            <input
              onChange={(e) =>
                setBillValues({ ...BillValues, Address: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none"
              placeholder="Address"
            />
            <div className="flex space-x-3 items-center py-2">
              <h1>Seal:</h1>
              <input
                onChange={(e) =>
                  setBillValues({ ...BillValues, Seal: e.target.checked })
                }
                className="mt-1"
                type="checkbox"
                id="Seal"
                name="Seal"
                value="yes"
              />
            </div>

            <input
              type="number"
              onChange={(e) =>
                setBillValues({ ...BillValues, Total: e.target.value })
              }
              className="border border-gray-500 text-xs py-2 px-1 rounded focus:outline-none "
              placeholder="Total Amount"
            />
            <div className="flex justify-end pt-10 space-x-4">
              <button
                onClick={() => setBillView(true)}
                className="w-24 py-1 px-1 bg-green-500  text-white rounded"
              >
                View Bill
              </button>
              <ReactToPrint
                trigger={() => (
                  <button
                    id="printbutton"
                    className="w-24 py-1 px-1 bg-red-500  text-white rounded"
                  >
                    Print
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </div>
      )}
      <ReactToPrint
        trigger={() => (
          <button
            id="printbutton"
            className="bg-red-500 font-semibold text-sm tracking-wider text-white px-5 py-1 fixed top-2 left-2 rounded-md z-40"
          >
            Print{" "}
          </button>
        )}
        content={() => componentRef.current}
        // pageStyle="@page { size: 3.6in 4.6in      }"
      />
      {/* {billView == true && ( */}
      <div ref={componentRef} className={`p-4 `}>
        <div className="  border-2 border-gray-800 text-xs h-PageHeight flex flex-col justify-between">
          <div>
            <div className="flex p-2  border-gray-500 h-3/5">
              <div className="w-4/12 flex flex-col items-start justify-between">
                <h1 className="font-semibold ">GSTIN: 32BSGPJ3340H1Z4</h1>
                <div className="space-y-3">
                  <h1 className="font-semibold  ">STATE : KERALA</h1>
                  <h1 contenteditable="true" className=" font-semibold">
                    Invoice No. : MH-{BillValues.BillNo}
                  </h1>
                </div>
              </div>
              <div className="w-4/12 flex flex-col items-center space-y-1">
                <img
                  src="/MobilehouseLogo.png"
                  alt="mobile house logo "
                  height="250"
                  width="250"
                />
                <h1 className=" font-semibold">
                  3 Way Junction, Peringottukara
                </h1>
                <h1 className="font-semibold ">Mob : 9072430483</h1>

                <h1 className="flex items-center space-x-2">
                  <BsInstagram className="text-pink-600 text-2xl" />
                  <span>Mobile House</span>
                </h1>
                <h1 className="font-semibold ">
                  GST TAX INVOICE (TYPE - B2C) - CASH SALE
                </h1>
              </div>
              <div className="w-4/12 flex flex-col items-end justify-end space-y-2">
                <h1 className="font-semibold">STATE CODE : 32</h1>
                <h1 className="font-semibold" contenteditable="true">
                  Invoice Date : {moment().format("LL")}
                </h1>
              </div>
            </div>

            <hr className="w-full border border-gray-700"></hr>

            <div className="p-2 space-y-2">
              <h1 className="font-semibold " contenteditable="true">
                Customer : {BillValues.Name}
              </h1>
              <div className="flex space-x-2">
                <h1>Address:</h1>
                <h1 contenteditable="true">{BillValues.Address}</h1>
              </div>
              <h1 contenteditable="true">Mobile Tel : {BillValues.Mobile}</h1>
            </div>
            <div>
              <table className="min-w-full border-collapse">
                <tr className="w-full border border-gray-500">
                  <th className="border border-gray-500 py-1">SLNO</th>
                  <th className="border border-gray-500">
                    Name of Item/Commodity
                  </th>
                  <th className="border border-gray-500">HSNCode</th>
                  <th className="border border-gray-500">Qty</th>
                  <th className="border border-gray-500">Total Rate</th>
                  <th className="border border-gray-500">Total Disc</th>
                  <th className="border border-gray-500">GST%</th>
                  <th className="border border-gray-500">GST Amt</th>
                  <th>Total Amount</th>
                </tr>
                <tr className="w-full ">
                  <td className="text-center border  border-gray-500 ">1</td>
                  <td className="text-center border  border-gray-500 space-y-1 py-1">
                    <h1 contenteditable="true" className="font-bold text-xs ">
                      {BillValues.Phone}
                    </h1>
                    {BillValues.IMEI1 && (
                      <h1 contenteditable="true">IMEI1:{BillValues.IMEI1}</h1>
                    )}
                    {BillValues.IMEI2 && (
                      <h1 contenteditable="true">IMEI2:{BillValues.IMEI2}</h1>
                    )}
                  </td>
                  <td className="text-center border  border-gray-500"></td>
                  <td className="text-center border  border-gray-500">1</td>
                  <td className="text-center border  border-gray-500">
                    {(BillValues.Total / +(1 + 18 / 100)).toFixed(2)}
                  </td>
                  <td className="text-center border  border-gray-500">0.00</td>
                  <td className="text-center border  border-gray-500">18</td>
                  <td className="text-center border  border-gray-500">
                    {(
                      ((+BillValues.Total / +(1 + 18 / 100)) * 18) /
                      100
                    ).toFixed(2)}
                  </td>
                  <td className="text-center border border-gray-500">
                    {BillValues.Total}.00
                  </td>
                </tr>
              </table>
            </div>
          </div>
          {BillValues.Seal == true && (
            <div className="h-56 w-56 fixed right-28 bottom-48 opacity-70  -rotate-12">
              <img src="seal.png" alt="seal" className="object-contain" />
            </div>
          )}
          <div>
            <div className="flex justify-between border border-gray-500 p-2 font-bold">
              <h1 className="">Total</h1>
              <h1>1</h1>
              <h1>{(BillValues.Total / +(1 + 18 / 100)).toFixed(2)}</h1>
              <h1>
                {(((+BillValues.Total / +(1 + 18 / 100)) * 18) / 100).toFixed(
                  2
                )}
              </h1>
              <h1>{BillValues.Total}.00</h1>
            </div>
            <div className="flex p-2">
              <div className="w-7/12">
                <h1>In Words: {converter.toWords(BillValues.Total)} only</h1>
                <div className=" mt-5">
                  <table className="w-full border-collapse border border-gray-300">
                    <tr>
                      <th className="border border-gray-300 py-2"></th>
                      <th className="border border-gray-300 py-2">GST 0%</th>
                      <th className="border border-gray-300">GST 5%</th>
                      <th className="border border-gray-300">GST 12%</th>
                      <th className="border border-gray-300">GST 18%</th>
                      <th className="border border-gray-300">GST 28%</th>
                    </tr>
                    <tr className="text-center">
                      <td className="border border-gray-300 py-2 ">Taxable</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">
                        {(
                          ((+BillValues.Total / +(1 + 18 / 100)) * 18) /
                          100
                        ).toFixed(2)}
                      </td>
                      <td className="border border-gray-300">0.00</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border border-gray-300 py-2">CGST Amt</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">
                        {(
                          (
                            ((+BillValues.Total / +(1 + 18 / 100)) * 18) /
                            100
                          ).toFixed(2) / 2
                        ).toFixed(2)}
                      </td>
                      <td className="border border-gray-300">0.00</td>
                    </tr>
                    <tr className="text-center mt-2">
                      <td className="border border-gray-300 py-2">SGST Amt</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">0.00</td>
                      <td className="border border-gray-300">
                        {(
                          (
                            ((+BillValues.Total / +(1 + 18 / 100)) * 18) /
                            100
                          ).toFixed(2) / 2
                        ).toFixed(2)}
                      </td>
                      <td className="border border-gray-300">0.00</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="w-5/12 flex flex-col items-end space-y-2">
                <h1>Rounding:</h1>
                <h1 className="font-bold">
                  Total Amount : {BillValues.Total}.00
                </h1>
                <h1 className="ml-5">
                  Certified that the particulars given above are true and
                  correct
                </h1>
                <h1 className="font-bold">For MOBILE HOUSE</h1>
                <h1 className="font-bold">Authorised Signatory</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
export default App;
