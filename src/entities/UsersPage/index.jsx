import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "../../store/UsersPage/actions";
import { getUsersStateSelector } from "../../store/UsersPage/selectors";

const UsersPage = () => {
    // without Redux

    // const [isLoading, setLoading] = useState(false);
    // const [usersList, setUsersList] = useState([]);
    //
    // const getUsers = async () => {
    //     setLoading(true);
    //     try {
    //         const { data } = await $api.get("/users");
    //         setUsersList(data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false);
    //     }
    // };
    //
    // useEffect(() => {
    //     getUsers();
    // }, []);

    // =====================================================

    // Vanilla Redux

    const dispatch = useDispatch();
    const { loading, usersData } = useSelector(getUsersStateSelector)

    useEffect (() => {
        dispatch(fetchUsersAsync());
    }, [dispatch])

    return loading ? <div>Loading...</div> : (
        <div>
            {usersData.map(({ id, name }) => (
                <div key={id}>{name}</div>
                )
            )}
        </div>
    )
};

export default UsersPage;
