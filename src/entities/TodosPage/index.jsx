import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTodosAsync } from "../../store/TodosPage/vanillaRedux/actions";
import { getTodosAsync } from "../../store/TodosPage/reduxToolkit/todosSlice";
import { getTodosPageSelectors } from "../../store/TodosPage/selectors";

const TodosPage = () => {
    // without Redux

    // const [todosList, setTodosList] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    //
    // const errorCatcher = error => console.error(error);
    //
    // const getTodos = async () => {
    //     setLoading(true)
    //     try {
    //         const { data } = await $api.get("/todos", { params: { _page: 2, _limit: 15 } });
    //         setTodosList(data);
    //     } catch (error) {
    //         errorCatcher(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    //
    // useEffect(() => {
    //     getTodos();
    // }, []);


    // =======================================================================

    // Vanilla Redux

    const { todosList, isLoading, error } = useSelector(getTodosPageSelectors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return !isLoading ? (
        <div>
            {error && <div>{error}</div>}
            {todosList.map(({ id, title, completed }) => (
                <ul key={id} style={{ marginBottom: "15px" }}>
                    <li>Title: {title}</li>
                    <li>Completed: {completed.toString()}</li>
                </ul>
            ))}
        </div>
    ) : "Loading..."
};

export default TodosPage;
