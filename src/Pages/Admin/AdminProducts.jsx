import React, { useEffect, useState } from "react";
import { FaMoneyBill, FaTimes } from "react-icons/fa";
import ProductRequest from "../../Request/ProductRequest";
import Creatable, { useCreatable } from "react-select/creatable";
import { toast } from "react-toastify";
import AdminInput from "./AdminInput";
import AdminButton from "./AdminButton";

const AdminProductEditModal = ({ product, visible, onClose }) => {
  const [tempProduct, setTempProduct] = useState("");

  useEffect(() => {
    setTempProduct(product && product);
  }, []);

  useEffect(() => {
    console.log(tempProduct);
  }, [tempProduct]);

  const convertToSelectObject = (items) => {
    return items.map((item, index) => {
      return { label: item, value: item };
    });
  };

  const onSave = () => {
    ProductRequest.updateProduct(product._id, tempProduct)
      .then(() => {
        toast.success(`Successfully update the product`);
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`fixed w-full h-full bg-black top-0 left-0 bg-opacity-70 ${
        visible ? `block` : `hidden`
      } overflow-auto`}
    >
      <div className=" md:block md:h-auto md:mx-auto h-full w-full bg-white md:rounded-xl p-4 md:w-2/3 lg:w-2/5  md:my-6">
        {/* Header  */}
        <div className="text-3xl font-bold mb-3">
          <span>Product</span>
          <span className="ml-5 text-gray-500 font-semibold text-xl">
            {product && product.title}
          </span>
        </div>
        <hr />

        {/* Body */}
        <div className="md:max-h-96 overflow-auto">
          <div className="my-6 mx-4">
            <div className="font-semibold text-xl text-gray-800">General </div>
            <div className="flex flex-col text-left gap-3 mt-3 px-8">
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Product name</span>
                  <input
                    type="text"
                    name="title"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1"
                    value={tempProduct && tempProduct.title}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Product description</span>
                  <textarea
                    type="text"
                    name="description"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1 min-h-min resize-y"
                    multiple={true}
                    resizable="false"
                    value={tempProduct && tempProduct.description}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        description: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Price</span>
                  <input
                    type="number"
                    name="price"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1 min-h-min"
                    resizable="false"
                    step="0.2"
                    value={tempProduct && tempProduct.price}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        price: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 mx-4">
            <div className="font-semibold text-xl text-gray-800">Associate</div>
            <div className="flex flex-col text-left gap-3 mt-3 px-8">
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Category</span>
                  <Creatable
                    options={
                      tempProduct &&
                      convertToSelectObject(tempProduct.categories)
                    }
                    // className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1 min-h-min"
                    value={
                      tempProduct &&
                      convertToSelectObject(tempProduct.categories)
                    }
                    isMulti={true}
                    formatCreateLabel={(inputValue) => {
                      return `Create category "${inputValue}"...`;
                    }}
                    onChange={(e) => {
                      const v = e.map((e) => e.value);

                      setTempProduct({
                        ...tempProduct,
                        categories: v,
                      });
                    }}
                  />
                  {/* <input
                    type="text"
                    name="category"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1"
                    value={tempProduct && tempProduct.category}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        category: e.target.value,
                      });
                    }}
                  /> */}
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Color</span>
                  <input
                    type="text"
                    name="color"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1"
                    value={tempProduct && tempProduct.color}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        color: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="">
                  <span className="flex-1">Size</span>
                  <Creatable
                    options={
                      tempProduct && convertToSelectObject(tempProduct.size)
                    }
                    // className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1 min-h-min"
                    value={
                      tempProduct && convertToSelectObject(tempProduct.size)
                    }
                    isMulti={true}
                    formatCreateLabel={(inputValue) => {
                      return `Create size "${inputValue}"...`;
                    }}
                    onChange={(e) => {
                      const v = e.map((e) => e.value);

                      setTempProduct({
                        ...tempProduct,
                        size: v,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <hr />
        <div className="mx-4 mt-3 flex flex-row-reverse items-center gap-4">
          <button
            className="flex-1 py-2 bg-green-400 rounded-3xl"
            onClick={onSave}
          >
            Save
          </button>
          <button
            className="flex-1 py-2 bg-red-400 rounded-3xl"
            onClick={onClose}
          >
            Cancel
          </button>

          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

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
        console.log(res);
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

const AdminProductItem = ({ product, ...children }) => {
  // console.log(product);
  return (
    <div className=" w-full lg:w-1/3 mb-2 cursor-pointer px-3" {...children}>
      <img className="m-0" src={product.img} alt={product.name} />
      <div className="p-2">
        <p className=" text-sm font-bold">{product && product.title}</p>
        <div className="text-sm text-gray-400 inline-block">
          <span className="mr-3">
            <FaMoneyBill className="inline-block" />
          </span>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
};

function AdminProducts() {
  const [loading, setLoading] = useState(true);
  const [listProducts, setListProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [createModelVisible, setCreateModelVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Awaiting for fetch all products
    ProductRequest.getAllProducts()
      .then((response) => {
        // console.log(response.data);
        setListProducts(response.data);
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="text-center text-3xl font-bold my-16">
      Retrieving data...
    </div>
  ) : (
    <div>
      <div className="flex flex-row">
        <div className="font-bold text-2xl mx-3 mb-3 w-5/6">Products</div>
        <div className="">
          <AdminButton
            text="Create"
            level="primary"
            onClick={() => setCreateModelVisible(true)}
          />
        </div>
      </div>
      <div className="m-3">
        <div className="flex flex-row flex-wrap gap-3">
          <div className="w-2/5">
            <input
              className="py-1 border border-gray-200 px-4 w-full rounded-3xl"
              placeholder="Search for"
            />
          </div>
          <div className="flex flex-row gap-4 flex-1">
            <span className="text-gray-500">Filter</span>
            <select className="py-1 border border-gray-200 px-2 w-full rounded-3xl">
              <option>Date</option>
              <option>Cost [A-Z]</option>
            </select>
            <span className="text-gray-500">Display</span>
            <select className="py-1 border border-gray-200 px-2 w-full rounded-3xl">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
      {/* Product container wrapper */}
      <div className="flex flex-row flex-wrap">
        {listProducts &&
          listProducts.map((product, index) => {
            return (
              <AdminProductItem
                product={product}
                key={index}
                onClick={() => {
                  setCurrentProduct(product);
                  setModalVisible(true);
                }}
              />
            );
          })}
      </div>
      <AdminProductEditModal
        visible={isModalVisible}
        product={currentProduct}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <AdminCreateModal
        visible={createModelVisible}
        onClose={() => setCreateModelVisible(false)}
      />
    </div>
  );
}

export default AdminProducts;
