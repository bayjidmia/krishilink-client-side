import React, { useState } from "react";

const EditCropModal = ({ crop, setCrops, onClose }) => {
  const [formData, setFormData] = useState({ ...crop });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <form>
        <h2>Edit Crop</h2>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Type:
          <input name="type" value={formData.type} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCropModal;
