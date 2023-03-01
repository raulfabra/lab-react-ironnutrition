import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({createFoods}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServing] = useState();

    const nameHandler = (e) => setName(e.target.value);
    const imageHandler = (e) => setImage(e.target.value);
    const caloriesHandler = (e) => setCalories(e.target.value);
    const servingHandler = (e) => setServing(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target)
        createFoods({name, image, calories, servings});
    }

    return (
        <form onSubmit={submitHandler}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={nameHandler} />

            <label>Image</label>
            <Input value={image} type="text" onChange={imageHandler} />

            <label>Calories</label>
            <Input value={calories} type="Number" onChange={caloriesHandler} />

            <label>Servings</label>
            <Input value={servings} type="Number" onChange={servingHandler} />

            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm;