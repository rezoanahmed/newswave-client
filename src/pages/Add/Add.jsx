import { MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Add = () => {

    // traditional form system
    // const handleAddArticle = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const title = form.title.value;
    //     const category = form.category.value;
    //     const article = form.article.value;
    //     const image = form.image.value;
    //     const imageFile = { image }
    //     console.log({ title, category, article, imageFile });
    // }
    const { register, handleSubmit } = useForm();
    const addArticle = async (data) => {
        const title = data.title;
        const category = data.category;
        const article = data.article;
        const image = data.image[0];
        const imageFile = { image }
        console.log({title, category, article, imageFile});
    }

    const categories = [
        {
            value: 'politics',
            label: 'Politics',
        },
        {
            value: 'technology',
            label: 'Technology',
        },
        {
            value: 'sports',
            label: 'Sports',
        },
        {
            value: 'health',
            label: 'Health',
        },
        {
            value: 'business',
            label: 'Business',
        },
        {
            value: 'entertainment',
            label: 'Entertainment',
        },
        {
            value: 'science',
            label: 'Science',
        },
        {
            value: 'travel',
            label: 'Travel',
        },
        {
            value: 'culture',
            label: 'Culture',
        },
        {
            value: 'environment',
            label: 'Environment',
        },
        {
            value: 'education',
            label: 'Education',
        },
        {
            value: 'food',
            label: 'Food',
        },
        {
            value: 'others',
            label: 'Others',
        },
    ];
    return (
        <div className="p-2">
            <h1 className="text-center text-4xl font-bold p-5">Add Articles</h1>
            <form onSubmit={handleSubmit(addArticle)} className="max-w-lg mx-auto space-y-2">
                <div className="flex justify-between">
                    <TextField name="title" id="outlined-basic" label="Article Title" variant="outlined" {...register("title")} />
                    {/* <TextField id="outlined-basic" label="Category" variant="outlined" /> */}
                    <TextField
                        name="category"
                        id="outlined-select-currency"
                        select
                        label=""
                        defaultValue="technology"
                        helperText="Please select your post category"
                        {...register("category")}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>
                <div>
                    <TextField
                        name="article"
                        id="outlined-multiline-static"
                        label="Full Article"
                        multiline
                        rows={5}
                        className="w-full"
                        {...register("article")}
                    // defaultValue="Default Value"
                    />
                </div>
                <div>
                    <input name='image' {...register("image")} type="file" className="file-input file-input-bordered file-input-gunblack w-full" />
                </div>
                <input className="btn w-full bg-gunblack text-white hover:bg-white hover:text-gunblack" type="submit" value="Add Article" />


            </form>
        </div>
    );
};

export default Add;