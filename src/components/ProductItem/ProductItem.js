// import React, { useState } from "react";
// import dragImage from "../../drag.png";
// import edit from "../../edit.png";
// import ProductSelector from "../ProductSelector/ProductSelector";
// import {
//   Card,
//   Button,
//   TextField,
//   InlineStack,
//   BlockStack,
//   ButtonGroup,
//   ResourceList,
//   Text,
// } from "@shopify/polaris";
// import { EditIcon } from "@shopify/polaris-icons";
// const AddProduct = () => {
//   const productList = [
//     {
//       id: 77,
//       title: "Fog Linen Chambray Towel - Beige Stripe",
//       discount: {
//         number: 10,
//         type: "Flat",
//       },
//       variants: [
//         {
//           id: 1,
//           product_id: 77,
//           title: "XS / Silver",
//           price: "49",
//           discount: {
//             number: 5,
//             type: "Flat",
//           },
//         },
//         {
//           id: 2,
//           product_id: 77,
//           title: "S / Silver",
//           price: "49",
//           discount: {
//             number: 5,
//             type: "Percentage",
//           },
//         },
//         {
//           id: 3,
//           product_id: 77,
//           title: "M / Silver",
//           price: "49",
//           discount: {
//             number: 7,
//             type: "Flat",
//           },
//         },
//       ],
//       image: {
//         id: 266,
//         product_id: 77,
//         src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
//       },
//     },
//     {
//       id: 80,
//       title: "Orbit Terrarium - Large",
//       discount: {
//         number: 15,
//         type: "%",
//       },
//       variants: [
//         {
//           id: 64,
//           product_id: 80,
//           title: "Default Title",
//           price: "109",
//           discount: {
//             number: 10,
//             type: "Flat",
//           },
//         },
//       ],
//       image: {
//         id: 272,
//         product_id: 80,
//         src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
//       },
//     },
//   ];

//   return (
//     <div style={{ width: "max-content" }}>
//       <h3>Add Product</h3>
//       <div
//         style={{
//           fontWeight: "500",
//           fontSize: "medium",
//           display: "flex",
//           gap: "10px",
//           width: "100%",
//         }}
//       >
//         <div>{/* drag icon */}&nbsp;</div>
//         <div>{/* series no. */} &nbsp;</div>
//         <div style={{ flex: "2" }}>Product</div>
//         <div style={{ flex: "2" }}>Discount</div>
//       </div>
//       {productList.map(({ title, discount, variants }, index) => (
//         <div>
//           <div
//             style={{
//               fontSize: "medium",
//               display: "flex",
//               gap: "10px",
//               borderBottom: "1px solid #d1d1d1",
//               padding: "1rem",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <img
//                 src={dragImage}
//                 className="App-logo"
//                 alt="logo"
//                 style={{ cursor: "grab" }}
//               />
//             </div>
//             <div>{index + 1}.</div>
//             <div>
//               <div className="input-edit">
//                 <input value={title || null}></input>
//                 <img
//                   src={edit}
//                   className="App-logo"
//                   alt="logo"
//                   style={{ cursor: "pointer" }}
//                 />
//               </div>
//             </div>
//             <div>
//               {!discount?.number ? (
//                 <button className="green-button"> Add Discount</button>
//               ) : (
//                 <div style={{ display: "flex", gap: "10px" }}>
//                   <input
//                     className="input-edit "
//                     value={discount?.number || 0}
//                   ></input>
//                   <select className="input-edit " value={discount?.type}>
//                     <option>Flat</option>
//                     <option>%</option>
//                   </select>
//                 </div>
//               )}
//             </div>
//             <div>X</div>
//           </div>
//           {variants.map(({ title, discount }, vIndex) => (
//             <div
//               className="variant"
//               style={{
//                 fontSize: "medium",
//                 display: "flex",
//                 gap: "10px",
//                 borderBottom: "1px solid #d1d1d1",
//                 padding: "1rem",
//                 alignItems: "center",
//               }}
//             >
//               <div>
//                 <img
//                   src={dragImage}
//                   className="App-logo"
//                   alt="logo"
//                   style={{ cursor: "grab" }}
//                 />
//               </div>
//               <div>
//                 <div className="input-edit">
//                   <input value={title || null}></input>
//                   <img
//                     src={edit}
//                     className="App-logo"
//                     alt="logo"
//                     style={{ cursor: "pointer" }}
//                   />
//                 </div>
//               </div>
//               <div>
//                 {!discount?.number ? (
//                   <button className="green-button"> Add Discount</button>
//                 ) : (
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <input
//                       className="input-edit "
//                       value={discount?.number || 0}
//                     ></input>
//                     <select className="input-edit " value={discount?.type}>
//                       <option>Flat</option>
//                       <option>%</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//               <div>X</div>
//             </div>
//           ))}
//         </div>
//       ))}
//       <button className="green-outline-button">Add Product</button>
//     </div>
//   );
// };

// export default AddProduct;
