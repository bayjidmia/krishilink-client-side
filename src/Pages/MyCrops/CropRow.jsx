import EditCropModal from "./EditCropModal";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const CropRow = ({ crop, setCrops }) => {
  const handleDelete = (_id) => {
    // const confirm = window.confirm(
    //   "Are you sure you want to delete this crop?"
    // );
    // if (!confirm) return;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://3d-models-server-xi.vercel.app/api/crops/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });

        setCrops((prev) => prev.filter((c) => c._id !== _id));
      }
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white  rounded-2xl shadow-md border border-green-100 p-4 flex flex-col items-center gap-3 hover:shadow-xl transition-all duration-300"
    >
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-green-700">{crop.name}</h3>
        <p className="text-gray-600">{crop.type}</p>
        <p className="text-sm text-gray-500">
          💰 {crop.pricePerUnit || crop.price} / {crop.unit || "kg"}
        </p>
        <p className="text-sm text-gray-500">📦 {crop.quantity} available</p>
      </div>
      <div className="flex gap-3 mt-2">
        <button
          // onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(crop._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      {/* {isEditing && (
        <EditCropModal
          crop={crop}
          setCrops={setCrops}
          onClose={() => setIsEditing(false)}
        />
      )} */}
    </motion.div>
  );
};

export default CropRow;
