import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 ">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"INFORMACIÓN"} text2={"DE ENTREGA"} />
        </div>
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Apellido"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Correo Electrónico"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Dirección"
        />
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Ciudad"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Departamento"
          />
        </div>
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Código Postal"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="País"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Teléfono"
        />
      </div>
      {/* right Side */}
      <div className="mt-8">
        <div className="mt-8min-w-80 ">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"FORMA"} text2={"DE PAGO"} />
          {/* payment method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                PAGO CONTRA ENTREGA
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer "
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
