import { useState } from "react";
import OrderDialog from "./OrderDialog";

const PricingTuto = (props) => {
  const [showModal, setShowModal] = useState(false);
  const lengthGrid = props.services.length>=3?3:props.services.length
  const [service, setService] = useState({
    title: "",
    price: "",
    currency: "",
    pros: [],
  });
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <p className="text-center text-md text-gray-700 dark:text-gray-400 mb-12">
          {props.title}
        </p>
        <div className={"grid lg:grid-cols-"+lengthGrid+" gap-6 lg:gap-x-12"}>
          {props.services.map((service) => {
            return (
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg shadow-lg bg-white h-full">
                  <div className="p-6 border-b border-gray-500 text-center">
                    <p className="uppercase mb-4 text-sm">
                      <strong>{service.title}</strong>
                    </p>
                    <h3 className="text-2xl mb-6">
                      <strong>{service.price} </strong>
                      <small className="text-sm">{service.currency}</small>
                    </h3>

                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-orange-500 text-white-300  hover:bg-green-500  font-medium text-xs leading-tight uppercase rounded focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-ripple-color="primary"
                      onClick={() => {
                        setService(service)
                        setShowModal(true);
                      }}
                    >
                      Buy
                    </button>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      {service.pros.map((pro) => {
                        return (
                          <li className="mb-4 flex items-center">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="check"
                              className="text-green-500 w-4 h-4 mr-2"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                              ></path>
                            </svg>
                            {pro}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <OrderDialog
        dialog={{
          title:props.title,
          show: showModal,
          service: service,
          setShowModal: setShowModal,
        }}
        reRef={props.reRef}
      />
    </div>
  );
};

export default PricingTuto;
