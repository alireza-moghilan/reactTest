import { useState } from "react";
import Joi from "joi";

export const FormAddProducts = () => {

    const [product, setProduct] = useState(
        {
            nameProduct: "",
            price: 0,
            quantity: 0,
            description: ""
        }
    );

    const schema = Joi.object({
        nameProduct: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        price: Joi.string()
            .pattern(/^\d+$/)
            .min(0)
            .required(),
        quantity: Joi.number()
            .integer()
            .max(100)
            .min(0)
            .required(),
        description: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    })

    // Clicked User in Keyboard
    const updateInput = (ev) => {
        let nameInp = ev.target.name,
            valueInp = ev.target.value;

        // copy of State
        const clone = { ...product };
        clone[nameInp] = valueInp;
        setProduct(clone)
    }
    const [errors, setErrors] = useState([]);

    // click on btn Add 
    const addProducts = (ev) => {
        ev.preventDefault();

        const validateResult = validate();
        if (validateResult == false)
            return
    }

    const validate = () => {
        const result = schema.validate(product, { abortEarly: false, allowUnknown: true })

        let validate = true;
        if (result.error && result.error.details && result.error.details.length > 0) {
            validate = false;
            const details = result.error.details;
            const errors = details.map(error => (
                { message: error.message, path: error.path }
            ))
            setErrors(errors);
        }
        else {
            setErrors([]);
            document.querySelector('.toastSub').classList.add('show')
        }

        return validate;
    }

    const subError = (evName) => {
        let value = "";
        for (let index = 0; index < errors.length; index++) {
            if (evName == errors[index].path) {
                value = errors[index].message
                break;
            }
        }
        return value;
    }

    return (
        <>
            <div class=" toast toastSub position-absolute end-0 m-4" role="alert" aria-live="assertive">
                <div class="toast-body">
                    Information has been successfully registered.
                    <div class="mt-2 pt-2 border-top">
                        <button type="button" class="btn btn-primary btn-sm">Take action</button>
                        <button type="button" class="btn btn-secondary btn-sm ms-2" data-bs-dismiss="toast">Close</button>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <div className="mb-3">
                    <h1>Form Add Products</h1>
                </div>

                {/* <ul className="p-5 alert alert-danger">
                    {
                        errors.map(ev => <li key={ev.message}>{ev.message}</li>)
                    }
                </ul> */}
                <form action="" method="" className="bg-light shadow-lg p-5 rounded-3">
                    <div className="mb-4 form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" onInput={ev => updateInput(ev)} placeholder="name..." name="nameProduct" id="" />
                        {
                            subError("nameProduct")
                        }
                    </div>

                    <div className="mb-4 form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" className="form-control" onInput={ev => updateInput(ev)} placeholder="Place Enter Price..." name="price" id="" />
                        {
                            subError("price")
                        }
                    </div>

                    <div className="mb-4 form-group">
                        <label htmlFor="">Quantity</label>
                        <input type="text" className="form-control" onInput={ev => updateInput(ev)} value={product.quantity} name="quantity" id="" />

                        {
                            subError("quantity")
                        }
                    </div>

                    <div className="mb-4 form-group">
                        <label htmlFor="">Description</label>
                        <textarea name="description" className="form-control" onInput={ev => updateInput(ev)} id="" cols="30" rows="10"></textarea>
                        {
                            subError("description")
                        }
                    </div>

                    <div type="submint" className="btn btn-success w-100" onClick={ev => addProducts(ev)}>
                        Add
                    </div>
                </form>
            </div>
        </>
    )
}