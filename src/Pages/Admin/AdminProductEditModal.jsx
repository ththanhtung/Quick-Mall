import { useEffect, useState } from "react";
import Creatable, { useCreatable } from "react-select/creatable";
import { toast } from "react-toastify";
import ProductRequest from "../../Request/ProductRequest";
import AdminButton from "./AdminButton";
import AdminInput from "./AdminInput";

const AdminProductEditModal = ({ product, visible, onClose, onUpdateView }) => {
  const [tempProduct, setTempProduct] = useState({
    title: "",
    desc: "",
    price: 0,
    img: "",

    size: [],
    color: [],
    categories: [],

    sizeInput: "",
    colorInput: "",
    categoriesInput: "",
  });

  useEffect(() => {
    // const { title, desc, price, img, categories, size, color } = product;
    setTempProduct(
      product && {
        ...product,
        categories: product.categories.map((e) => createOption(e)),
        size: product.size.map((e) => createOption(e)),
        color: product.color.map((e) => createOption(e)),
      }
    );

    return () => {
      setTempProduct(null);
    };
  }, [product]);

  const createOption = (label) => {
    return {
      label,
      value: label,
    };
  };

  const handleItemSelectKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (tempProduct.sizeInput === "") {
        return;
      }

      // Input existed in list
      if (tempProduct.size.find((e) => e.label === tempProduct.sizeInput)) {
        return;
      }

      setTempProduct({
        ...tempProduct,
        size: [...tempProduct.size, createOption(tempProduct.sizeInput)],
        sizeInput: "",
      });
    }
  };

  const handleCategoriesKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (tempProduct.categoriesInput === "") {
        return;
      }

      // Input existed in list
      if (
        tempProduct.categories.find(
          (e) => e.label === tempProduct.categoriesInput
        )
      ) {
        return;
      }

      setTempProduct({
        ...tempProduct,
        categories: [
          ...tempProduct.categories,
          createOption(tempProduct.categoriesInput),
        ],
        categoriesInput: "",
      });
    }
  };

  const handleColorKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();

      // Input nothing
      if (tempProduct.colorInput === "") {
        return;
      }

      // Input existed in list
      if (tempProduct.color.find((e) => e.label === tempProduct.color)) {
        return;
      }

      setTempProduct({
        ...tempProduct,
        color: [...tempProduct.color, createOption(tempProduct.colorInput)],
        colorInput: "",
      });
    }
  };

  const onSave = () => {
    const { title, desc, price, img } = tempProduct;

    ProductRequest.updateProduct(product._id, {
      title,
      desc,
      price,
      img,
      categories: tempProduct.categories.map((e) => e.label),
      size: tempProduct.size.map((e) => e.label),
      color: tempProduct.color.map((e) => e.label),
    })
      .then((response) => {
        toast.success(`Successfully update the product`);

        onUpdateView(response.data.updatedProduct);
        onClose();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const onDelete = () => {
    ProductRequest.deleteProduct(product._id)
      .then(() => {
        toast.success(`Successfully delete the product`);
      })
      .catch(() => {
        toast.error(`Failed to delete the product`);
      })
      .finally(() => {
        // Then close the dialog
        onClose();
      });
  };

  return (
    <div
      className={`fixed w-full h-full bg-black top-0 left-0 bg-opacity-70 ${
        visible ? `block` : `hidden`
      } overflow-auto`}
    >
      <div className=" md:block  md:mx-auto h-auto bg-white md:rounded-xl p-4 w-full lg:w-2/5  md:my-6">
        {/* Header  */}
        <div className="text-3xl font-bold mb-3">
          <span>Product</span>
          <span className="ml-5 text-gray-500 font-semibold text-xl">
            {product && product.title}
          </span>
        </div>
        <hr />

        {/* Body */}
        <div className="md:max-h-[600px] overflow-auto">
          <div className="my-6 mx-4">
            <div className="font-semibold text-xl text-gray-800">General </div>
            <div className="flex flex-col text-left gap-3 mt-3 px-8">
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Name</span>
                  {/* <input
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
                  /> */}
                  <AdminInput
                    value={tempProduct && tempProduct.title}
                    onChange={(v) => {
                      setTempProduct({
                        ...tempProduct,
                        title: v,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Description</span>
                  {/* <textarea
                    type="text"
                    name="description"
                    className="py-1 border border-gray-200 px-4 w-full rounded-3xl flex-1 min-h-min resize-y"
                    multiple={true}
                    resizable="false"
                    value={tempProduct && tempProduct.desc}
                    onChange={(e) => {
                      setTempProduct({
                        ...tempProduct,
                        desc: e.target.value,
                      });
                    }}
                  /> */}
                  <AdminInput
                    value={tempProduct && tempProduct.desc}
                    onChange={(v) => {
                      setTempProduct({
                        ...tempProduct,
                        desc: v,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">
                    Price
                    <span className="text-gray-500 ml-4">
                      (using "," as decimal point)
                    </span>
                  </span>
                  <AdminInput
                    type={`number`}
                    value={tempProduct && tempProduct.price}
                    onChange={(v) => {
                      setTempProduct({
                        ...tempProduct,
                        price: v,
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
                {/* Categories */}
                <div className="">
                  <span className="flex-1">Category</span>

                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={tempProduct && tempProduct.categoriesInput}
                    menuIsOpen={false}
                    placeholder="Enter categories"
                    components={{ DropdownIndicator: null }}
                    value={tempProduct && tempProduct.categories}
                    onChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        categories: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        categoriesInput: value,
                      });
                    }}
                    onKeyDown={handleCategoriesKeyDown}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <span className="flex-1">Color</span>
                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={tempProduct && tempProduct.colorInput}
                    menuIsOpen={false}
                    placeholder="Enter color"
                    components={{ DropdownIndicator: null }}
                    value={tempProduct && tempProduct.color}
                    onChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        color: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        colorInput: value,
                      });
                    }}
                    onKeyDown={handleColorKeyDown}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="">
                  <span className="flex-1">Size</span>
                  {/* <Creatable
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
                  /> */}
                  <Creatable
                    isMulti={true}
                    isClearable
                    inputValue={tempProduct && tempProduct.sizeInput}
                    menuIsOpen={false}
                    placeholder="Enter size"
                    components={{ DropdownIndicator: null }}
                    value={tempProduct && tempProduct.size}
                    onChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        size: value,
                      });
                    }}
                    onInputChange={(value) => {
                      setTempProduct({
                        ...tempProduct,
                        sizeInput: value,
                      });
                    }}
                    onKeyDown={handleItemSelectKeyDown}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <hr />
        <div className="mx-4 mt-3 flex flex-row-reverse items-center gap-4">
          <AdminButton text={`save`} level={`primary`} onClick={onSave} />
          <AdminButton text={`cancel`} level={`danger`} onClick={onClose} />

          <div className="flex-1">
            <AdminButton text={`delete`} level={`danger`} onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductEditModal;
