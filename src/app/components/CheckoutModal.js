const CheckoutModal = ({ isOpen, onClose, cartItems, totalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <h3>{item.name}</h3>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="text-right font-bold text-xl">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-400 px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-green-500 px-4 py-2 rounded text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
