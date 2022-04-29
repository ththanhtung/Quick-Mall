import Creatable, { useCreatable } from "react-select/creatable";
import { FaTimes } from "react-icons/fa";
import AdminButton from "./AdminButton";
import AdminInput from "./AdminInput";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductRequest from "../../Request/ProductRequest";

const AdminCreateModal = ({ visible, onClose }) => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    price: 0,
    img: "",
    categories: [],

    size: [],
    color: [],
    categories: [],

    sizeInput: "",
    colorInput: "",
    categoriesInput: "",
  });

  const onCreate = () => {
    const parsedData = {
      ...data,
      categories: data.categories.map((e) => e.value),
      size: data.size.map((e) => e.value),
      color: data.color.map((e) => e.value),
    };
    ProductRequest.createProduct(parsedData)
      .then((res) => {
        toast.success("Create product success");
        // console.log(res);
        onClose();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleItemSelectKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (data.sizeInput === "") {
        return;
      }

      // Input existed in list
      if (data.size.find((e) => e.label === data.sizeInput)) {
        return;
      }

      setData({
        ...data,
        size: [...data.size, createOption(data.sizeInput)],
        sizeInput: "",
      });
    }
  };

  const handleColorKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (data.colorInput === "") {
        return;
      }

      // Input existed in list
      if (data.color.find((e) => e.label === data.colorInput)) {
        return;
      }

      setData({
        ...data,
        color: [...data.color, createOption(data.colorInput)],
        colorInput: "",
      });
    }
  };

  const handleCategoriesKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (data.categoriesInput === "") {
        return;
      }

      // Input existed in list
      if (data.categories.find((e) => e.label === data.categoriesInput)) {
        return;
      }

      setData({
        ...data,
        categories: [...data.categories, createOption(data.categoriesInput)],
        categoriesInput: "",
      });
    }
  };

  const createOption = (label) => {
    return {
      label,
      value: label,
    };
  };

  return (
    <div
      className={
        visible
          ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"
          : `hidden`
      }
    >
      <div className="w-full lg:w-1/3 bg-white lg:mx-auto lg:my-12 lg:rounded-2xl shadow-lg shadow-gray-500">
        {/* Header */}
        <div className="flex flex-row px-8 pt-4">
          <div className="w-4/5 text-3xl font-bold">Add product</div>
          <div
            className="w-32px text-2xl font-light cursor-pointer 
          transition-colors ease-in hover:text-amber-600"
            onClick={onClose}
          >
            <FaTimes />
          </div>
        </div>
        <hr className="border border-gray-400 mt-4 border-opacity-75" />
        {/* Body */}
        <div className="mt-4 overflow-y-auto px-6 lg:max-h-[400px]">
          {/* Product information body */}
          <div>
            {/* Title */}
            <div className="font-semibold text-xl text-gray-800">
              Product information
            </div>
            {/* Body information item */}
            <div className="flex flex-col text-left gap-3 mt-3 px-8">
              <div className="w-full">
                <div className="mt-3">
                  <AdminInput
                    altText={"Name"}
                    name="title"
                    value={data && data.title}
                    placeholder="Enter name"
                    onChange={(value) => {
                      setData({
                        ...data,
                        title: value,
                      });
                    }}
                  />
                </div>

                <div className="mt-3">
                  <AdminInput
                    altText={"Price"}
                    type={"number"}
                    name="price"
                    value={data && data.price}
                    onChange={(value) => {
                      setData({
                        ...data,
                        price: value,
                      });
                    }}
                  />
                </div>

                <div className="mt-3">
                  <AdminInput
                    altText={"Description"}
                    type={"text"}
                    name="desc"
                    value={data && data.desc}
                    onChange={(value) => {
                      setData({
                        ...data,
                        desc: value,
                      });
                    }}
                  />
                </div>

                <div>
                  <AdminInput
                    altText={"Image"}
                    type={"text"}
                    name="img"
                    value={data && data.img}
                    onChange={(value) => {
                      setData({
                        ...data,
                        img: value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="font-semibold text-xl text-gray-800 ">
              Product property
            </div>
            <div className="flex flex-col text-left gap-3 mt-3 px-8">
              <div className="w-full">
                {/* Size */}
                <div className="mt-3">
                  <div className="text-gray-600">Size</div>
                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={data && data.sizeInput}
                    menuIsOpen={false}
                    placeholder="Enter size"
                    components={{ DropdownIndicator: null }}
                    value={data && data.size}
                    onChange={(value) => {
                      setData({
                        ...data,
                        size: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setData({
                        ...data,
                        sizeInput: value,
                      });
                    }}
                    onKeyDown={handleItemSelectKeyDown}
                  />
                </div>
              </div>

              <div className="w-full">
                {/* Color */}
                <div className="mt-3">
                  <div className="text-gray-600">Color</div>
                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={data && data.colorInput}
                    menuIsOpen={false}
                    placeholder="Enter color"
                    components={{ DropdownIndicator: null }}
                    value={data && data.color}
                    onChange={(value) => {
                      setData({
                        ...data,
                        color: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setData({
                        ...data,
                        colorInput: value,
                      });
                    }}
                    onKeyDown={handleColorKeyDown}
                  />
                </div>
              </div>

              <div className="w-full">
                {/* Categories */}
                <div className="mt-3">
                  <div className="text-gray-600">Categories</div>
                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={data && data.categoriesInput}
                    menuIsOpen={false}
                    placeholder="Enter categories"
                    components={{ DropdownIndicator: null }}
                    value={data && data.categories}
                    onChange={(value) => {
                      setData({
                        ...data,
                        categories: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setData({
                        ...data,
                        categoriesInput: value,
                      });
                    }}
                    onKeyDown={handleCategoriesKeyDown}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 px-8 py-4 bg-gray-100 lg:rounded-xl flex flex-row-reverse gap-4 lg:border-t-0 border-t border-t-slate-500">
          <div className="flex flex-row-reverse gap-4">
            <AdminButton
              text="Create"
              level="success"
              onClick={onCreate}
              disabled={
                data.name === "" || data.price === "" || data.desc === ""
              }
            />
            <AdminButton text="Cancel" level="danger" onClick={onClose} />
          </div>
          <div className="w-4/5"></div>
        </div>
      </div>
    </div>
  );
};
export default AdminCreateModal;
