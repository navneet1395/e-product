import React, { useEffect, useState } from "react";
import dragImage from "../../drag.png";
import edit from "../../edit.png";
const AddProduct = () => {
  const productList = [
    {
      id: 77,
      title: "Fog Linen Chambray Towel - Beige Stripe",
      discount: {
        number: 10,
        type: "Flat",
      },
      variants: [
        {
          id: 1,
          product_id: 77,
          title: "XS / Silver",
          price: "49",
          discount: {
            number: 5,
            type: "Flat",
          },
        },
        {
          id: 2,
          product_id: 77,
          title: "S / Silver",
          price: "49",
          discount: {
            number: 5,
            type: "Percentage",
          },
        },
        {
          id: 3,
          product_id: 77,
          title: "M / Silver",
          price: "49",
          discount: {
            number: 7,
            type: "Flat",
          },
        },
      ],
      image: {
        id: 266,
        product_id: 77,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
      },
    },
    {
      id: 80,
      title: "Orbit Terrarium - Large",
      discount: {
        number: 15,
        type: "%",
      },
      variants: [
        {
          id: 64,
          product_id: 80,
          title: "Default Title",
          price: "109",
          discount: {
            number: 10,
            type: "Flat",
          },
        },
      ],
      image: {
        id: 272,
        product_id: 80,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
      },
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_BASE_URL = "http://stageapi.monkcommerce.app/task";
  const API_KEY = "72njgfa948d9aS7gs5"; // Replace with the actual API key

  const fetchProducts = async (search = "", page = 0, limit = 10) => {
    try {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "x-api-key": "72njgfa948d9aS7gs5",
      };

      let response = await fetch(
        "http://stageapi.monkcommerce.app/task/products/search?search=Hat&page=2&limit=1",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.text();
      console.log(data);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (showPopup) {
      fetchProducts();
    }
  }, [showPopup]);

  return (
    <div style={{ width: "max-content" }}>
      <h1>Add Product</h1>
      <div
        style={{
          fontWeight: "500",
          fontSize: "medium",
          display: "flex",
          gap: "10px",
          width: "100%",
        }}
      >
        <div>{/* drag icon */}&nbsp;</div>
        <div>{/* series no. */} &nbsp;</div>
        <div style={{ flex: "2" }}>Product</div>
        <div style={{ flex: "2" }}>Discount</div>
      </div>
      {productList.map(({ title, discount, variants }, index) => (
        <div>
          <div
            style={{
              fontSize: "medium",
              display: "flex",
              gap: "10px",
              borderBottom: "1px solid #d1d1d1",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={dragImage}
                className="App-logo"
                alt="logo"
                style={{ cursor: "grab" }}
              />
            </div>
            <div>{index + 1}.</div>
            <div>
              <div className="input-edit">
                <input
                  value={title || null}
                  onChange={() => setShowPopup(true)}
                ></input>
                <img
                  src={edit}
                  className="App-logo"
                  alt="logo"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPopup(true)}
                />
              </div>
            </div>
            <div>
              {!discount?.number ? (
                <button className="green-button"> Add Discount</button>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="input-edit "
                    type="number"
                    value={discount?.number || 0}
                  ></input>
                  <select className="input-edit " value={discount?.type}>
                    <option>Flat</option>
                    <option>%</option>
                  </select>
                </div>
              )}
            </div>
            <div>X</div>
          </div>
          {variants.map(({ title, discount }, vIndex) => (
            <div
              className="variant"
              style={{
                fontSize: "medium",
                display: "flex",
                gap: "10px",
                borderBottom: "1px solid #d1d1d1",
                padding: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={dragImage}
                  className="App-logo"
                  alt="logo"
                  style={{ cursor: "grab" }}
                />
              </div>
              <div>
                <div className="input-edit">
                  <input value={title || null}></input>
                  <img
                    src={edit}
                    className="App-logo"
                    alt="logo"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div>
                {!discount?.number ? (
                  <button className="green-button"> Add Discount</button>
                ) : (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      className="input-edit "
                      value={discount?.number || 0}
                    ></input>
                    <select className="input-edit " value={discount?.type}>
                      <option>Flat</option>
                      <option>%</option>
                    </select>
                  </div>
                )}
              </div>
              <div>X</div>
            </div>
          ))}
        </div>
      ))}
      <button className="green-outline-button">Add Product</button>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50vw",
              height: "50vh",
              backgroundColor: "white",
              // padding: "20px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem",
                  fontWeight: "500",
                  fontSize: "Large",
                }}
              >
                <div>Select Product</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPopup(false)}
                >
                  X
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  padding: "0.25rem",
                }}
              >
                <input
                  type="search"
                  placeholder="Search"
                  className="input-full"
                />
              </div>
              <div>
                {fetchedData.map((data, Findex) => (
                  <div key={Findex} style={{ fontWeight: "400" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // borderTop: "1px solid black",
                        borderBottom: "1px solid black",
                        padding: "0.25rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        key={`fetch${Findex}`}
                        id={`fetch${Findex}`}
                      />
                      <img
                        src={data.image.src}
                        alt={`${data.title} image`}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "4px",
                        }}
                      />
                      <label htmlFor={`fetch${Findex}`}>{data.title}</label>
                    </div>
                    {data.variants && (
                      <div
                        style={{
                          // borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                          padding: "0.25rem",
                        }}
                      >
                        <input
                          style={{ marginLeft: "2rem" }}
                          type="checkbox"
                          key={`fetch${Findex}`}
                          id={`fetch${Findex}`}
                        />
                        <label htmlFor={`fetch${Findex}`}>{data.title}</label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                scrollMarginTop: "5px",
                borderTop: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: ".25rem",
              }}
            >
              <div>{/* How many product slected */}1 Product Selected</div>
              <div>
                <button className="green-outline-button">Cancel</button>
                <button className="green-button">Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
