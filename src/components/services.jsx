import React from 'react'

const services = () => {
  return (
   <>
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>

      <div className="flex flex-col md:flex-row justify-around items-center mb-8">
        <div className="mb-6 md:mb-0 md:w-1/4 text-center">
          <img src="https://www.shutterstock.com/shutterstock/photos/2487419501/display_1500/stock-photo-close-up-cropped-man-customer-male-buyer-client-hold-bank-payment-terminal-process-acquire-credit-2487419501.jpg" alt="Payment Cards" className="w-32 h-32 mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Cards</h3>
          <p className="text-lg text-gray-600">We accept a wide range of payment methods including major credit cards, debit cards, and digital wallets. Shopping with us is secure and hassle-free.</p>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/4 text-center">
          <img src="https://img.freepik.com/free-vector/mail-sent-concept-illustration_114360-248.jpg?ga=GA1.1.1266433093.1723779885&semt=ais_hybrid" alt="Delivery" className="w-32 h-32 mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Delivery</h3>
          <p className="text-lg text-gray-600">We offer fast and reliable delivery to your doorstep. Enjoy swift processing and shipping to ensure your products arrive safely and on time.</p>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/4 text-center">
          <img src="https://media.istockphoto.com/id/1351446226/photo/businesswoman-addressing-a-meeting-in-office.jpg?s=1024x1024&w=is&k=20&c=4eq2jeNpL2m6IG3QlsoHLkig3C1Q2gVQlBfQrVyX1pY=" alt="Address Management" className="w-32 h-32 mx-auto mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address Management</h3>
          <p className="text-lg text-gray-600">Easily manage your shipping and billing addresses. You can update your details anytime to ensure your orders are delivered accurately.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <img src="https://www.shutterstock.com/shutterstock/photos/2120449793/display_1500/stock-photo-young-indian-delivery-boy-giving-parcel-to-consumer-after-opening-door-concept-of-fast-home-2120449793.jpg" alt="Delivery Man" className="w-32 h-32 mx-auto mb-4"/>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Delivery Men</h3>
        <p className="text-lg text-gray-600">Our friendly and professional delivery men ensure that your packages are delivered safely and promptly. We prioritize customer satisfaction with every order!</p>
      </div>
    </div>
   </>
  )
}

export default services