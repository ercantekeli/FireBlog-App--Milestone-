//* database e bilgi ekleme, bilgi alma, bilgi silme
// import app from "../helpers/firebase";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';
import Toastify from "../helpers/toastNotify";

export const BlogContext = createContext()

const d = new Date();
const time = d.toLocaleDateString();


const BlogContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    //!bilgi ekleme
    const AddNewBlog = (info) => {
        const database = getDatabase();
        const blogRef = ref(database, "milestone");
        const newBlogRef = push(blogRef)
        set((newBlogRef), {
            title: info.title,
            imageURL: info.imageURL,
            content: info.content,
            author: currentUser.email,
            date: time
        })
        Toastify("Blog added")
    }

    //!bilgi çağırma
    const BlogFetch = () => {
        const [isLoading, setIsLoading] = useState();
        const [blogList, setBlogList] = useState();

        useEffect(() => {
            setIsLoading(true)
            const database = getDatabase();
            const blogRef = ref(database, "milestone");

            onValue(blogRef, (snapshot) => {
                const data = snapshot.val();
                const baglantiArray = []

                for (let id in data) {
                    baglantiArray.push({ id, ...data[id] })
                }
                setBlogList(baglantiArray)
                setIsLoading(false)
            })
        }, [])
        return { isLoading, blogList }

    }


    //!veri Silme
    const DeleteBlog = (id) => {
        const database = getDatabase();
        const blogRef = ref(database, "milestone");

        remove(ref(database, "milestone/" + id))
        Toastify("Blog Deleted")
    }


    //!Bilgi Değiştirme
    const UpdateBlog = (info) => {
        const database = getDatabase();
        const updates = {};

        updates["milestone/" + info.id] = info;
        return update(ref(database), updates)
        Toastify("Blog Updated")

    }



    return (
        <BlogContext.Provider value={{ BlogFetch, AddNewBlog, DeleteBlog, UpdateBlog }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;