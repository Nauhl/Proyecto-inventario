import Button from "@material-ui/core/Button";
import { useState, useEffect } from 'react';
import deleteCategory from '../../src/lib/ctrlCategory';

const DeleteCategory = (props)  => {

    const [confirm, setConfirm] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const { allCategories } = props;

    const open = () => setConfirm(true);
    const close = () => setConfirm(false);

    useEffect(() => {
        if (isDeleting) {
            deleteCategory();
        }
    }, [isDeleting])

    const deleteCategory = async () => {
        const categoryId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/categories/${categoryId}`, {
                method: "Delete"
            });

            router.push("/categories");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{allCategories.name}</h1>
                    <p>{allCategories.description}</p>
                    <p>{Object.keys(category.subCategories).length}</p>
                    <Button color="red" onClick={open} >Delete</Button>
                </>
            }
            <div
                open={confirm}
                onCancel={close}
                onconfirm={handleDelete}
            />
        </div>

    )

    DeleteCategory.getInitialProps = async ({ query: { id } }) => {
        const res = await fetch(`http://localhost:3000/api/categories/${id}`);
        const { data } = await res.json();

        return { note: data }

    }
}
export default DeleteCategory();